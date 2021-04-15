import os
import requests
import json
import pickle
import math
from urllib import parse
import logging
from random import choice

BASE_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"
SOIL_MOISTURE_DEFICITS = None
LOCALITY = None

def load_data():
    """
    Load data from local storage
    """
    with open("data/soil_moisture_VIC.pkl", "rb") as f:
        data = pickle.load(f)

    with open("keys.json", "r") as f:
        global KEYS = json.load(f)

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
    forecast_url = BASE_URL + '{locality},VIC/'.format(locality=quoted_locality) # forecast url
    params = {
        'key': choice(KEYS),
        'include': 'fcst',
        'unitGroup': 'metric'
    }

    response = requests.get(forecast_url, params=params)

    if response.status_code != 200:
        logging.info("Unsuccessful request from WeatherAPI for %r", locality)
        logging.info(response.text)
        raise RuntimeError(response.text)

    forecast = json.loads(response.text)
    logging.info("Successfully fetched forecast for %r", locality)
    return forecast


def get_historical_weather(locality):
    """
    Get historical observations for last 7 days from Visual Crossing Weather API
    """
    # quote the locality string (for url encoding)
    quoted_locality = parse.quote(locality)
    historical_url = BASE_URL + '{locality},VIC/last7days'.format(locality=quoted_locality)
    params = {
        'key': choice(KEYS),
        'include': 'obs',
        'unitGroup': 'metric'
    }

    # send get request
    response = requests.get(historical_url, params=params)

    if response.status_code != 200:
        logging.info("Unsuccessful request from WeatherAPI for %r", locality)
        logging.info(response.text)
        raise RuntimeError(response.text)

    # load JSON response
    observations = json.loads(response.text)
    logging.info("Successfully fetched historical observations for %r", locality)
    return observations

def find_last_precipitation(obs):
    """
    Calculate number of days its been from last rainfall
    """
    days_since_last_precipitation = 0
    for day in sorted(obs['days'], reverse=True, key= lambda  d: d['datetime']):
        precip= day['precip'] if day['precip'] is not None else 0
        if precip == 0:
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
        logging.info("Dataset loaded into application.")

    locality = locality.lower()
    logging.info("Calulating fire danger rating for %r", locality)

    if locality not in SOIL_MOISTURE_DEFICITS:
        logging.error("Locality not found in dataset %r", locality)
        raise LookupError("Locality not found.")

    SMD = SOIL_MOISTURE_DEFICITS[locality]
    observations = get_historical_weather(locality)
    days_since_last_precipitation = find_last_precipitation(observations)
    forecast = get_forecast(locality)
    A = days_since_last_precipitation - 1

    for day in forecast['days']:
        if day['precip'] == 0:
            A += 1
        else:
            A = 0

        R = day['precip'] if day['precip'] is not None else 0# precipitation in mm
        V = day['windspeed'] # windspeed in km/h
        T = day['tempmax'] # maximum temperature in degree C
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

    logging.info("Successfully calculated predictions for %r", locality)
    return forecast
