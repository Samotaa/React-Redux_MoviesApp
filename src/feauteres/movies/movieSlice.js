import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi'
import {APIKey} from '../../common/apis/movieApiKey'


export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies' , 
    async () => {
        const movieName = "shrek";
        const response = await movieApi
            .get(`?apiKey=${APIKey}&s=${movieName}&type=movie`)

        return response.data    

    }
);

export const fetchAsyncShows = createAsyncThunk(
    'movies/fetchAsyncShows' , 
    async () => {
        const serieName = "Friend";
        const response = await movieApi
            .get(`?apiKey=${APIKey}&s=${serieName}&type=series`)
        return response.data    

    }
);

export const fetchAsyncMovieOrShowDetails = createAsyncThunk(
    'movies/fetchAsyncMovieOrShowDetails' , 
    async (id) => {
    
        const response = await movieApi
            .get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
        return response.data    

    }
);


const initialState = {
    movies: {},
    shows: {},
    selectMovieOrShow: {}
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        remove: (state) => {
            state.selectMovieOrShow = {};
        }
    }, 
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("pendind")
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log("fetch succsesfull")
            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("prejected")
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            console.log("fetch succsesfull")
            return {...state, shows: payload}
        },
        [fetchAsyncMovieOrShowDetails.fulfilled]: (state, {payload}) => {
            console.log("fetch succsesfull")
            return {...state, selectMovieOrShow: payload}
        },
    }
})

export const { remove } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getMovieOrShowInfo = (state) => state.movies.selectMovieOrShow
export default movieSlice.reducer; 