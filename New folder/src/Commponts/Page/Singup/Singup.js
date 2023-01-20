import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './singup.css'
import google from '../../assert/image/Group 573.png'
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';

const Singup = () => {
    const negator = useNavigate()
    // useContext
    const { createUser, updateUserProfile, signInWithGoogle, setLoading, loading } = useContext(AuthContext);
    // check box
    const [check, setCheck] = useState(false)
    // handler form
    const handlerForm = e => {
        e.preventDefault()
        const common = e.target;
        const name = common.name.value
        const email = common.email.value
        const password = common.password.value
        const checkBox = check

        const userAdd = {
            name,
            email,
            role: checkBox ? "seller" : 'user'
        }


        createUser(email, password)
            .then((userCredential) => {
                // Signed in 
                updateUserProfile(name)
                    .then(() => {


                        // fetch user post
                        fetch('https://car-server-amitpaultl.vercel.app/user', {
                            method: 'PUT',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(userAdd)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.success) {
                                    getUserToken(email)

                                }
                            })
                            .catch(error => {
                                toast.error(error.message)
                                setLoading(false)
                            })

                    }).catch((error) => {
                        const errorMessage = error.message;
                        toast.error(errorMessage)
                        setLoading(false)
                    });

            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
                setLoading(false)
                // ..
            });

    }

    // google sign up
    const googleHandel = () => {

        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                const userAdd = {
                    name: user.displayName,
                    email: user.email,
                    role: 'user'
                }
                // fetch user post
                fetch('https://car-server-amitpaultl.vercel.app/user', {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userAdd)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.success) {
                            getUserToken(user.email)
                        }
                    })
                    .catch(error => {
                        toast.error(error.message)
                        setLoading(false)
                    })

            }).catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
                setLoading(false);
            });

    }

    const getUserToken = email => {
        fetch(`https://car-server-amitpaultl.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken)
                    toast.success('Successfully sign up')
                    negator('/')
                    setLoading(false)

                }
            })
    }



    return (
        <div className='login-section mx-auto'>

            <div className="form-inner">
                <h2>
                    WELCOME TO
                </h2>
                <h3>Signup into your account</h3>
                <form onSubmit={handlerForm}>
                    <div className="form-group clearfix">
                        <input name="name" type="text" className="form-control" placeholder="Name Address" aria-label="Name" />
                    </div>
                    <div className="form-group clearfix">
                        <input required name="email" type="email" className="form-control" placeholder="Email Address" aria-label="Email Address" />
                    </div>
                    <div className="form-group clearfix">
                        <input required name="password" type="password" className="form-control" placeholder="Password" aria-label="Password" />
                    </div>
                    <div className="form-group checkbox clearfix">
                        <div className="form-check checkbox-theme float-start ">
                            <input className="form-check-input" type="checkbox" id="rememberMe" name='rememberMe' onClick={() => setCheck(!check)} />
                            <label className="form-check-label" htmlFor="rememberMe">
                                Seller Account
                            </label>
                        </div>

                        <p>Default User Account</p>
                    </div>
                    <div className="form-group clearfix">
                        <button type="submit" className="btn btn-lg btn-4 btn-primary ">
                            {
                                loading ? <div className="spinner-grow loadingLogin" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div> : 'Signup'
                            }
                        </button>
                    </div>
                    <div className="extra-login clearfix">
                        <span>Or Signup With</span>
                    </div>
                </form>
                <div className="clearfix"></div>
                <div className="social-list">
                    <button className="google-bg" onClick={googleHandel}>
                        <img src={google} alt="" />
                        <span className='google-login'>Continue with Google</span>
                    </button>
                </div>
                <p>Don't have an account? <Link to={'/login'} className="thembo"> Login here</Link></p>
            </div>
        </div>
    );
};

export default Singup;