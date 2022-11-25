import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './SingleProduct.css'
import { useQuery } from '@tanstack/react-query';
import Loding from '../../Loading/Loding';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';

const SingleProduct = () => {
    // auth context
    const { user ,setLoading} = useContext(AuthContext);

    // id useParams
    const [show, setShow] = useState(false);
    const id = useParams()

    // data load singe product 
    const { data: product, isLoading } = useQuery({
        queryKey: ['addProduct'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/addProduct/${id.id}`, {
                    headers: {
                        // authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },

                })
                const data = await res.json();
                return data;
            } catch (error) {
                console.log(error);
            }
        }
    })


    // loading
    if (isLoading) {
        return <Loding></Loding>
    }
    // user order info
    const { UserName, category, conation, data, description, image, location, originalPrice, phone, productname, resalePrice, year, _id, } = product

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // bookingHandaler
    const bookingHandaler = (e) => {
        e.preventDefault()

        const location = e.target.location.value;
        const phone = e.target.phone.value;
        const booking = {
            email: user?.email,
            userName: user?.displayName,
            phone: phone,
            location: location,
            price: resalePrice,
            image: image,
            id: _id
        }

        // fetch user post
        fetch('http://localhost:5000/booking', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success('Successfully sign up')
                    setLoading(false)
                }
            })
            .catch(error => {
                toast.error(error.message)
                setLoading(false)
            })

    }

    return (
        <div className='singleProduct'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-xs-12">
                        <div className="car-details-section">
                            <div className="heading-car clearfix">
                                <div className="pull-left">
                                    <h3>{productname}</h3>
                                    <h6>
                                        <i className="flaticon-pin"></i>{location}
                                    </h6>
                                </div>
                                <div className="pull-right">
                                    <h3><span>${resalePrice}</span></h3>
                                </div>
                            </div>
                            <div className="details-img">
                                <img src={image} alt="" />
                            </div>
                            <div className="details">
                                <div className="car-description mb-50">
                                    <h3 className="heading-2">
                                        Description
                                    </h3>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="sidebar-right">
                            <div className="widget advanced-search d-none-992">
                                <h3 className="sidebar-title">{productname}</h3>
                                <ul>
                                    <li>
                                        <span>Company:</span>{category}
                                    </li>
                                    <li>
                                        <span>Conation:</span>{conation}
                                    </li>
                                    <li>
                                        <span>Post Data:</span>{data}
                                    </li>
                                    <li>
                                        <span>Location:</span>{location}
                                    </li>
                                    <li>
                                        <span>Buy Price:</span>{originalPrice}
                                    </li>
                                    <li>
                                        <span>Phone:</span>{phone}
                                    </li>
                                    <li>
                                        <span>Sell:</span>{resalePrice}
                                    </li>
                                    <li>
                                        <span>Use Year:</span>{year}
                                    </li>


                                </ul>
                            </div>
                            <button onClick={handleShow} className='buyNow'>Buy Now</button>

                        </div>



                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Modal title</Modal.Title>
                            </Modal.Header>
                            <form onSubmit={bookingHandaler}>

                                <Modal.Body>
                                    <input type="text" value={user?.displayName} disabled name='' />
                                    <input type="email" value={user?.email} disabled name='' />
                                    <input type="text" name='phone' placeholder='Phone Number' />
                                    <input type="text" name='location' placeholder='Location' />
                                </Modal.Body>
                                <Modal.Footer>

                                    <button type='submit' onClick={handleClose} className='buyNow'>Buy Now</button>
                                </Modal.Footer>
                            </form>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;