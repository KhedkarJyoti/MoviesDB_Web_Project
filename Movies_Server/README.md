# Getting Started with Server Movie App


1. Install dependencies via NPM or Yarn

i) Install dependencies via npm
$ npm install

ii) Install dependencies via yarn
$ yarn install


2. Set nodemon.js file 

- create nodemon.js file in movie-app-server
- paste this in file => 

	module.exports = {
	    "port"      : 3067, // port number on which server is running
	    "dbname"    : "moviesdb" // database name
	}


4. Run project 

$ npm start


5. Code Management or Folder Sructure

Apis
|
|----- Component_Name Folder 
		(for ex : Movies)	
				|
				|
				|------- Controller_file - Ex: Controller.js
				|------- Model_file - Ex: Model.js
				|------- Routes_file - Ex: Routes.js



				