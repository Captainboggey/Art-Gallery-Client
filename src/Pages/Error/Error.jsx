import React from 'react';
import errorImg from "../../../public/44-incredible-404-error-pages@3x-1560x760.png"
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div >
            <h2 className='text-center text-black bg-[#FF991F] text-6xl'>Return To <Link className='text-red-700 ' to={'/'}><span>Home</span></Link></h2>
            <img className='mx-auto w-full ' src={errorImg} alt="" />
            
        </div>
    );
};

export default Error;