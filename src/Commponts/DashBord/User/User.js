import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link,  } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loding from '../../Loading/Loding';

const User = () => {

        const { user } = useContext(AuthContext)
    
        // 
       // data load singe product 
       const { data: booking, refetch, isLoading } = useQuery({
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


    const products = booking?.data.filter(book => user.email === book.email)



    // delete
    const deleteProduct = (product) => {
        fetch(`http://localhost:5000/booking/${product._id}`, {
            method: 'DELETE',
            headers: {
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.success(data.message)

                refetch()
            })
    }

    //  report 
    const reportProduct =(product)=>{
        const report = product.id
            
        
        fetch(`http://localhost:5000/report`,{
            method:'PUT',
            headers:{

                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify({report})
        })
        .then(res=> res.json())
        .then(data=>{
            toast.success(data.message)
        } )
    }

    // loading
    if (isLoading) {
        return <Loding></Loding>
    }
    
if (products?.length === 0) {
    return (
        <div className="featured-car">
            <div className="featured-title">
                <div className="main-title">
                    <h1><span className='text-uppercase'>No Card Available</span></h1>
                </div>
            </div>
        </div>
    )
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

                        products?.map((product, i) => <tr key={i}>
                            <th scope="row">{i + 1}</th>
                            <td><img className='addProductimg' src={product?.image} alt="" /></td>
                            <td><strong>{product?.productName}</strong> </td>
                            <td>{product?.paid ? <p className='text-success'>Paid </p>  : <button type="button" className="btn btn-success"><Link to={`/dashboard/payment/${product._id}`} className='text-light'>PAY</Link></button>}</td>
                            
                            <td>
                            
                                    <button onClick={() => deleteProduct(product)} type="button" className="btn btn-danger">Delete</button>
                              
                                
                            </td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default User;