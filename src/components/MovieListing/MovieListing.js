import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../feauteres/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard'

import './MovieListing.scss'

const MovieListing = () => {

    const  movies = useSelector(getAllMovies)
    let renderMovies = " ";
    renderMovies = movies.Response === "True" ? (
        movies.Search.map((movie, index) => {
            return <MovieCard key={index} data={movie} />
        })
    ) : (
        <div className='errorCard'>
            <h2>{movies.Error}</h2>
        </div>
    );

    return (
        <div className="movie__wrapper">
            <div className="movie__list">
                <h2>Movies</h2>
                <div className="movie__area">{renderMovies}</div>
            </div>
        </div>
    );
};

export default MovieListing;