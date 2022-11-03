import React from 'react';
import {Link} from 'react-router-dom'
import user from '../../images/user.png'
import "./Header.scss"

const header = () => {
    return (
        <div className="header">
            <Link  to='/'>
                <div className="logo">Movie App</div>
            </Link>
            
            <div className="user__image">
                <img src={user} alt="user" />
            </div>
        </div>
    );
};

export default header;