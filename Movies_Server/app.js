const express       	= require('express');
const app 				= express();
const morgan 			= require('morgan'); // morgan call next function if problem occure
const bodyParser 		= require('body-parser'); // this package use to formate json data 
const mongoose 	   = require ('mongoose');
const globalVariable = require("./nodemon.js");

/* Define Routes */
const moviesRoutes 	= require('./Apis/Movies/Routes.js');


/* Establish Connection with MongoDB */
mongoose.connect('mongodb://127.0.0.1:27017/'+globalVariable.dbname,{
	useNewUrlParser 		: true,
	useUnifiedTopology 	: true 
})

mongoose.promise = global.Promise;

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {

	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);

	if (req.method === "OPTIONS") {
		res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
		return res.status(200).json({});
	}

	next();
});


/* Use defined routes */
app.use("/api/movies", moviesRoutes);


/* handle all other request which not found */
app.use((req, res, next) => {
	const error  = new Error('Not Found Manual ERROR');
	error.status = 404;
	next(error);
	// when we get 404 error it send to next 
});


/* it will handel all error in the application*/
app.use((error, req, res, next) => {
	
	res.status(error.status || 500);
	res.json({
		error:{
			message:error.message
		}
	})
});

module.exports = app;