import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovieOrShowDetails, getMovieOrShowInfo, remove } from '../../feauteres/movies/movieSlice';
import './MovieDetail.scss'

const MovieDetail = () => {

    const { imdbID } = useParams();
   
    const dispatch = useDispatch();
    const data = useSelector(getMovieOrShowInfo)

    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetails(imdbID))
        return () => {
            dispatch(remove())
        }
    }, [dispatch, imdbID])
    return (
        <div className='movie__section'>
            <div className="left">
                <div className="movie__name">
                    <h1>{data.Title}</h1>
                </div>
                <div className="movie__description">
                    <div className="movie__description__title">
                        <span>Description:</span>
                        <span>{data.Plot}</span>
                    </div>
                    <div className="movie__actors">
                        <span>Actors:</span>
                        <span>{data.Actors}</span>
                    </div>
                    <div className="movie__year">
                        <span>Year:</span>
                        <span> {data.Year}</span>
                    </div>
                    <div className="movie__awards">
                        <span>Awards:</span>
                        <span>{data.Awards}</span>    
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="picture">
                    <img src={data.Poster} alt={data.Title} />
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;