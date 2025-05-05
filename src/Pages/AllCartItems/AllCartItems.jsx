import React from 'react';
import Navbar from '../../Components/Navbar';
import ItemCard from '../../Components/ItemCard';
import { useLoaderData } from 'react-router-dom';
import Foot from '../../Components/Foot';

const AllCartItems = () => {
    const items = useLoaderData();
    return (
        <div className='main-bg'>
            <Navbar></Navbar>
            <div>
            <h2 className="text-center text-4xl mb-10 text-white font-bold mt-10">Our Community</h2>
            <div className='grid   lg:grid-cols-3'>
                {
                  items.map(item=><ItemCard item={item} key={item._id}></ItemCard>)
                }
                </div>
            </div>
       <Foot></Foot>
        </div>
    );
};

export default AllCartItems;