/*=== Import Modules ===*/
import React, { useState, useEffect }   from 'react';
import Axios                            from 'axios';
import ReactLoading                     from "react-loading";

/*=== Import Components ===*/
import Header                           from '../Header/Header.js';

/*=== Import CSS ===*/
import './Movies.css';

const Movies = (props) => {
    const [movies, setMovies]       = useState([]);    
    const [loading, setLoading]     = useState(true)

    const getAllMoviesList = async () => {
        // Call API to get all movies list
        await Axios.get('/api/movies/get/list')
        .then((response) => {
            console.log("response => ",response.data);
            // Set response to movies
            setMovies(response.data);
            setTimeout(() => {
                setLoading(false);
            },1500);

        }).catch(function (error) {
            console.log("Error getAllMoviesList() => ", error);
        });
    };


    useEffect(() => {
        getAllMoviesList();
    }, []);


    return (
        <>
            <Header heading={"All Movies List"} showBackBtn={false} />
            {loading
                ?
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 loader_wrapper ">
                        <div className="loader_div">
                            <div className="loading_text">Loading Data... </div>
                            <div className="loader_img"><ReactLoading type={"spin"} color={"#ff0"} height={'10%'} width={'10%'} /></div>
                        </div>
                    </div>
                :
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-3">
                        <div className="row">
                            {movies.map((movie, index) => (
                                <div key={"movie-"+index} className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 movie_image_container d-flex justify-content-start mb-3'>
                                    <img 
                                        src={movie.image_url} 
                                        alt='movie'
                                        onClick={() => window.location.href='/movie/'+movie._id}
                                    ></img>
                                </div>
                            ))}
                        </div>
                    </div>
            }
        </>
    );
};

export default Movies;