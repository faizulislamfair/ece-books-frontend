import React from 'react';
import './SignIn.module.css';
import contribute from './../../assets/images/contribute.svg'

const Contribute = () => {
    return (
        <div className='container'>
            <div className='contribute-section-main'>
                <img src={contribute} alt="" />
                <form>
                    <div className="mb-3">
                        <p className='text-start form-text'>Name</p>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <p className='text-start form-text'>Email</p>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <p className='text-start form-text'>Message</p>
                        <input type="text" className="form-control-message" />
                    </div>
                    <div className='d-flex flex-row justify-content-between'>
                        <button className='btn sign-in'>Sign In</button>
                        <button className='btn submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contribute;