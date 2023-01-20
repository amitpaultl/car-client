import React from 'react';
import './Blog.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { MdMessage, MdPeopleAlt, TbBrandMessenger } from "react-icons/md";
import { FreeMode, Pagination } from "swiper";

import blogimg from '../../../assert/image/l1.jpg'
import blogimg2 from '../../../assert/image/l2.jpg'
import blogimg3 from '../../../assert/image/l3.jpg'
const Blog = () => {
    return (
        <div>
            <div className="blog-area">
                <div className="container">
                    <div className="main-title text-center">
                        <h1>Latest <span>News</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="blog-slider">
                                <Swiper
                                    breakpoints={{
                                        // when window width is >= 640px
                                        640: {

                                            slidesPerView: 1,
                                        },
                                        // when window width is >= 768px
                                        768: {

                                            slidesPerView: 2,
                                        },
                                        1024: {

                                            slidesPerView: 3,
                                        },
                                        1440: {

                                            slidesPerView: 3,
                                        },
                                    }}
                                    spaceBetween={30}
                                    freeMode={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[FreeMode, Pagination]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <article class="post-492 post type-post status-publish format-standard has-post-thumbnail hentry category-new-2015">
                                            <div class="tb-post-item">
                                                <a class="animsition-link" >
                                                    <div class="tb-thumb">
                                                        <img width="1280" height="796" src={blogimg2} /> </div>
                                                </a>
                                                <div class="tb-content">
                                                    <a class="animsition-link" ><h4 class="tb-title">Mitsubishi L200 Triton Savana</h4></a>
                                                    <div class="tb-info">
                                                        <div class="blog-info">
                                                            <span class="author-name"><MdMessage></MdMessage><a title="Posts by John Doe" rel="author">John Doe</a></span> <span class="catgory-name"><MdPeopleAlt></MdPeopleAlt>
                                                                <a>New 2020</a></span> </div>
                                                    </div>
                                                    <div class="tb-excerpt">
                                                        Lorem khaled ipsum is a major key to success. It’s on you how you want to live... </div>
                                                </div>
                                            </div>
                                        </article>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <article class="post-492 post type-post status-publish format-standard has-post-thumbnail hentry category-new-2015">
                                            <div class="tb-post-item">
                                                <a class="animsition-link" >
                                                    <div class="tb-thumb">
                                                        <img width="1280" height="796" src={blogimg3} /> </div>
                                                </a>
                                                <div class="tb-content">
                                                    <a class="animsition-link" ><h4 class="tb-title">Mitsubishi L200 Triton Savana</h4></a>
                                                    <div class="tb-info">
                                                        <div class="blog-info">
                                                            <span class="author-name"><MdMessage></MdMessage><a title="Posts by John Doe" rel="author">John Doe</a></span> <span class="catgory-name"><MdPeopleAlt></MdPeopleAlt>
                                                                <a>New 2020</a></span> </div>
                                                    </div>
                                                    <div class="tb-excerpt">
                                                        Lorem khaled ipsum is a major key to success. It’s on you how you want to live... </div>
                                                </div>
                                            </div>
                                        </article>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <article class="post-492 post type-post status-publish format-standard has-post-thumbnail hentry category-new-2015">
                                            <div class="tb-post-item">
                                                <a class="animsition-link">
                                                    <div class="tb-thumb">
                                                        <img width="1280" height="796" src={blogimg} /> </div>
                                                </a>
                                                <div class="tb-content">
                                                    <a class="animsition-link"><h4 class="tb-title">Mitsubishi L200 Triton Savana</h4></a>
                                                    <div class="tb-info">
                                                        <div class="blog-info">
                                                            <span class="author-name"><MdMessage></MdMessage><a title="Posts by John Doe" rel="author">John Doe</a></span> <span class="catgory-name"><MdPeopleAlt></MdPeopleAlt>
                                                                <a>New 2020</a></span> </div>
                                                    </div>
                                                    <div class="tb-excerpt">
                                                        Lorem khaled ipsum is a major key to success. It’s on you how you want to live... </div>
                                                </div>
                                            </div>
                                        </article>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <article class="post-492 post type-post status-publish format-standard has-post-thumbnail hentry category-new-2015">
                                            <div class="tb-post-item">
                                                <a class="animsition-link">
                                                    <div class="tb-thumb">
                                                        <img width="1280" height="796" src={blogimg} /> </div>
                                                </a>
                                                <div class="tb-content">
                                                    <a class="animsition-link"><h4 class="tb-title">Mitsubishi L200 Triton Savana</h4></a>
                                                    <div class="tb-info">
                                                        <div class="blog-info">
                                                            <span class="author-name"><MdMessage></MdMessage><a title="Posts by John Doe" rel="author">John Doe</a></span> <span class="catgory-name"><MdPeopleAlt></MdPeopleAlt>
                                                                <a>New 2020</a></span> </div>
                                                    </div>
                                                    <div class="tb-excerpt">
                                                        Lorem khaled ipsum is a major key to success. It’s on you how you want to live... </div>
                                                </div>
                                            </div>
                                        </article>
                                    </SwiperSlide>

                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;