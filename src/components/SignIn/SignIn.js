import React, { useContext, useLayoutEffect, useState } from 'react';
import Style from './SignIn.module.css';
import contribute from './../../assets/images/contribute.svg'
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import copyright_symbol from './../../assets/images/copyright_symbol.svg';



const SignIn = () => {

    const [error, setError] = useState('');

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });


    const { signIn, providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider();

    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            }
            );
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

            <div className={Style.login_title}>Sign In</div>
            <div className={Style.login_section_main}>
                <img src={contribute} alt="" />
                <div>
                    <form className={Style.form} onSubmit={handleSubmit}>
                        <div className={Style.form_inputs}>
                            <div className="mb-3">
                                <p className='text-start form-text'>Email</p>
                                <input type="email" name="email" className={Style.form_control} id="exampleInputEmail1" aria-describedby="emailHelp" required />
                            </div>
                            <div className="mb-3">
                                <p className='text-start form-text'>Password</p>
                                <input type="password" name="password" className={Style.form_control} id="" required />
                            </div>
                        </div>
                        <br />
                        <div className="mb-3">
                            <input className={Style.sign_in_button} type="submit" value="Sign In" />
                        </div>
                    </form>
                    <br />
                    <p className={Style.shifting_option}>New to ECE-Books? <Link to='/register'>Create a New Account</Link></p>
                    <h4 className={Style.text_error}>{error}</h4>
                    <div className={Style.button_group}>
                        <ButtonGroup vertical style={{ width: '90%' }}>
                            <Button onClick={handleGoogleSignIn} className='mb-2 p-3' variant="outline-danger"> <FaGoogle style={{ fontSize: '22px' }}></FaGoogle><span style={{ fontSize: '17px' }}> Sign In with Google</span> </Button>
                            <Button onClick={handleGithubSignIn} className='p-3' variant="outline-dark"><FaGithub style={{ fontSize: '23px' }}></FaGithub><span style={{ fontSize: '17px' }}> Sign In with Github</span></Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>


            <div className={Style.copyright_section}>
                <img src={copyright_symbol} alt="" />
                <div className={Style.copyright_text}>
                    2023 All Rights Reserved - Fair & Turag
                </div>
            </div>
        </div>

    );
};

export default SignIn;