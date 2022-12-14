import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loding from '../../../Loading/Loding';
import './Featured.css'
import FeaturedCard from './FeaturedCard';

const Featured = () => {

//     const [cars,setCars]=useState([])
// // Axios use  
//     useEffect(()=>{
//         axios.get('https://car-server-amitpaultl.vercel.app/addProduct')
//         .then(data => {
//             setCars(data.data)
//         })

//     },[])

  
const { data: products, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
        try {
            const res = await fetch('https://car-server-amitpaultl.vercel.app/addProduct', {
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




// filter publish product


const unreverse = products?.data?.filter(product => product.publish)

const publish = unreverse?.reverse()




if (isLoading) {
    return <Loding></Loding>
}


console.log(publish);

if (publish.length === 0) {
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                </div>
            </div>
            <div className="featured-area">
                <div className="container">
                    <div className="row">

                        {
                        publish?.length === 0  ? <h2 className='text-center'>No Product Have</h2>:
                            publish?.length >= 3 ? publish.slice(0,3).map(publics => <FeaturedCard key={publics?._id} publics={publics}></FeaturedCard>) : publish.map(publics => <FeaturedCard key={publics?._id} publics={publics}></FeaturedCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;