import flask
from flask import request
import json
import forecast
import logging


app = flask.Flask(__name__)
logging.basicConfig(filename='record.log', level=logging.DEBUG,
    format=f'%(asctime)s %(levelname)s %(name)s %(threadName)s : %(message)s')

@app.route('/forecast')
def get_weather():
    locality = request.args.get("locality")
    if locality is None:
        response = flask.Response("Bad request. No locality found in request query parameters.", 400)

    try:
        result = forecast.get_fire_danger_forecast(locality)
        response = flask.Response(json.dumps(result, indent=1), 200)

    except LookupError:
        response = flask.Response("Sorry. Locality not found in our database.", 404)

    except RuntimeError as e:
        response = flask.Response(str(e), 500)

    except Exception as e:
        response =  flask.Response(str(e), 500)

    response.headers["Access-Control-Allow-Origin"] = "*"
    return response


if __name__ == "__main__":
    app.run(debug=True)
