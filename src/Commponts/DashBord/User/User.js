import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loding from '../../Loading/Loding';

const User = () => {

       // data load singe product 
       const { data: products, isLoading } = useQuery({
        queryKey: ['addProduct'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/booking`, {
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

    // pamentHandeler
    const paymentHandler=()=>{
        
    }

    const deleteProduct=()=>{

    }

    return (
        <div className='sellProduct'>
            <div className="featured-title">
                <div className="main-title">
                    <h1>All Product <span>Your </span></h1>
                    <p>Consectetur adipisicing elit, sed do eiusmod</p>
                </div>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">NO</th>
                        <th scope="col">Image</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        products?.data?.map((product, i) => <tr key={i}>
                            <th scope="row">{i + 1}</th>
                            <td><img className='addProductimg' src={product?.image} alt="" /></td>
                            <td><strong>{product?.productName}</strong> </td>
                            <td>{product?.paid ? 'Paid ' : <button onClick={() => paymentHandler(product)} type="button" className="btn btn-success">PAY</button>}</td>
                            
                            <td><button onClick={() => deleteProduct(product)} type="button" className="btn btn-danger">Delete</button></td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default User;