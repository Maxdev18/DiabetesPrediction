import json
from flask import Flask, request
from flask_cors import CORS, cross_origin
import numpy

app = Flask(__name__)
cors = CORS(app, origins=["http://localhost:3000"])

@app.route("/")
@cross_origin()
def get_users():
  users = [
    { "name": "John Doe" },
    { "name": "Jane Doe" },
  ]

  return json.dumps(users)

@app.route("/get-result", methods=['POST'])
@cross_origin()
def getResult():
  questions = request.get_json()

  for question in questions["questions"]:
    for input in question["inputs"]:
      print("Value " + str(questions["questions"].index(question) + 1) + ": " + input)

  result = {
    "accuracy": "98%"
  }

  return json.dumps(result)

if __name__ == "__main__":
  app.run()
