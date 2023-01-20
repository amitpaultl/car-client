import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51M64lzDCOyG8s9oVCcXzWGVVx9jzMEDh891ayRYXz5WnZjBRwMeYK7LCCnSUS0JkRdgzYJt2WZ9RfhPsLzYixJGr00T2jIoXXZ');
// const stripePromise = loadStripe(process.env.REACT_APP_Stripe_key);

const PayMent = () => {
    const { id } = useParams()


    const [product, setProduct] = useState({})

    useEffect(() => {
        if (id) {

            axios(`https://car-server-amitpaultl.vercel.app/booking/${id}`,{
                headers:{

                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => {
                    setProduct(res.data)
                })
        }
    }, [id])

    // 

    return (
        <div style={{ paddingTop: '100px', paddingBottom: '100px' }}>
            <div className="featured-title">
                <div className="main-title">
                    <h1>All Product <span>Your </span></h1>
                    <p>Consectetur adipisicing elit, sed do eiusmod</p>
                </div>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="paymentInfo">
                            <div className="user-info">
                                <div className="form-group clearfix">
                                    <input type="text" defaultValue={product?.email} className="form-control" disabled />
                                </div>
                                <div className="form-group clearfix">
                                    <input type="text" defaultValue={product?.userName} className="form-control" disabled />
                                </div>
                                <div className="form-group clearfix">
                                    <input type="text" defaultValue={product?.productName} className="form-control" disabled />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="main-title">
                            <h1>Pay $<span>{product?.price}</span> </h1>
                            <div className="card-info mt-5 text-start">

                                <Elements stripe={stripePromise}>
                                    <CheckoutForm
                                        product={product}
                                    />
                                </Elements>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PayMent;