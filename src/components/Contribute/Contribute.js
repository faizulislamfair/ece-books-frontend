import React from 'react';
import './Contribute.css';
import contribute from './../../assets/images/contribute.svg'
import SignUp from './../SignUp/SignUp';

const Contribute = () => {
    return (
        <div className='contribute-section mb-5'>
            <div className='contribute-text'>
                <div className='small-rectangle'>
                </div>
                <h3 className='pt-2'>Sign Up & Contribute to the Community</h3>
                <div className='small-rectangle'>
                </div>
            </div>
            <div className='contribute-section-main'>
                <img src={contribute} alt="" />
                <div>
                    <SignUp></SignUp>
                </div>
            </div>
        </div>
    );
};

export default Contribute;