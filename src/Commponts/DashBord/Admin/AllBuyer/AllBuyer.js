import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loding from '../../../Loading/Loding';

const AllBuyer = () => {




    const { data: user, isLoading, refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            try {
                const res = await fetch('https://car-server-amitpaultl.vercel.app/user', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },

                })
                const data = await res.json();
                return data;
            } catch (error) {
                console.log(error);
            }
        }
    })

    // delete
    const deleteProduct = (userSeler) => {
        fetch(`https://car-server-amitpaultl.vercel.app/user/${userSeler._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.success(data.message)

                refetch()
            })
    }


    // loading
    if (isLoading) {
        return <Loding></Loding>
    }

    const sellerUser = user?.data?.filter(userSeller => userSeller.role === 'user')


    if (sellerUser.length === 0) {
        return (
            <div className="featured-car">
                <div className="featured-title">
                    <div className="main-title">
                        <h1><span className='text-uppercase'>No Buyer Available</span></h1>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className='sellProduct'>
            <div className="featured-title">
                <div className="main-title">
                    <h1>All Featured <span>Buyer </span></h1>
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
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>



                        {
                            sellerUser.map((userSeler, i) => <tr key={i} >
                                <td>{i + 1}</td>
                                <td><strong>{userSeler?.name}</strong></td>
                                <td>{userSeler?.email}</td>
                                <td><button type="button" onClick={() => deleteProduct(userSeler)} className="btn btn-danger">Delete</button></td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllBuyer;