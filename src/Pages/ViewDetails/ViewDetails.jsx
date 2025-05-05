import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import { IoStar } from 'react-icons/io5';
import Foot from '../../Components/Foot';

const ViewDetails = () => {
    const item = useLoaderData();
    const{imgURL,itemName,subcategory,description,price,rating,customization,stock,email,name,_id}=item
   
    return (
        <div className='main-bg text-white '>
            <Navbar></Navbar>
            <h2 className="text-center text-4xl text-white my-10">Grab Yours!</h2>
            <div className='grid  lg:grid-cols-3  gap-2 pb-20 '>
                <div >
                <img className='w-96 mx-auto' src={imgURL} alt="" />
                </div>
                <div className='col-span-2 space-y-3 px-2'>
                    <h2 className="text-4xl font-bold text-yellow-200">{itemName}</h2>
                    <hr />
                    <p className='text-2xl font-bold '>Category: {subcategory}</p>
                    <p className='text-2xl font-bold '>Description: {description}</p>
                    <hr />
                    <p className='text-xl font-extrabold'>Customization: {customization}</p>
                    <p className='text-xl font-extrabold'>Stock: {stock}</p>
                    <p className='flex gap-2 items-center font-extrabold'>Rating: <IoStar className='text-yellow-200'></IoStar> {rating}</p>
                    <p className='text-3xl font-extrabold text-green-500'>Price: {price} TK</p>
                </div>
            </div>
            <Foot></Foot>
        </div>
    );
};

export default ViewDetails;