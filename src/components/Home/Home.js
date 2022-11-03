import React, {useEffect} from 'react';
import './Home.scss'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/movieApi'
import {APIKey} from '../../common/apis/movieApiKey'
import { useDispatch } from 'react-redux';
import { addMovies } from '../../feauteres/movies/movieSlice';

const Home = () => {

    const movieName = "shrek";
    const dispatch = useDispatch();
    
    useEffect(() => {
        
        const fetchMovies = async () => {
            const response = await movieApi
                .get(`?apiKey=${APIKey}&s=${movieName}&type=movie`)
                .then(recieve => {
                    dispatch(addMovies(recieve.data))
                })
                
        };
        
        fetchMovies();
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