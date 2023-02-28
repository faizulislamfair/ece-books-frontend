import React, { useContext } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { AuthContext } from './../../contexts/UserContext';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Nav = () => {

    const { user, logOut } = useContext(AuthContext);


    return (
        <div className='container'>
            <div className='container d-flex flex-row justify-content-between'>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <div className='title'>
                        ECE-Books
                    </div>
                </Link>
                <div className='d-flex flex-row justify-content-between nav-items'>
                    {
                        user?.uid ?
                            <>
                                <Link style={{ textDecoration: 'none' }} onClick={logOut}><button className='btn submit'>Logout</button></Link>

                                <PhotoProvider>
                                    <PhotoView src={user?.photoURL}>
                                        <img title={user?.displayName} style={{ height: '55px' }} className='rounded-circle' src={user?.photoURL} alt="user_image" />
                                    </PhotoView>
                                </PhotoProvider>

                            </>
                            :
                            <>
                                <Link style={{ textDecoration: 'none' }} to={`/signin`}><button className='btn sign-in'>Sign In</button></Link>
                                <Link style={{ textDecoration: 'none' }} to={`/register`}><button className='btn submit'>Sign Up</button></Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Nav;