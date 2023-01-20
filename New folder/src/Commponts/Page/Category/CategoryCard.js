import React from 'react';

const CategoryCard = ({cars}) => {
    console.log(cars);
    const { _id,UserName,image ,location,originalPrice,productname,resalePrice,data} = cars

    return (
        <div className="col-md-4">
            <div className="car-box-3">
                <div className="photo-thumbnail">
                    <div className="photo">
                        <img className="d-block w-100" src={image} alt="car" />
                        <link to={`/singleProduct/${_id}`}>
                            <span className="blog-one__plus"></span>
                        </link>
                    </div>
                    <div className="tag">{data}</div>
                    <div className="price-box">
                        <span className="del"><del>${originalPrice}</del></span>
                        <br />
                        <span>${resalePrice}</span>
                    </div>
                </div>
                <div className="detail">
                    <h1 className="title">
                        {productname}
                    </h1>
                    <div className="location">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        {location}

                    </div>
                    <ul className="facilities-list  ">
                        <li>{UserName}</li>
                        <li className='variefiey'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;