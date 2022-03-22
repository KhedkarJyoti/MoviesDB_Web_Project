/*=== Import Modules ===*/
import React, { useState, useEffect } 	from "react";
import { useParams } 						from "react-router-dom";
import Axios 									from "axios";
import ReactLoading 							from "react-loading";

/*=== Import Components ===*/
import Header 									from "../Header/Header.js";

/*=== Import CSS ===*/
import "./MovieDetails.css";

const MovieDetails = (props) =>{
	const params = useParams();

	const [movie, setMovie] 		= useState();
	const [loading, setLoading] 	= useState(true);

 	useEffect(() => {
 		async function getSingleMovie(){
        // Call API to get single movie details
        await Axios.get('/api/movies/get/single/movie/'+params.id)
        .then((response) => {

            // Set response to movies
            setMovie(response.data);
            setTimeout(() => {
               setLoading(false);
            },1500);

        }).catch(function (error) {
            console.log("Error getSingleMovie() => ", error);
        });
    	}
    	
    	getSingleMovie();
	}, []); 


	return(
		<>
		{console.log("movie => ",movie)}
			<Header heading={"Movie Details"} showBackBtn={true} />
			{loading
				?
					<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 loader_wrapper ">
						<div className="loader_div">
							<div className="loading_text">Loading Data... </div>
							<div className="loader_img"><ReactLoading type={"spin"} color={"#ff0"} height={'10%'} width={'10%'} /></div>
						</div>
					</div>
				:
					<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 movie_details ">
						<div className="row">
							<div className="movie_title mb-3 pt-2 pb-2 fs-5 fw-bold col-12 bg-secondary col-sm-12 col-md-12 col-lg-12 col-xl-12">
								{movie.title}
							</div>
							<div className="detailed_movie_img col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3">
								<img src={movie.image_url} alt='movie'></img>					
							</div>				
							<div className="col-8 col-sm-8 col-md-9 col-lg-9 col-xl-9">
								<div className="movie_year fw-bold fs-5">{movie.year}</div>		
								<div className="movie_duration fw-light fs-6">{movie.movie_duration} mins</div>		
								<div className="movie_rating fw-bold mt-1">{movie.rating} / 10</div>		
								<div className="fav_btn mt-3"><button className="btn btn-secondary">Add to Favorite</button></div>
							</div>
							<div className="movie_desc mt-3 mb-3 fw-normal col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
								{movie.description}				
							</div>
							<hr/>
							<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-3">
								<div className="fs-6 fw-bold col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">Actors</div>
								{movie.actors.map((actor, index) => {
									return(
										<div key={"actor-"+index}className=" fw-normal col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
											{actor}
										</div>
									)
								})}		
							</div>						
						</div>
					</div>
		}
		</>
	)
}

export default MovieDetails;