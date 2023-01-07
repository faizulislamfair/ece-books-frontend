import React from 'react';
import './Footer.css';
import balloon from './../../assets/images/balloons.svg';
import party_papers from './../../assets/images/party_papers.svg';
import copyright_symbol from './../../assets/images/copyright_symbol.svg';
import text_small_merge from './../../assets/images/text_small_under.svg';



const Footer = () => {
    return (
        <div>
            <img className='text-small-merge' src={text_small_merge} alt="" />
            <div className='container-fluid footer-section'>
                <img src={balloon} alt="" />
                <div>
                    <div className='footer-text-thanks'>
                        Special Thanks
                    </div>
                    <div className='footer-text-names'>
                        Md. Yusuf Mehemud (ECE'17) <br />
                        Mohiuddin Al Faruki Akib (ECE'17)
                    </div>
                </div>
                <img src={party_papers} alt="" />
            </div>

            <div className='copyright-section'>
                <img src={copyright_symbol} alt="" />
                <div className='copyright-text'>
                    2023 All Rights Reserved - Fair & Turag
                </div>
            </div>

        </div>
    );
};

export default Footer;