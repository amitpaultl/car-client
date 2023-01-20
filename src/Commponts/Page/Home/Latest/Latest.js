import React from 'react';
import './Least.css'
import car1 from '../../../assert/image/car-1.jpg'
import car2 from '../../../assert/image/car-2.jpg'
import car3 from '../../../assert/image/car-4.jpg'
import car4 from '../../../assert/image/car-6.jpg'
import car5 from '../../../assert/image/car-11.jpg'
const Latest = () => {
    return (
        <div>
            <div className="latest-offers categories content-area-13 bg-grea-3">
                <div className="container">

                    <div className="main-title text-center">
                        <h1>Latest <span>Offers</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="row">
                                <div className="col-md-6 col-lg-12 col-pad " data-aos="flip-right" data-aos-duration="1000">
                                    <div className="latest-offers-box">
                                        <div className="photo-overflow">
                                            <div className="car-thumbnail-photo">
                                                <img className="img-fluid w-100" src={car1} alt="photo" />
                                            </div>
                                        </div>
                                        <div className="new">New</div>
                                        <div className="ling-section">
                                            <div className="lo-text clearfix">
                                                <h3>
                                                    <a href="car-details.html">Toyota Prius</a>
                                                </h3>
                                                <h5>410.00 <span>/monthly</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-12 col-pad" data-aos="flip-right" data-aos-duration="1000">
                                    <div className="latest-offers-box">
                                        <div className="photo-overflow">
                                            <div className="car-thumbnail-photo">
                                                <img className="img-fluid w-100" src={car2} alt="photo" />
                                            </div>
                                        </div>
                                        <div className="new">New</div>
                                        <div className="ling-section">
                                            <div className="lo-text clearfix">
                                                <h3>
                                                    <a href="car-details.html">2020 Ford Mustang</a>
                                                </h3>
                                                <h5>920.00 <span>/monthly</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="row">
                                <div className="col-md-12 col-lg-12 col-pad" data-aos="flip-right" data-aos-duration="1000">
                                    <div className="latest-offers-box">
                                        <div className="photo-overflow">
                                            <div className="car-thumbnail-photo">
                                                <img className="img-fluid w-100" src={car3} alt="photo" />
                                            </div>
                                        </div>
                                        <div className="new">New</div>
                                        <div className="ling-section">
                                            <div className="lo-text clearfix">
                                                <h3>
                                                    <a href="car-details.html">Toyota Prius specs</a>
                                                </h3>
                                                <h5>$920.00 <span>/monthly</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-12 col-pad" data-aos="flip-right" data-aos-duration="1000">
                                    <div className="latest-offers-box">
                                        <div className="photo-overflow">
                                            <div className="car-thumbnail-photo">
                                                <img className="img-fluid w-100" src={car4} alt="photo" />
                                            </div>
                                        </div>
                                        <div className="new">New</div>
                                        <div className="ling-section">
                                            <div className="lo-text clearfix">
                                                <h3>
                                                    <a href="car-details.html">Audi Q7 2018</a>
                                                </h3>
                                                <h5>430.00 <span>/monthly</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-pad" data-aos="flip-right" data-aos-duration="1000">
                            <div className="latest-offers-box">
                                <div className="photo-overflow">
                                    <div className="car-thumbnail-photo">
                                        <img className="img-fluid w-100" src={car5} alt="photo" />
                                    </div>
                                </div>
                                <div className="new">New</div>
                                <div className="ling-section">
                                    <div className="lo-text clearfix">
                                        <h3>
                                            <a href="car-details.html">Audi 2021</a>
                                        </h3>
                                        <h5>740.00 <span>/monthly</span></h5>
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

export default Latest;