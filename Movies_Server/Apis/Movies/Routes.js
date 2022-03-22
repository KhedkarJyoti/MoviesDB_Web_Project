const express 	= require("express");
const router 	= express.Router();

const movies = require('./Controller.js');

router.post('/post/movie',  						movies.addMovie);

router.get('/get/list',  							movies.getMoviesList);

router.get('/get/single/movie/:movie_id',  	movies.getSingleMovie);

module.exports = router;
