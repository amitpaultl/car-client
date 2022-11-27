import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import Loding from '../../../Loading/Loding';

const AllSeller = () => {




    const { data: user, isLoading,refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/user', {
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

    const sellerUser = user?.data?.filter(userSeller => userSeller.role)

    // verifyHandaler
    const verifyHandaler = (email) => {
        axios(`http://localhost:5000/user/${email}`, {
            method: 'PUT',
            headers: {
                // authorization : `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(data => {
                console.log(data);
                toast.success('User verify')
                refetch()
            })
    }

    
if (sellerUser.length === 0) {
    return (
        <div className="featured-car">
            <div className="featured-title">
                <div className="main-title">
                    <h1><span className='text-uppercase'>No Seller Available</span></h1>
                </div>
            </div>
        </div>
    )
}
    return (
        <div className='sellProduct'>
            <div className="featured-title">
                <div className="main-title">
                    <h1>All Featured <span>Seller </span></h1>
                    <p>Consectetur adipisicing elit, sed do eiusmod</p>
                </div>
            </div>
            <div >
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">NO</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Verify</th>
                        </tr>
                    </thead>
                    <tbody>



                        {
                            sellerUser.map((userSeler, i) => <tr key={i} >
                                <td>{i + 1}</td>
                                <td><strong>{userSeler?.name}</strong></td>
                                <td>{userSeler?.email}</td>

                                <td>
                                    {/* {
                                        userSeler?.verify ? <p className='text-success'> Verify Confirm </p> : <button type="button" onClick={() => verifyHandaler(userSeler.email)} className="btn btn-success">Verify</button>
                                    } */}
                                    

                                    <button type="button" onClick={() => verifyHandaler(userSeler.email)} className="btn btn-success">Verify</button>

                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllSeller;