import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../assert/image/Group 573.png'
const Login = () => {
    return (
        <div>
            <div className='login-section'>

                <div className="form-inner">
                <h2>
                WELCOME TO
                </h2>
                    <h3>Login into your account</h3>
                    <form>
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
                                    RememberMe
                                </label>
                            </div>
                            <Link  className="forgot-password">Forgot Password</Link>
                        </div>
                        <div className="form-group clearfix">
                            <button type="submit" className="btn btn-lg btn-4 btn-primary">Login</button>
                        </div>
                        <div className="extra-login clearfix">
                            <span>Or Login With</span>
                        </div>
                    </form>
                    <div className="clearfix"></div>
                    <div className="social-list">
                    <button className="google-bg">
                        <img src={google} alt="" />
                        <span className='google-login'>Continue with Google</span>
                    </button>
                       
                        
                    </div>
                    <p>Don't have an account? <Link to={'/singup'} className="thembo"> Register here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;