# DiabetesPrediction
This application predicts if an individual has diabetes based off of their responses to a particular survey.
This react app runs on 2 seperate servers, one holding the frontend, and the other holding the backend.
The project consists an AI model which is stored on the backend. Whenever a user submits the survey, an API request
is made to the backend with the filled out fields from the survey. These fields hold the values for the features which
are used in the AI model to compute the result of whether or not the person has diabetes, pre diabetes, or no diabetes.

To use the web app, read the following instructions down below. If you are only concerned about the frontend, you may
ignore the backend setup. If you are only concerned with the backend, you may ignore the frontend setup.

## Running the Front End Application
### Step 1 | Cloning the repository
Open a terminal and `cd` into a directory that you are comfortable cloning the repository into, like the desktop. Clone the repository by running `git clone https://github.com/Maxdev18/DiabetesPrediction.git`. After cloning the project run `cd DiabetesPrediction`, now you should be in the root directory of the project and enter `cd frontend`.

### Step 2 | Installing dependencies
Now run `npm install` because you need to install all the dependecies needed to run the application successfully. Note that it might take a minute or two for it to install all the dependecies.

### Step 3 | Starting the application
Finally, after the installation of the dependencies is finshed, run the `npm start` script to begin the frontend server. You should automatically be redirected to your browser with the default landing page of the application which should be running on `http://localhost:3000` or `http://127.0.0.1:3000`.

If you want to complete the survey successfully, you will need to follow the setup instructions for the backend which you may do so down below in the next section. 

## Running the backend
If you already have `flask`, `flask-cors`, `pandas`, `scikit-learn`, and `pickle` installed on your python environment. Then you should not be required to follow steps 1 - 3. If you don't however, we recommend to follow the steps mentioned down below. We would also llike to note that if your operating system is configured weirdly, you might run into some issues. Here, we assume that your operating system is fine and doesn't need to be altered, but be warned because some of us have ran into issues ourselves and it was a hassle debugging.

### Step 1 | Navigating to the backend
From the root of the project, run the following command in the terminal to navigate to the backend directory `cd backend`.

### Step 2 | Installing the virtual python environment
#### Windows
Only complete this step if you don't have virtualenv installed on your machine. If you do already, you may skip this step and move onto step 3.

Next, run `python -m pip install --user virtualenv` to install the virtualenv CLI tool to help set up the existing virtual environment in the backend directory.

#### MacOS
Mac has different terminal commands but the process is very similar. You can install virtualenv by doing `sudo pip install virtualenv`. Now you are all done and ready to move on to the next step.

### Step 3 | Creating the virtual environment
#### Windows
After installing virtualenv, run `virtualenv virtualenv` to create the virtual environment for the project.
Then run `virtualenv\Scripts\activate` to activate the virtual environment for the python project.

#### MacOS
Again, Mac has different syntax when it comes to terminal commands but its similar. Run `virtualenv virtualenv` to create the virtual environment.
Then run `virtualenv/bin/activate` to activate the virtual envrionment.

### Step 4 | Installing necessary libraries and packages
Here, we will list the necessary libraries and packages needed to run the backend server. Follow each instruction as shown and you should be fine.
- Run `pip install flask` to install the flask library. Flask allows you to create a server and manage your API points which is great for the web.
- Run `pip install flask-cors`. You need this to configure the CORS policy header in an API request. It allows the communication between the client and the server on a verafiable connection.
- Run `pip install pandas`
- Finally run `pip install scikit-learn`

### Step 5 | Starting the server
After installing all the libraries and packages, you should still be in the `backend` directory. Now run `python server.py` to start the server.
Now the server should be up and running on `http://127.0.0.1:5000` or `http://localhost:5000`. Now you can fill out the survey and get a result.