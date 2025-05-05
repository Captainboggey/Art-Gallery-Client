
import React, { useContext, useState } from 'react';
import Navbar from '../../Components/Navbar';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import MyCart from './MyCart';
import Foot from '../../Components/Foot';

const MyCartList = () => {
    const data = useLoaderData();
    const [items,setItems]=useState(data);
    const {user}=useContext(AuthContext);
    
    const myCart = items.filter(item=> item.email===user.email)
    console.log(typeof myCart.length)
  
    return (
        <div >
            <Navbar></Navbar>
           
            
                <h2 className='text-center text-white text-4xl font-bold mb-10 mt-10'>{myCart.length===0?"No Items Added":'My Items'}</h2>
            
            
          <div className='grid   lg:grid-cols-3'>
          {
                myCart.map(aCart=><MyCart items={items} setItems={setItems} cart={aCart} key={aCart._id}></MyCart>)
            }
          </div>
          <Foot></Foot>
        </div>
    );
};

export default MyCartList;