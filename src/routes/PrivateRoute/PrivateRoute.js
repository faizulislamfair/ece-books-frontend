import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './../../contexts/UserContext';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    if (loading) {
        console.log('Page is loading');
        return <div><h3>Page is Loading!</h3></div>
    }


    if (user && user.uid) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>

};

export default PrivateRoute;