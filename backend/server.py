import json
from flask import Flask, request
from flask_cors import CORS, cross_origin
import pandas, sklearn, pickle

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
  with open('pickle_model.pkl', 'rb') as f:
    rf = pickle.load(f)
  
  questions = request.get_json()

  if (24 >= int(questions["questions"][0]["inputs"][0]) >= 18):
    age = 1
  elif (29 >= int(questions["questions"][0]["inputs"][0]) >= 25):
    age = 2
  elif (34 >= int(questions["questions"][0]["inputs"][0]) >= 30):
    age = 3
  elif (39 >= int(questions["questions"][0]["inputs"][0]) >= 35):
    age = 4
  elif (44 >= int(questions["questions"][0]["inputs"][0]) >= 40):
    age = 5
  elif (49 >= int(questions["questions"][0]["inputs"][0]) >= 45):
    age = 6
  elif (54 >= int(questions["questions"][0]["inputs"][0]) >= 50):
    age = 7
  elif (59 >= int(questions["questions"][0]["inputs"][0]) >= 55):
    age = 8
  elif (64 >= int(questions["questions"][0]["inputs"][0]) >= 60):
    age = 9
  elif (69 >= int(questions["questions"][0]["inputs"][0]) >= 65):
    age = 10
  elif (74 >= int(questions["questions"][0]["inputs"][0]) >= 70):
    age = 11
  elif (79 >= int(questions["questions"][0]["inputs"][0]) >= 75):
    age = 12
  elif (int(questions["questions"][0]["inputs"][0]) >= 80):
    age = 13

  bmi = (703 * (int(questions["questions"][2]["inputs"][0])/((12 * int(questions["questions"][1]["inputs"][0]) + int(questions["questions"][1]["inputs"][1]))**2)))

  if (questions["questions"][3]["inputs"][0] == 'No'):
    smoker = 0
  elif (questions["questions"][3]["inputs"][0] == 'Yes'):
    smoker = 1

  if (questions["questions"][4]["inputs"][0] == 'No'):
    stroke = 0
  elif (questions["questions"][4]["inputs"][0] == 'Yes'):
    stroke = 1

  if ((int(questions["questions"][5]["inputs"][0]) >= 130) or (int(questions["questions"][6]["inputs"][0]) >= 90)):
    highBP = 1
  else:
    highBP = 0

  if (int(questions["questions"][7]["inputs"][0]) >= 230):
    highChol = 1
  else:
    highChol = 0

  if (questions["questions"][8]["inputs"][0] == 'No'):
    heartDisease = 0
  elif (questions["questions"][8]["inputs"][0] == 'Yes'):
    heartDisease = 1

  if (questions["questions"][9]["inputs"][0] == 'No'):
    physActivity = 0
  elif (questions["questions"][9]["inputs"][0] == 'Yes'):
    physActivity = 1

  if (questions["questions"][10]["inputs"][0] == 'No'):
    noDoc = 0
  elif (questions["questions"][10]["inputs"][0] == 'Yes'):
    noDoc = 1

  genHealth = int(str(questions["questions"][11]["inputs"][0])[0])

  mentHealth = int(questions["questions"][12]["inputs"][0])

  physHealth = int(questions["questions"][13]["inputs"][0])

  if (questions["questions"][14]["inputs"][0] == 'No'):
    diffStairs = 0
  elif (questions["questions"][14]["inputs"][0] == 'Yes'):
    diffStairs = 1

  if (questions["questions"][15]["inputs"][0] == 'Female'):
    sex = 0
  elif (questions["questions"][15]["inputs"][0] == 'Male'):
    sex = 1

  #print(highBP)
  #print(highChol)
  #print(bmi)
  #print(smoker)
  #print(stroke)
  #print(heartDisease)
  #print(physActivity)
  #print(noDoc)
  #print (genHealth)
  #print (mentHealth)
  #print (physHealth)
  #print(diffStairs)
  #print(age)
  #print(sex)

  highBP = (highBP - .429001)/.494934
  highChol = (highChol - .424121)/.494210
  bmi = (bmi - 28.382364)/6.608694
  smoker = (smoker - .443169)/.496761
  stroke = (stroke - .040571)/.197294
  heartDisease = (heartDisease - .094186)/.292087
  physActivity = (physActivity - .756544)/.429169
  noDoc = (noDoc - .084177)/.277654
  genHealth = (genHealth - 2.511392)/1.068477
  mentHealth = (mentHealth - 3.184772)/7.412847
  physHealth = (physHealth - 4.242081)/8.717951
  diffStairs = (diffStairs - .0168224)/.374066
  sex = (sex - .440342)/.496429
  age = (age - 8.032119)/3.054220

  X = [highBP, highChol, bmi, smoker, stroke, heartDisease, physActivity, noDoc, genHealth, mentHealth, physHealth, diffStairs, sex, age]
  X = pandas.array(X)
  X = X.reshape(1, -1)
  prediction = rf.predict(X)
  #print(prediction)

  result = {
    "prediction": int(prediction[0])
  }

  return json.dumps(result)

if __name__ == "__main__":
  app.run()
