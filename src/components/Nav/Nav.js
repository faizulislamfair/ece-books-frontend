import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <div className='container'>
            <div className='container d-flex flex-row justify-content-between'>
                <div className='title'>
                    ECE-Books
                </div>
                <div className='d-flex flex-row justify-content-between nav-items'>
                    <button className='btn sign-in'>Sign In</button>
                    <button className='btn submit'>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Nav;