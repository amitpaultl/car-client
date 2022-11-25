import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Category = () => {
    const { data } = useLoaderData()
    console.log(data);
    return (
        <div>
            <div className='featured-car'>
                <div className="featured-title">
                    <div className="main-title">
                        <h1>Featured <span>Cars</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                    </div>
                </div>
                <div className="featured-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="car-box-3">
                                    <div className="photo-thumbnail">
                                        <div className="photo">
                                            <img className="d-block w-100" src="https://storage.googleapis.com/theme-vessel-items/checking-sites/carhouse-html/HTML/main/img/car/car-1.jpg" alt="car" />
                                            <a href="car-details.html">
                                                <span className="blog-one__plus"></span>
                                            </a>
                                        </div>
                                        <div className="tag">For Rent</div>
                                        <div className="price-box">
                                            <span className="del"><del>$805.00</del></span>
                                            <br />
                                            <span>$780.00</span>
                                        </div>
                                    </div>
                                    <div className="detail">
                                        <h1 className="title">
                                            Lamborghini Huracán
                                        </h1>
                                        <div className="location">

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                            123 Kathal St. Tampa City,

                                        </div>
                                        <ul className="facilities-list  ">
                                            <li>Petrol</li>
                                            <li className='variefiey'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>

                                            </li>
                                        </ul>
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

export default Category;