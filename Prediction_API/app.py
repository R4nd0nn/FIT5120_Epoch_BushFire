import flask
import json
from flask import request
import forecast


app = flask.Flask(__name__)

@app.route('/forecast')
def get_weather():
    locality = request.args.get("locality")
    if locality is None:
        return "Invalid request. No locality found in request query parameters.", 400

    try:
        result = forecast.get_fire_danger_forecast(locality)

    except ValueError:
        return "Sorry. Locality not found in our database.", 404

    except:
        return "Something went wrong internally.", 500

    return result, 200


if __name__ == "__main__":
    app.run(debug=True)
