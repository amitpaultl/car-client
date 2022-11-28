import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loding from '../../Loading/Loding';
import FeaturedCard from '../Home/Featured/FeaturedCard';

const Carlist = () => {


    const { data: products, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/addProduct', {
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

    // No Car Available

    if (products?.data?.length === 0) {
        return (
            <div className="featured-car">
                <div className="featured-title">
                    <div className="main-title">
                        <h1><span className='text-uppercase'>No Car Available</span></h1>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className='featured-car'>
            <div className="featured-title">
                <div className="main-title">
                    <h1>Featured <span>Cars</span></h1>
                    <p>Featured Cars adipisicing elit, sed do eiusmod</p>
                </div>
            </div>
            <div className="featured-area">
                <div className="container">
                    <div className="row">
                        

                        {
                            products?.data?.map(cars => <FeaturedCard publics={cars} key={cars._id}></FeaturedCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carlist;