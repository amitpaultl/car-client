import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import './SellerProduct.css'

const SellerProduct = () => {


    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/addProduct?email=amitpaultl@gmail.com`;
    const { data: addProduct = [] } = useQuery({
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
    console.log(addProduct);
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

                        addProduct?.data?.map((product ,i) =>  <tr key={i}>
                            <th scope="row">{i+1}</th>
                            <td><img className='addProductimg' src={product?.image} alt="" /></td>
                            <td><strong>{product?.productname}</strong> </td>
                            <td>{product?.paid ? <p class="text-secondary">Sold</p> : <p class="text-danger">Sales</p>}</td>
                            <td>{product?.publish ? ' ' : <button type="button" class="btn btn-success">Advertise</button>}</td>
                            <td><button type="button" class="btn btn-danger">Delete</button></td>
                        </tr>)
                    }
                   

                </tbody>
            </table>
        </div>
    );
};

export default SellerProduct;