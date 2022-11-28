import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../feauteres/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard'

import './MovieListing.scss'

const MovieListing = () => {

    const  movies = useSelector(getAllMovies)
    const  shows = useSelector(getAllShows)
    let renderMovies, renderShows = " ";

    renderMovies = movies.Response === "True" ? (
        movies.Search.map((movie, index) => {
            return <MovieCard key={index} data={movie} />
        })
    ) : (
        <div className='errorCard'>
            <h2>{movies.Error}</h2>
        </div>
    );

    renderShows = shows.Response === "True" ? (
        shows.Search.map((movie, index) => {
            return <MovieCard key={index} data={movie} />
        })
    ) : (
        <div className='errorCard'>
            <h2>{shows.Error}</h2>
        </div>
    );

    return (
        <div className="movie__wrapper">
            <div className="movie__list">
                <h2>Movies</h2>
                <div className="movie__area">{renderMovies}</div>
            </div>
            <div className="show__list">
                <h2>Shows</h2>
                <div className="show__area">{renderShows}</div>
            </div>
        </div>
        
    );
};

export default MovieListing;