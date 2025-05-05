import React from 'react';
import Navbar from '../../Components/Navbar';
import "flyonui/dist/js/accordion"
import ill from "../../../public/ill.png"
import ill2 from "../../../public/ill2.png"
import ill3 from "../../../public/ill3.png"
import Banner from '../../Components/Banner';
import { useLoaderData } from 'react-router-dom';
import ItemCard from '../../Components/ItemCard';
import Cards from '../../Components/Cards';
import Footer from '../../Components/Foot';
import Foot from '../../Components/Foot';
import Blogs from '../../Components/Blogs';
import Discount from '../../Components/Discount';


const Home = () => {
    const cards = useLoaderData();

   

    
    return (
        <div className=''>
            <Navbar></Navbar>
            <Banner></Banner>
            
            <h2 className="text-4xl text-white text-center font-bold my-10">Our Crafted Items!</h2>
           <div className='grid md:grid-cols-2 lg:grid-cols-3'>

           {
            cards.map(card=><Cards card={card} key={card._id}></Cards>)
           }
         
           </div>
           <h2 className='text-center text-4xl text-white my-10'>Blogs</h2>
           <Blogs></Blogs>
           <Discount></Discount>
           <Foot></Foot>
        </div>
    );
};

export default Home;