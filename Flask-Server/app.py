from chat import get_response
from flask import Flask, jsonify, render_template, request
from flask_cors import CORS, cross_origin
from flask.helpers import send_from_directory
from pymongo import MongoClient

#Initiating the flask app 
app = Flask(__name__, static_folder="./frontend/build", static_url_path='')
CORS(app)

# # Connecting to PyMongo client
# client = MongoClient("mongodb+srv://admin:admin@drthouse.qalor9c.mongodb.net/?retryWrites=true&w=majority")
# database = client.database
# collection = database.intents


# @app.get("/")
# def index_get():
#     print("The website is running in http://127.0.0.1:5000/")
#     return render_template("base.html")

    
@app.post("/predict")
@cross_origin()
def predict():
    text = request.get_json().get("message")
    response = get_response(text)
    message = {"answer": response}
    return jsonify(message)

# intents = collection.find()

# for intent in intents:
#     for pattern in intent['patterns']:
#         print(pattern)

# # @app.post("/suggest")
# # def suggest():
# #     for intent in intents:
# #         for pattern in intent['patterns']:
# #             patterns = {"pattern": pattern}

@app.route("/")
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, "index.html")

if __name__ == "__main__":
    app.run(debug=True) 