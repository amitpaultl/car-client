import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import './Error.css'

const Error = () => {
    const error = useRouteError()
    return (
        <div>
            <div className="pages-404">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="error404-content">
                                <div className="error404">404</div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="nobottomborder">
                                <h1 className="mb-4">{error.statusText || error.message}</h1>
                                <p className="mb-4">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                                <div className="row">
                                    <div className="col-xl-9 col-lg-10 col-md-8 col-sm-10 col-xs-10">
                                        <div className="coming-form clearfix">
                                            <div className="newsletter-content-wrap mb-4">
                                                <form className="newsletter-form d-flex" action="#">
                                                    <input className="form-control" type="text" id="email" placeholder="Search For Page" />
                                                    <button className="btn btn-theme " type="submit"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-1 h-1">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                                    </svg>
                                                    </button>
                                                </form>
                                            </div>

                                            <div className="clearfix"></div>
                                            <p>Please try searching again</p>
                                        </div>
                                        <Link to={'/'} className="btn btn-6 btn-lg banner-button">Home</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;