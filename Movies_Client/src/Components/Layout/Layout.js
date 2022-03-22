/*=== Import Modules ===*/
import React, { useState, useEffect }               from 'react';
import { BrowserRouter as Router, Routes, Route }   from "react-router-dom";

/*=== Import Components ===*/
import Header                                       from '../Header/Header.js';
import Footer                                       from '../Footer/Footer.js';
import Movies                                       from '../Movies/Movies.js';
import MovieDetails                                 from '../MovieDetails/MovieDetails.js';
import { FontAwesomeIcon }                          from '@fortawesome/react-fontawesome'

/*=== Import CSS ===*/
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
	
	return (
		<>                
            <Router>
                <Routes>
                    <Route path="/"             element={<Movies />}/>
                    <Route path="/movie/:id"    element={<MovieDetails />}/>
                    <Route path="/nodata"       element={<Movies />}/>
                </Routes>
            </Router>
            <Footer />
		</>
	);
};

export default Layout;