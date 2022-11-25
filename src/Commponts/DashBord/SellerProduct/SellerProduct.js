import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import './SellerProduct.css'


const SellerProduct = () => {

    // use context
    const { user } = useContext(AuthContext);

    // react query data fatch
    const url = `http://localhost:5000/addProduct?email=${user?.email}`;
    const { data: addProduct = [], refetch } = useQuery({
        queryKey: ['addProduct', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    // authorization: `bearer ${localStorage.getItem('accessToken')}`
                }

            });
            const data = await res.json();
            return data
        }
    })

// advertiseAdd 
    const advertiseAdd = (product) => {
        axios.post(`http://localhost:5000/addProduct/${product._id}`, {
                publish: true
            }
            ,
            {
                headers: {
                    "Content-type": "application/json"
                },
            }
        )
            .then(res => {
                console.log(res);
            })
            .catch(data => {
                console.log(data);
            });
        console.log(product._id);
    }

    // delete
    const deleteProduct = (product)=>{
        fetch(`http://localhost:5000/addProduct/${product._id}`,{
            method:'DELETE',
            headers:{
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            refetch()
        })
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">NO</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Available</th>
                        <th scope="col">Advertise</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        addProduct?.data?.map((product, i) => <tr key={i}>
                            <th scope="row">{i + 1}</th>
                            <td><img className='addProductimg' src={product?.image} alt="" /></td>
                            <td><strong>{product?.productname}</strong> </td>
                            <td>{product?.paid ? <p className="text-secondary">Sold</p> : <p className="text-danger">Sales</p>}</td>
                            <td>{product?.publish ? ' ' : <button onClick={() => advertiseAdd(product)} type="button" className="btn btn-success">Advertise</button>}</td>
                            <td><button onClick={()=>deleteProduct(product)} type="button" className="btn btn-danger">Delete</button></td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default SellerProduct;