const mongoose = require('mongoose');

const moviesSchema = mongoose.Schema({
    _id                 : mongoose.Schema.Types.ObjectId,
    year                : Number,
    title               : String,              
    directors           : Array,
    release_date        : String,
    rating              : Number,
    genres              : Array,
    image_url           : String,
    description         : String,
    rank                : Number,
    movie_duration      : Number,
    actors              : Array
});

module.exports = mongoose.model('movies',moviesSchema);
