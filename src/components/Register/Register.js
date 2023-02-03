import React, { useContext, useState } from 'react';
import Style from './Register.module.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from './../../contexts/UserContext';
import signup from './../../assets/images/signup.svg'
import copyright_symbol from './../../assets/images/copyright_symbol.svg';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const Register = () => {

    const [error, setError] = useState('');
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider();


    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/'


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, photoURL, email, password, confirm);


        if (password.length < 6) {
            setError('Password must be atleast 6 characters!')
            return;
        }


        if (password !== confirm) {
            setError('Your Password did not match!');
            return;
        }


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                navigate(from, { replace: true });
                handleUpdateUserProfile(name, photoURL);
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });

    }


    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e));
    }


    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }


    return (
        <div className='container'>
            <div className={Style.reg_title}>Sign Up</div>
            <div className={Style.register_section_main}>
                <img src={signup} alt="" />
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <p className='text-start form-text'>Name</p>
                            <input type="text" name="name" className={Style.form_control} required />
                        </div>
                        <div className="mb-3">
                            <p className='text-start form-text'>Email</p>
                            <input type="email" name="email" className={Style.form_control} id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        </div>
                        <div className="mb-3">
                            <p className='text-start form-text'>Photo URL (Optional)</p>
                            <input type="text" name="photoURL" className={Style.form_control} id="" />
                        </div>
                        <div className="mb-3">
                            <p className='text-start form-text'>Password</p>
                            <input type="password" name="password" className={Style.form_control} id="" required />
                        </div>
                        <div className="mb-3">
                            <p className='text-start form-text'>Confirm Password</p>
                            <input type="password" name="confirm" className={Style.form_control} id="" required />
                        </div>
                        <br />
                        <div className="mb-3">
                            <input style={{ width: '580px', marginRight: '45px', height: '55px', fontSize: '1.5rem', fontWeight: '400', lineHeight: '1.5' }} className='btn submit' type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <br />
                    <p style={{ fontSize: '20px' }}>Already have an account? <Link to='/signin'>Sign In</Link></p>
                    <h4 className='text-error'>{error}</h4>
                    <ButtonGroup vertical style={{ width: '90%', marginRight: '40px' }}>
                        <Button onClick={handleGoogleSignIn} className='mb-2 p-3' variant="outline-danger"> <FaGoogle></FaGoogle> Sign Up with Google</Button>
                        <Button onClick={handleGithubSignIn} className='p-3' variant="outline-dark"><FaGithub></FaGithub> Sign Up with Github</Button>
                    </ButtonGroup>
                </div>
            </div>


            <div className='copyright-section footer-book-gap'>
                <img src={copyright_symbol} alt="" />
                <div className='copyright-text'>
                    2023 All Rights Reserved - Fair & Turag
                </div>
            </div>

        </div>
    );
};

export default Register;