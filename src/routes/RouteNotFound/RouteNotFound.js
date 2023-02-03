import React from 'react';
import './RouteNotFound.css';

const RouteNotFound = () => {
    return (
        <div className='error'>
            Route Not Found: <span className='error-name'>404 Error!</span>
        </div>
    );
};

export default RouteNotFound;