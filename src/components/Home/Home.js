import React from 'react';
import './Home.css';
import main_image from './../../assets/images/main_image.svg';

const Home = () => {
    return (
        <div className="main-section container">
            <button className='main-button btn'>ECE Books</button>
            <div className="main-text">
                Download all of your academic book pdf from one place without any hustle!
            </div>
            <div className="image-section">
                <img src={main_image} alt="" />
            </div>
        </div>
    );
};

export default Home;