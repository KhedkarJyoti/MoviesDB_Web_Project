const mongoose          = require("mongoose");
const Movies            = require('./Model.js');
var ObjectId            = require('mongodb').ObjectID;


/*=== addMovie => API to get all movies list ===*/
exports.addMovie = (req,res,next)=>{
    
    const movies = new Movies({
        _id             : new mongoose.Types.ObjectId(),
        year            : req.body.year,
        title           : req.body.title,              
        directors       : req.body.directors,
        release_date    : req.body.release_date,
        rating          : req.body.rating,
        genres          : req.body.genres,
        image_url       : req.body.image_url,
        description     : req.body.description,
        rank            : req.body.rank,
        movie_duration  : req.body.movie_duration,
        actors          : req.body.actors,   
        createdAt       : new Date()
    })
    movies.save()
    .then(data=>{
        res.status(200).json({ 
            created : true, 
            data_id : data._id 
        });
    })
    .catch(err =>{
        console.log("err",err.code)
        res.status(500).json({ 
            error : err 
        });         
    });
};

/*=== getMoviesList => API to get all movies list ===*/
exports.getMoviesList = (req, res, next)=>{
    Movies.find({})
    .exec()
    .then(data=>{        
        res.status(200).json(data);
    })
    .catch(err =>{
        res.status(500).json({ error: err });
    }); 
};

/*=== getSingleMovie => API to get single movies details ===*/
exports.getSingleMovie = (req, res, next)=>{
    Movies.findOne({"_id" : ObjectId(req.params.movie_id)})
    .exec()
    .then(data=>{        
        res.status(200).json(data);
    })
    .catch(err =>{
        res.status(500).json({ error: err });
    }); 
};