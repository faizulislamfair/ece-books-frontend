import React from 'react';
import './Book.css';

const OneOneBook = ({ each_book }) => {

    const { book_url, image } = each_book;

    return (
        <div className='book'>
            <img className='book_img' src={image} alt="" />
            <a className='download' href={book_url} target='_blank'><button className='btn submit'>Download</button></a>
        </div>
    );
};

export default OneOneBook;