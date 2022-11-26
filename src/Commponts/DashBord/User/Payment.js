import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {id} = useParams()
    console.log(id);
    const [product, setProduct] = useState({})

    useEffect(()=>{
        axios(`http://localhost:5000/booking/${id}`)
        .then(res => {
            setProduct(res.data)
        })
    },[])
    console.log(product);

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
                        <div className="paymentInfo">
                            <h2>Pay System </h2>
                            <div className="user-info">
                                <div className="form-group clearfix">
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group clearfix">
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group clearfix">
                                    <input type="text" className="form-control" />
                                </div>
                                <button type="button" className="btn btn-success">PAYMENT</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Payment;