import React, { useContext } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import './TwoOne.css';
import BookThree from '../BookThree/BookThree';
import text_merge from './../../assets/images/text_under.svg';
import copyright_symbol from './../../assets/images/copyright_symbol.svg';
import button_arrow from './../../assets/images/button_arrow.svg';
import { useLayoutEffect, useState } from 'react';
import { AuthContext } from './../../contexts/UserContext';
import useAdmin from '../../customHooks/useAdmin';



const TwoOne = () => {

    const twoOne = useLoaderData();

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });


    const [book, setBook] = useState({});

    const handleBook = event => {
        event.preventDefault();

        fetch('https://ece-books-server.vercel.app/two_one', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(book)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Book Added Successfully');
                    event.target.reset();
                }
            })
    }


    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newBook = { ...book }
        newBook[field] = value;
        setBook(newBook);
    }



    return (
        <div className='container'>

            {

                isAdmin ?

                    <>

                        <img className='book-merge' src={text_merge} alt="book" />
                        <div className="main-text book-header">
                            <Link to="/">
                                <img className='rotate' src={button_arrow} alt="" />
                            </Link>
                            <div className='selected'>
                                2nd year Odd semester
                            </div>
                        </div>

                        <form className='mt-5' onSubmit={handleBook}>
                            <div className='form-group mt-2'>
                                <input onBlur={handleInputBlur} className='form-input' type="text" name='image' placeholder='image_url' required />
                            </div>

                            <div className='form-group mt-2'>
                                <input onBlur={handleInputBlur} className='form-input' type="text" name='name' placeholder='name' required />

                            </div>

                            <div className='form-group mt-2'>
                                <input onBlur={handleInputBlur} className='form-input' type="text" name='book_url' placeholder='book_url' required />
                            </div>

                            <button className='btn submit mt-3' type="submit">Add Book</button>
                        </form>



                        <div className="container mt-5">
                            <div className="cards">
                                {
                                    twoOne.map((each_book, id) => <BookThree key={id + 1} each_book={each_book}></BookThree>)
                                }
                            </div>
                        </div>

                        <div className='copyright-section footer-book-gap'>
                            <img src={copyright_symbol} alt="" />
                            <div className='copyright-text'>
                                2023 All Rights Reserved - Fair & Turag
                            </div>
                        </div>


                    </>

                    :

                    <>


                        <img className='book-merge' src={text_merge} alt="book" />
                        <div className="main-text book-header">
                            <Link to="/">
                                <img className='rotate' src={button_arrow} alt="" />
                            </Link>
                            <div className='selected'>
                                2nd year Odd semester
                            </div>
                        </div>


                        <div className="container mt-5">
                            <div className="cards">
                                {
                                    twoOne.map((each_book, id) => <BookThree key={id + 1} each_book={each_book}></BookThree>)
                                }
                            </div>
                        </div>

                        <div className='copyright-section footer-book-gap'>
                            <img src={copyright_symbol} alt="" />
                            <div className='copyright-text'>
                                2023 All Rights Reserved - Fair & Turag
                            </div>
                        </div>


                    </>

            }


        </div>
    );
};

export default TwoOne;