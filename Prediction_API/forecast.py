import requests
import json
import pickle
import math
from urllib import parse
import os

BASE_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"
KEY = "85RUM6YVQND6VQ73AZ2D282U8"

SOIL_MOISTURE_DEFICITS = None
LOCALITY = None

def load_data():
    """
    Load data from local storage
    """
    with open("data/soil_moisture_VIC.pkl", "rb") as f:
        data = pickle.load(f)

    # easy accisible global variables
    global SOIL_MOISTURE_DEFICITS
    global LOCALITY

    # soil moisture data for year 2020 for localities in Victoria
    SOIL_MOISTURE_DEFICITS = data['smd']
    # locality data Dataframe
    LOCALITY = data['locality']

def get_forecast(locality):
    """
    Get 15 days weather forecast from Visual Crossing Weather API
    """
    quoted_locality = parse.quote(locality)
    forecast_url = BASE_URL + '{locality}/'.format(locality=quoted_locality) # forecast url
    params = {
        'key': KEY,
        'include': 'fcst'
    }

    response = requests.get(forecast_url, params=params)
    forecast = json.loads(response.text)
    return forecast


def get_historical_weather(locality):
    """
    Get historical observations for last 7 days from Visual Crossing Weather API
    """
    # quote the locality string (for url encoding)
    quoted_locality = parse.quote(locality)
    historical_url = BASE_URL + '{locality}/last7days'.format(locality=quoted_locality)
    params = {
        'key': KEY,
        'include': 'obs'
    }

    # send get request
    response = requests.get(historical_url, params=params)
    # load JSON response
    observations = json.loads(response.text)
    return observations

def find_last_precipitation(obs):
    """
    Calculate number of days its been from last rainfall
    """
    days_since_last_precipitation = 0
    for day in sorted(obs['days'], reverse=True, key= lambda  d: d['datetime']):
        if day['precip'] == 0:
            days_since_last_precipitation += 1
        else:
            break

        return days_since_last_precipitation


def get_FFDI_category(FFDI):
    """
    Get Category for Forest Fire Danger Index
    """
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
    """
    Forecast Forest Fire Danger Index based on historial observations and weather forecast
    """
    # load data if not present
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
        FFDI = 1.2753 * math.exp((0.987 * math.log(DF+0.000001)) + (0.0338 * T) + (0.0234 * V) - (0.0345 * RH))
        FFDI_category  = get_FFDI_category(FFDI)

        day['FFDI'] = FFDI
        day['FFDI_category'] = FFDI_category

    return forecast
