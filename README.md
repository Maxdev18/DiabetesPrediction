# DiabetesPrediction
This application predicts if an individual has diabetes based off of their responses to a particular survey.
This react app runs on 2 seperate servers, one holding the frontend, and the other holding the backend.
The project consists an AI model which is stored on the backend. Whenever a user submits the survey, an API request
is made to the backend with the filled out fields from the survey. These fields hold the values for the features which
are used in the AI model to compute the result of whether or not the person has diabetes, pre diabetes, or no diabetes.

To use the web app, read the following instructions down below. If you are only concerned about the frontend, you may
ignore the backend setup. If you are only concerned with the backend, you may ignore the frontend setup.

## Running the Front End Application
### Step 1:
After cloning the project, in the root directory run `cd frontend`.

### Step 2:
Now run `npm install` because you need to install all the dependecies needed to run the react application.

### Step 3:
Finally, after waiting a minute or two for the dependencies to install, run the `npm start` script to begin the server. 
The server is now up and running on `http://localhost:3000` or `http://127.0.0.1:3000`.


## Run the backend server
### Step 1:
From the root of the project, run the following command in the terminal to navigate to the backend directory `cd backend`.

### Step 2:
Only complete this step if you don't have virtualenv installed on your machine. If you do already, you may skip this step and move onto step 3.

Next, run `python -m pip install --user virtualenv` to install the virtualenv CLI tool to help set up the existing virtual environment in the backend directory.

### Step 3:
After installing virtualenv, run `virtualenv virtualenv` to create the virtual environment for the project.
Then run `virtualenv\Scripts\activate` to activate the virtual environment for your python project.

### Step 4:
Next run `pip install flask` to install the flask library. Flask allows you to create a server and manage your API points which is great for the web.

### Step 5:
After flask has been installed, you should still be in the `backend` directory. Now run `python server.py` to start the server.
Now the server is up and running on `http://127.0.0.1:5000` or `http://localhost:5000` and you can now work on the backend.