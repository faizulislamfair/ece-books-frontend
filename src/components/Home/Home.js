import React from 'react';
import './Home.css';
import main_image from './../../assets/images/main_image.svg';
import under_arrow from './../../assets/images/under_arrow.png';
import text_under from './../../assets/images/text_under.svg';
import button_arrow from './../../assets/images/button_arrow.svg';
import reverse_doodle from './../../assets/images/reverse_doodle.svg';


const Home = () => {
    return (
        <div className="main-section container">
            <button className='main-button btn'>ECE Books</button> <br />

            <img className='text-merge' src={text_under} alt="" />
            <div className="main-text">
                Download all of your academic book pdf from one place <br />
                without any hassle!
            </div>


            <button className='btn all-books'>Download Books</button> <br />




            <div className="image-section">
                <img src={main_image} alt="" />
            </div>

            <div className='up-down mt-5'>
                <img src={under_arrow} alt="" />
            </div>


            <img className='reverse-doodle' src={reverse_doodle} alt="" />


            <div className="book-section mb-5">
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
                    <button className='each-button'>1st year Odd semester &nbsp;&nbsp;&nbsp;<img src={button_arrow} alt="" /></button>
                    <button className='each-button'>1st year Odd semester &nbsp;&nbsp;&nbsp;<img src={button_arrow} alt="" /></button>
                    <button className='each-button'>1st year Odd semester &nbsp;&nbsp;&nbsp;<img src={button_arrow} alt="" /></button>
                    <button className='last-button'>1st year Odd semester &nbsp;&nbsp;&nbsp;<img src={button_arrow} alt="" /></button>
                </div>
                <div className='btn-box'>
                    <button className='each-button'>1st year Odd semester &nbsp;&nbsp;&nbsp;<img src={button_arrow} alt="" /></button>
                    <button className='each-button'>1st year Odd semester &nbsp;&nbsp;&nbsp;<img src={button_arrow} alt="" /></button>
                    <button className='each-button'>1st year Odd semester &nbsp;&nbsp;&nbsp;<img src={button_arrow} alt="" /></button>
                    <button className='last-button'>1st year Odd semester &nbsp;&nbsp;&nbsp;<img src={button_arrow} alt="" /></button>
                </div>
            </div>

        </div>
    );
};

export default Home;