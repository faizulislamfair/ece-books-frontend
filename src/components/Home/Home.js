import React from 'react';
import './Home.css';
import main_image from './../../assets/images/main_image.svg';
import under_arrow from './../../assets/images/under_arrow.png';
import text_under from './../../assets/images/text_under.svg';


const Home = () => {
    return (
        <div className="main-section container">
            <button className='main-button btn'>ECE Books</button> <br />

            <img className='text-merge' src={text_under} alt="" />
            <div className="main-text">
                Download all of your academic book pdf from one place <br />
                without any hassle!
            </div>


            <button className='btn all-books'>Download Books</button>

            <div className="image-section">
                <img src={main_image} alt="" />
            </div>

            <div className='up-down mt-5'>
                <img src={under_arrow} alt="" />
            </div>

            <div className="book-section">
                <div>
                    kola
                </div>
                <div>
                    kola
                </div>
                <div>
                    kola
                </div>
                <div>
                    kola
                </div>
            </div>

        </div>
    );
};

export default Home;