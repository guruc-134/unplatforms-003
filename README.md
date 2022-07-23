# Problem Statement
![image](https://user-images.githubusercontent.com/70446767/180618027-6cea59ff-5bdd-419d-8040-ad307ab7b4e6.png)
![image](https://user-images.githubusercontent.com/70446767/180618036-4e923f0a-4ebd-465d-96c0-6cd19804e2f3.png)

## Features:
* Like the blogs, each user can only like once, once a person likes the blog , like button will become blue color
* Comment on blogs, names of the person who comments will also be visible
* View for the blog will be increased, everytime the page is refreshed

View the site functioning here: https://unplatforms-assignment.netlify.app/
## Some implementational details
* used react hooks, and use context for global statemanagement
* used firebase-firestore as a database
* Comments and likes are stored as collections
* Used Google-signin for authenticating the user into the application so that likes and comments and views can be tracked

### To run it in your local system follow the steps:
* clone this repo
* enter the repo and press the command `npm install`, it will install all the node modules which are required for the projects
* then run the command `npm run start`


## Additional Information

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


