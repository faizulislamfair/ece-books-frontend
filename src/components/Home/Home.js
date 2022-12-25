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
import Nav from './../Nav/Nav';


const Home = () => {
    return (
        <div>
            <div className="main-section container">

                <Nav></Nav>

                <img className='text-merge' src={text_under} alt="" />
                <div className="main-text">
                    Download all of your academic book pdf from one place <br />
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
                    <div>
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
                        <Link style={{ textDecoration: 'none' }} to={`/one_one`}><button className='each-button'>1st year Odd semester &nbsp;&nbsp;&nbsp;<img src={button_arrow} alt="" /></button></Link>
                        <Link style={{ textDecoration: 'none' }} to={`/two_one`}><button className='each-button'>2nd year Odd semester &nbsp;&nbsp;&nbsp;<img src={button_arrow} alt="" /></button></Link>
                        <Link style={{ textDecoration: 'none' }} to={`/three_one`}><button className='each-button'>3rd year Odd semester &nbsp;&nbsp;&nbsp;<img src={button_arrow} alt="" /></button></Link>
                        <Link style={{ textDecoration: 'none' }} to={`/four_one`}><button className='last-button'>4th year Odd semester &nbsp;&nbsp;&nbsp;<img src={button_arrow} alt="" /></button></Link>
                    </div>
                    <div className='btn-box'>
                        <Link style={{ textDecoration: 'none' }} to={`/one_two`}><button className='each-button'>1st year Even semester &nbsp;&nbsp;&nbsp;<img src={button_arrow} alt="" /></button></Link>
                        <Link style={{ textDecoration: 'none' }} to={`/two_two`}><button className='each-button'>2nd year Even semester &nbsp;&nbsp;&nbsp;<img src={button_arrow} alt="" /></button></Link>
                        <Link style={{ textDecoration: 'none' }} to={`/three_two`}><button className='each-button'>3rd year Even semester &nbsp;&nbsp;&nbsp;<img src={button_arrow} alt="" /></button></Link>
                        <Link style={{ textDecoration: 'none' }} to={`/four_two`}><button className='last-button'>4th year Even semester &nbsp;&nbsp;&nbsp;<img src={button_arrow} alt="" /></button></Link>
                    </div>
                </div>

                <Contribute></Contribute>

            </div>

            <Footer></Footer>


        </div>
    );
};

export default Home;