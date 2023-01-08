import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import './OneOne.css';
import Book from '../Book/Book';
import text_merge from './../../assets/images/text_under.svg';
import copyright_symbol from './../../assets/images/copyright_symbol.svg';
import button_arrow from './../../assets/images/button_arrow.svg';
import { useLayoutEffect } from 'react';




const OneOne = () => {

    const oneOne = useLoaderData();
    console.log(oneOne);

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });


    return (
        <div className='container'>

            <img className='book-merge' src={text_merge} alt="book" />
            <div className="main-text book-header">
                <Link to="/">
                    <img className='rotate' src={button_arrow} alt="" />
                </Link>
                <div className='selected'>
                    1st year Odd semester
                </div>
            </div>


            <div className="container">
                <div className="cards">
                    {
                        oneOne.map((each_book, id) => <Book key={id + 1} each_book={each_book}></Book>)
                    }
                </div>
            </div>

            <div className='copyright-section footer-book-gap'>
                <img src={copyright_symbol} alt="" />
                <div className='copyright-text'>
                    2023 All Rights Reserved - Fair & Turag
                </div>
            </div>

        </div>
    );
};

export default OneOne;