import React from 'react';
import { Link } from 'react-router-dom';
import Featured from './Featured/Featured';
import './Home.css'

const Home = () => {
    
    return (
        <div>

            {/* banner area */}
            <div className="banner-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="banner">
                                <h2>WELCOME TO CAR HOUSE</h2>
                                <p>Allow us to guide you through the innovative stress <br />
                                    free approach in finding your dream car.</p>
                                <Link to={''} className="btn btn-6 btn-lg banner-button">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Category  */}
            <div className="category-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 ">
                            <div className='cat-bg-1 category-text'>

                                <Link to={'/category/toyota'} className=" ">
                                    <h2>TOYOTA</h2>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='cat-bg-2 category-text '>

                                <Link to={'/category/bmw'} className=" ">
                                    <h2>BMW</h2>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className='cat-bg-3 category-text'>

                                <Link to={'/category/bentley'} className=" ">
                                    <h2>BENTLEY</h2>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Featured area  */}
            <Featured></Featured>
        </div>
    );
};

export default Home;