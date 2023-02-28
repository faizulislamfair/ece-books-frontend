import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './../../contexts/UserContext';
import './Book.css';
import useAdmin from '../../customHooks/useAdmin';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const OneOneBook = ({ each_book }) => {

    const { book_url, image } = each_book;

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);

    return (
        <div className='book'>
            {
                isAdmin ?
                    <>
                        <a className='download' href={book_url} target='_blank'><button className='btn update mb-3'>Update</button></a>

                        <PhotoProvider>
                            <PhotoView src={image}>
                                <img className='book_img' src={image} alt="" />
                            </PhotoView>
                        </PhotoProvider>

                        <a className='download' href={book_url} target='_blank'><button className='btn submit'>Download</button></a>
                    </>

                    :

                    <>
                        <PhotoProvider>
                            <PhotoView src={image}>
                                <img className='book_img' src={image} alt="" />
                            </PhotoView>
                        </PhotoProvider>

                        <a className='download' href={book_url} target='_blank'><button className='btn submit'>Download</button></a>
                    </>
            }

        </div>
    );
};

export default OneOneBook;