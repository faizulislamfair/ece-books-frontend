import React from 'react';
import './Home.css';
import main_image from './../../assets/images/main_image.svg';
import under_arrow from './../../assets/images/under_arrow.png';
import text_under from './../../assets/images/text_under.svg';
import button_arrow from './../../assets/images/button_arrow.svg';
import reverse_doodle from './../../assets/images/reverse_doodle.svg';
import { Link } from 'react-router-dom';
import Contribute from './../Contribute/Contribute';
import Footer from './../Footer/Footer';
import { Helmet } from "react-helmet";



const Home = () => {
    return (
        <div>

            <Helmet>
                <meta charSet="utf-8" />

                <title>ECE Books</title>

                <link rel="canonical" href="https://ecebooks-71501.web.app/" />

                <meta name="description" content="ECE Books" />

                <meta name="keywords" content="ECE, ECE-Books, RUET, Rajshahi, Bangladesh, 1st year Odd semester, 1st year Even semester, 2nd year Odd semester, 1st year Even semester, 3rd year Odd semester, 3rd year Even semester, 4th year Odd semester, 4th year Even semester" />

                <meta name="author" content="S.M. Faizul Islam Fair Email: faizulislamfair@gmail.com" />


                <meta property="og:site_name" content="ECE Books" />

                <meta property="og:site" content="https://ecebooks-71501.firebaseapp.com/" />

                <meta property="og:title" content="ECE-Books" />

                <meta property="og:description"
                    content=" This is a REST API based project about management of academic books which are classified semester-wise" />

                <meta property="og:image" content={main_image} />

                <meta property="og:url" content="https://ecebooks-71501.firebaseapp.com/" />

                <meta property="og:type" content="website" />

            </Helmet>


            <div className="main-section container">

                <img className='text-merge' src={text_under} alt="" />
                <div className="main-text">
                    Download all of your academic books pdf from one place <br />
                    without any hassle!
                </div>


                <a href="#books"> <button className='btn all-books'>Download Books</button></a><br />




                <div className="image-section">
                    <img src={main_image} alt="" />
                </div>




                <div className='up-down mt-5'>
                    <img src={under_arrow} alt="" />
                </div>


                <img className='reverse-doodle' src={reverse_doodle} alt="" />


                <div id='books' className="book-section mb-5">
                    <div className='shapes'>
                        <div className='rectangle rect-gap'>
                        </div>
                        <div className='rectangle'>
                        </div>
                    </div>
                    <div className='text-flex'>
                        <div className='text-start download-text'>
                            Select your preferred year <br />
                            & semester
                        </div>
                    </div>
                    <div className='btn-box'>
                        <Link style={{ textDecoration: 'none' }} to={`/one_one`}><button className='each-button'>1st year Odd semester &nbsp;&nbsp;&nbsp;<img className='download-option' src={button_arrow} alt="" /></button></Link>
                        <Link style={{ textDecoration: 'none' }} to={`/two_one`}><button className='each-button'>2nd year Odd semester &nbsp;&nbsp;&nbsp;<img className='download-option' src={button_arrow} alt="" /></button></Link>
                        <Link style={{ textDecoration: 'none' }} to={`/three_one`}><button className='each-button'>3rd year Odd semester &nbsp;&nbsp;&nbsp;<img className='download-option' src={button_arrow} alt="" /></button></Link>
                        <Link style={{ textDecoration: 'none' }} to={`/four_one`}><button className='last-button'>4th year Odd semester &nbsp;&nbsp;&nbsp;<img className='download-option' src={button_arrow} alt="" /></button></Link>
                    </div>
                    <div className='btn-box'>
                        <Link style={{ textDecoration: 'none' }} to={`/one_two`}><button className='each-button'>1st year Even semester &nbsp;&nbsp;&nbsp;<img className='download-option' src={button_arrow} alt="" /></button></Link>
                        <Link style={{ textDecoration: 'none' }} to={`/two_two`}><button className='each-button'>2nd year Even semester &nbsp;&nbsp;&nbsp;<img className='download-option' src={button_arrow} alt="" /></button></Link>
                        <Link style={{ textDecoration: 'none' }} to={`/three_two`}><button className='each-button'>3rd year Even semester &nbsp;&nbsp;&nbsp;<img className='download-option' src={button_arrow} alt="" /></button></Link>
                        <Link style={{ textDecoration: 'none' }} to={`/four_two`}><button className='last-button'>4th year Even semester &nbsp;&nbsp;&nbsp;<img className='download-option' src={button_arrow} alt="" /></button></Link>
                    </div>
                </div>

                <Contribute></Contribute>

            </div>

            <Footer></Footer>


        </div>
    );
};

export default Home;