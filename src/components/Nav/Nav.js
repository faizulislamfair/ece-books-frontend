import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <div className='container'>
            <div className='container d-flex flex-row justify-content-between'>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <div className='title'>
                        ECE-Books
                    </div>
                </Link>
                <div className='d-flex flex-row justify-content-between nav-items'>
                    <button className='btn sign-in'>Sign In</button>
                    <button className='btn submit'>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Nav;