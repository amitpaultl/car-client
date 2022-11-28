import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import Loding from '../../Loading/Loding';
import FeaturedCard from '../Home/Featured/FeaturedCard';
import CategoryCard from './CategoryCard';



const Category = () => {
    const { id } = useParams()


    const { data: user, isLoading, refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://car-server-amitpaultl.vercel.app/category/${id}`, {
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

    if (user?.data?.length === 0) {
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
        <div>
            <div className='featured-car'>
                <div className="featured-title">
                    <div className="main-title">
                        <h1>Featured <span className='text-uppercase'>{id}</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                    </div>
                </div>
                <div className="featured-area">
                    <div className="container">
                        <div className="row">
                            {
                                user.data.map(cars => <FeaturedCard publics={cars} key={cars._id}></FeaturedCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;