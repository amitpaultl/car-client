import React from 'react';
import { Link } from 'react-router-dom';
import Featured from './Featured/Featured';
import './Home.css'

const Home = () => {
    return (
        <div>
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
            {/* Featured area  */}
            <Featured></Featured>
        </div>
    );
};

export default Home;