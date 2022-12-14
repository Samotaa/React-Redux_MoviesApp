import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import user from '../../images/user.png'
import "./Header.scss"
import { useDispatch } from 'react-redux'
import {fetchAsyncMovies} from '../../feauteres/movies/movieSlice'
import {fetchAsyncShows} from '../../feauteres/movies/movieSlice'

const Header = () => {

    const [text, setText] = useState("");
    
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault();
        if (text === '') return alert("Enter name of Movie or Show")
        dispatch(fetchAsyncShows(text))
        dispatch(fetchAsyncMovies(text))
        setText(text)
    }
    console.log(text)
    return (
        <div className="header">
            <Link  to='/'>
                <div className="logo">Movie App</div>
            </Link>
            <div className="search__bar">
                <form onSubmit={submitHandler}>
                    <input type="text" value={text} placeholder="Search" onChange={(e) => setText(e.target.value)} />
                    <button type="submit">Search</button>
                </form>
            </div>
            <div className="user__image">
                <img src={user} alt="user" />
            </div>
        </div>
    );
};

export default Header;