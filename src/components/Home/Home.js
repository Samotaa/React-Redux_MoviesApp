import React, {useEffect} from 'react';
import './Home.scss'
import MovieListing from '../MovieListing/MovieListing'

import { useDispatch } from 'react-redux';
import { addMovies } from '../../feauteres/movies/movieSlice';
import {fetchAsyncMovies} from '../../feauteres/movies/movieSlice'
import {fetchAsyncShows} from '../../feauteres/movies/movieSlice'
const Home = () => {

   
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchAsyncMovies())
        dispatch(fetchAsyncShows())
    }, [dispatch])

    return (
        <div className="content">
            <div className="banner__img">
                <MovieListing />
            </div>
        </div>
    );
};

export default Home;