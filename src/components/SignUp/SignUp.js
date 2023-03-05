import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './../../contexts/UserContext';
import './SignUp.css';
import info from './../../assets/images/info.svg';

const SignUp = () => {

    const { user, logOut } = useContext(AuthContext);

    const [contribute, setContribute] = useState({});

    const handleContribute = event => {
        event.preventDefault();

        fetch('https://ece-books-server.vercel.app/contributions', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(contribute)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Contributed Successfully!');
                    event.target.reset();
                }
            })
    }


    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newContribute = { ...contribute }
        newContribute[field] = value;
        setContribute(newContribute);
    }



    return (
        <form onSubmit={handleContribute}>
            <div className="mb-3">
                <p className='text-start form-text'>Name</p>
                <input onBlur={handleInputBlur} type="text" name='name' className="form-control" required />
            </div>
            <div className="mb-3">
                <p className='text-start form-text'>Email</p>
                <input onBlur={handleInputBlur} type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            </div>
            <div className="mb-3">
                <div className='d-flex flex-row'>
                    {
                        user?.uid ?
                            <>
                                <p className='text-start form-text'>Message </p>

                            </>
                            :
                            <>

                                <p className='text-start form-text'>Message </p>
                                <p className='contribute-span'><img src={info} alt="" /> Please sign in to send a message or be a contributor</p>

                            </>
                    }
                </div>
                <input onBlur={handleInputBlur} type="text" name='book_url' placeholder="Leave the book's pdf link or any message you want to convey!" className="form-control-message" required />
            </div>
            <div className='d-flex flex-row justify-content-between'>

                {
                    user?.uid ?
                        <>
                            <button className='btn submit' type='submit'>Submit</button>
                        </>
                        :
                        <>
                            <Link style={{ textDecoration: 'none' }} to={`/signin`}><button className='btn sign-in'>Sign In</button></Link>
                            <button className='btn submit disabled' type='submit'>Submit</button>
                        </>
                }


            </div>
        </form>
    );
};

export default SignUp;