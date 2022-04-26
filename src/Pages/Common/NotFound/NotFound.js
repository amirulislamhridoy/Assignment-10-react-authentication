import React from 'react';
import './NotFound.css'
import notFound from '../../../images/404/404.jpg'

const NotFound = () => {
    return (
        <div className="notFound">
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;