import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../assert/image/Group 573.png'
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import { Modal } from 'react-bootstrap';
const Login = () => {
    const { setLoading, loading, signin, signInGoogle, resetPassword } = useContext(AuthContext);

    // location
    const location = useLocation();

    // location navigete
    const from = location.state?.from?.pathname || '/';

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // use navigate
    const navigate = useNavigate()

    // email login
    const handlerForm = (e) => {
        e.preventDefault()
        const common = e.target;
        const email = common.email.value
        const password = common.password.value
        signin(email, password)
            .then((userCredential) => {
                // Signed in 
                getUserToken(email)

            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
                setLoading(false)
            });
    }

    // forget passwoed

    const forgetPassword = (e) => {
        e.preventDefault()
        setLoading(false)
        const email = e.target.email.value;
        resetPassword(email)
        .then(() => {
            setLoading(true)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }

    // google sign up
    const googleHandel = () => {

        signInGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })

        setLoading(false)
    }

    const getUserToken = email => {
        fetch(`https://car-server-amitpaultl.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken)

                    navigate(from, { replace: true })
                    setLoading(false)

                }
            })
    }


    return (
        <div>
            <div className='login-section'>

                <div className="form-inner">
                    <h2>
                        WELCOME TO
                    </h2>
                    <h3>Login into your account</h3>
                    <form onSubmit={handlerForm}>
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
                            <button className=" buyNow">Forgot Password</button>
                        </div>
                        <div className="form-group clearfix">

                            <button type="submit" className="btn btn-lg btn-4 btn-primary ">
                                {
                                    loading ? <div className="spinner-grow loadingLogin" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div> : 'Login'
                                }
                            </button>

                        </div>
                        <div className="extra-login clearfix">
                            <span>Or Login With</span>
                        </div>
                    </form>
                    <div className="clearfix"></div>
                    <div className="social-list">
                        <button onClick={googleHandel} className="google-bg">
                            <img src={google} alt="" />
                            <span className='google-login'>Continue with Google</span>
                        </button>


                    </div>
                    <p>Don't have an account? <Link to={'/singup'} className="thembo"> Register here</Link></p>
                </div>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>For Get PassWord</Modal.Title>
                </Modal.Header>
                <form onSubmit={forgetPassword}>

                    <Modal.Body>
                        <input type="email" name='email' placeholder='Your Email' />
                    </Modal.Body>
                    <Modal.Footer>

                        <button type='submit' onClick={handleClose} className='buyNow'>Buy Now</button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    );
};

export default Login;