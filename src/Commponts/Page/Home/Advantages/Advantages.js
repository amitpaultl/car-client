import React from 'react';
import './Advantages.css'
import { FaCommentDollar, FaFreeCodeCamp, FaHandsHelping, FaSith } from "react-icons/fa";
const Advantages = () => {
    return (
        <div>
            <div className="advantages-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 align-self-center">
                           
                            <div className="main-title">
                                <h2>Our Advantages</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                                <a href="services.html" className="btn-5 btn-radius-50 btn-none-992">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-down-right" data-aos-duration="1000">
                                    <div className="advantages-box">
                                        <div className="icon">
                                            <FaSith></FaSith>
                                        </div>
                                        <div className="detail">
                                            <h5>
                                                <a href="services.html">Highly  Secured</a>
                                            </h5>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-down-left" data-aos-duration="1000">
                                    <div className="advantages-box">
                                        <div className="icon">
                                            <FaHandsHelping></FaHandsHelping>
                                        </div>
                                        <div className="detail">
                                            <h5>
                                                <a href="services.html">Trusted Agents</a>
                                            </h5>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12"  data-aos="fade-up-right" data-aos-duration="1000">
                                    <div className="advantages-box">
                                        <div className="icon">
                                            <FaCommentDollar></FaCommentDollar>
                                        </div>
                                        <div className="detail">
                                            <h5>
                                                <a href="services.html">Get an Offer</a>
                                            </h5>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-up-left" data-aos-duration="1000">
                                    <div className="advantages-box">
                                        <div className="icon">
                                            <FaFreeCodeCamp></FaFreeCodeCamp>
                                        </div>
                                        <div className="detail">
                                            <h5>
                                                <a href="services.html">Free Support</a>
                                            </h5>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                                        </div>
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

export default Advantages;