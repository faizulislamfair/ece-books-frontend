import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './../components/Nav/Nav';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;