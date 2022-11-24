import React from 'react';
import { Link } from 'react-router-dom';
import './singup.css'
import google from '../../assert/image/Group 573.png'

const Singup = () => {
    return (
        <div className='login-section mx-auto'>

            <div className="form-inner">
                <h2>
                    WELCOME TO
                </h2>
                <h3>Signup into your account</h3>
                <form>
                    <div className="form-group clearfix">
                        <input name="name" type="text" className="form-control" placeholder="Name Address" aria-label="Name" />
                    </div>
                    <div className="form-group clearfix">
                        <input name="email" type="email" className="form-control" placeholder="Email Address" aria-label="Email Address" />
                    </div>
                    <div className="form-group clearfix">
                        <input name="password" type="password" className="form-control" placeholder="Password" aria-label="Password" />
                    </div>
                    <div className="form-group checkbox clearfix">
                        <div className="form-check checkbox-theme float-start">
                            <input className="form-check-input" type="checkbox" id="rememberMe" />
                            <label className="form-check-label" htmlFor="rememberMe">
                                Are You Seller Account Please Check It
                            </label>
                        </div>

                    </div>
                    <div className="form-group clearfix">
                        <button type="submit" className="btn btn-lg btn-4 btn-primary">Signup</button>
                    </div>
                    <div className="extra-login clearfix">
                        <span>Or Signup With</span>
                    </div>
                </form>
                <div className="clearfix"></div>
                <div className="social-list">
                    <button className="google-bg">
                        <img src={google} alt="" />
                        <span className='google-login'>Continue with Google</span>
                    </button>
                </div>
                <p>Don't have an account? <Link to={'/login'}  className="thembo"> Login here</Link></p>
            </div>
        </div>
    );
};

export default Singup;