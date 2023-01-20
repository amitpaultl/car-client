import React from 'react';
import { Link } from 'react-router-dom';
import Featured from './Featured/Featured';
// import Animate from 'animate.css-react'
import 'animate.css/animate.css'
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
                            {/* <Animate 
                            appear="fadeInDown"
                            durationAppear={1000}
                            > */}
                                <div appear="fadeInDown"
                            durationAppear={1000} component="div" className='cat-bg-3 category-text'>

                                    <Link to={'/category/bentley'} className=" ">
                                        <h2>BENTLEY</h2>
                                    </Link>
                                </div>
                            {/* </Animate> */}

                        </div>
                    </div>
                </div>
            </div>
            {/* Featured area  */}
            <Featured></Featured>
            {/*service area  */}
            <div className="service-section content-area bg-grea-3">
                <div className="container">
                    <div className="main-title text-center">
                        <h1>What Are You <span>Looking For</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="service-info-2">
                                <div className="icon">
                                    <i>

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                        </svg>
                                    </i>

                                </div>
                                <div className="detail">
                                    <h5>
                                        Highly  Secured
                                    </h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt.</p>
                                    <a href="services.html" className="read-more">Read more...</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="service-info-2">
                                <div className="icon">
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                        </svg></i>

                                </div>
                                <div className="detail">
                                    <h5>
                                        Trusted Agents
                                    </h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt.</p>
                                    <a href="services.html" className="read-more">Read more...</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="service-info-2">
                                <div className="icon">
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg></i>

                                </div>
                                <div className="detail">
                                    <h5>
                                        Get an Offer
                                    </h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt.</p>
                                    <a href="services.html" className="read-more">Read more...</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="service-info-2">
                                <div className="icon">
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                                        </svg></i>

                                </div>
                                <div className="detail">
                                    <h5>
                                        Free Support
                                    </h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt.</p>
                                    <a href="services.html" className="read-more">Read more...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* our team */}
            <div className="our-team">
                <div className="container">
                    <div className="main-title text-center">
                        <h1>Executive <span>Team</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="slide slide-box">
                                <div className="team-1">
                                    <div className="photo">
                                        <img src="https://storage.googleapis.com/theme-vessel-items/checking-sites/carhouse-html/HTML/main/img/avatar/avatar-9.jpg" alt="team-1" className="img-fluid" />
                                        <div className="overlay">
                                            <div className="border">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h4>Michelle Nelson</h4>
                                        <p>Support Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="slide slide-box">
                                <div className="team-1">
                                    <div className="photo">
                                        <img src="https://storage.googleapis.com/theme-vessel-items/checking-sites/carhouse-html/HTML/main/img/avatar/avatar-10.jpg" alt="team-1" className="img-fluid" />
                                        <div className="overlay">
                                            <div className="border">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h4>Michelle Nelson</h4>
                                        <p>Web Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="slide slide-box">
                                <div className="team-1">
                                    <div className="photo">
                                        <img src="https://storage.googleapis.com/theme-vessel-items/checking-sites/carhouse-html/HTML/main/img/avatar/avatar-11.jpg" alt="team-1" className="img-fluid" />
                                        <div className="overlay">
                                            <div className="border">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h4>Stone Carolyn</h4>
                                        <p> Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="slide slide-box animate__fadeInRight">
                                <div className="team-1">
                                    <div className="photo">
                                        <img src="https://storage.googleapis.com/theme-vessel-items/checking-sites/carhouse-html/HTML/main/img/avatar/avatar-12.jpg" alt="team-1" className="img-fluid" />
                                        <div className="overlay">
                                            <div className="border">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h4>Auro Navanth</h4>
                                        <p>Web Developer</p>
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

export default Home;