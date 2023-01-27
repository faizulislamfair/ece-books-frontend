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
                    <Link style={{ textDecoration: 'none' }} to={`/signin`}><button className='btn sign-in'>Sign In</button></Link>
                    <Link style={{ textDecoration: 'none' }} to={`/register`}><button className='btn submit'>Sign Up</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;