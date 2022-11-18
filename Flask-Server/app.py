from chat import get_response
from flask import Flask, jsonify, render_template, request
from flask_cors import CORS
from pymongo import MongoClient

#Initiating the flask app 
app = Flask(__name__)
CORS(app)

# Connecting to PyMongo client
# client = MongoClient("mongodb+srv://admin:admin@drthouse.qalor9c.mongodb.net/?retryWrites=true&w=majority")
# database = client.database
# collections = database.intents


# @app.get("/")
# def index_get():
#     print("The website is running in http://127.0.0.1:5000/")
#     return render_template("base.html")


@app.post("/predict")
def predict():
    text = request.get_json().get("message")
    response = get_response(text)
    message = {"answer": response}
    return jsonify(message)


if __name__ == "__main__":
    app.run(debug=True) 