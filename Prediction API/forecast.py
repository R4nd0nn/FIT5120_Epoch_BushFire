import requests
import json
import pickle
import math
from urllib import parse
import os

BASE_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"
KEY = "85RUM6YVQND6VQ73AZ2D282U8"
#KEY = "DWVCZAHTPJQWNGLTNDHSTD2FV"

SOIL_MOISTURE_DEFICITS = None
LOCALITY = None

def load_data():
    with open("data/soil_moisture_VIC.pkl", "rb") as f:
        data = pickle.load(f)

    global SOIL_MOISTURE_DEFICITS
    global LOCALITY

    SOIL_MOISTURE_DEFICITS = data['smd']
    LOCALITY = data['locality']

def get_forecast(locality):
    quoted_locality = parse.quote(locality)
    forecast_url = BASE_URL + '{locality}/'.format(locality=quoted_locality)
    params = {
        'key': KEY,
        'include': 'fcst'
    }

    response = requests.get(forecast_url, params=params)
    forecast = json.loads(response.text)
    return forecast


def get_historical_weather(locality):
    quoted_locality = parse.quote(locality)
    historical_url = BASE_URL + '{locality}/last7days'.format(locality=quoted_locality)
    params = {
        'key': KEY,
        'include': 'obs'
    }

    response = requests.get(historical_url, params=params)
    observations = json.loads(response.text)
    return observations

def find_last_percipitation(obs):

    days_since_last_percipitation = 0
    for day in sorted(obs['days'], reverse=True, key= lambda  d: d['datetime']):
        if day['precip'] == 0:
            days_since_last_percipitation += 1
        else:
            break

        return days_since_last_percipitation


def get_FFDI_category(FFDI):
    if FFDI >= 0 and FFDI <= 11:
        return 'low-moderate'
    elif FFDI > 11 and FFDI <= 24:
        return "high"
    elif FFDI > 24 and FFDI <= 49:
        return "very high"
    elif FFDI > 49 and FFDI <= 99:
        return "severe"
    elif FFDI > 99 and FFDI <= 149:
        return "extreme"
    else:
        return "catastrophic (code red)"


def get_fire_danger_forecast(locality):
    if SOIL_MOISTURE_DEFICITS is None and LOCALITY is None:
        load_data()

    locality = locality.lower()

    if locality not in SOIL_MOISTURE_DEFICITS:
        raise ValueError("Locality not found")

    SMD = SOIL_MOISTURE_DEFICITS[locality]
    observations = get_historical_weather(locality)
    days_since_last_percipitation = find_last_percipitation(observations)
    forecast = get_forecast(locality)
    A = days_since_last_percipitation - 1

    for day in forecast['days']:
        if day['precip'] == 0:
            A += 1
        else:
            A = 0

        R = day['precip'] # percipitation in mm
        V = day['windspeed'] #windspeed in km/h
        T = day['tempmax'] #maximum temperature in degree C
        RH = day['humidity']



        # Calculate Drought factor
        x = (A ** 1.3) / ((A** 1.3) + R - 2)
        F =  ((41*(x**2)) + x) / (40*(x**2) + x + 1)
        DF = 10.5 * (1- math.exp(-((SMD + 30)/40))) * F # Drought factor

        # Calculate Forest fire danger index
        FFDI = 1.2753 * math.exp((0.987 * math.log(DF)) + (0.0338 * T) + (0.0234 * V) - (0.0345 * RH))
        FFDI_category  = get_FFDI_category(FFDI)

        day['FFDI'] = FFDI
        day['FFDI_category'] = FFDI_category

    return forecast
