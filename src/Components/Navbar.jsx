import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Navbar = () => {
    const {user,signOutUser} = useContext(AuthContext);
    const [hover,setHovered]=useState(false);
   
    
   
    const handleLogout = ()=>{
        return signOutUser();
    }
        
  
   

    const navLinks = 
    <>
    <Link to={'/'}><li className='text-black'><h2>Home</h2></li></Link>
    <Link to={'/allItems'}><li className='text-black'><h2>All Art & Craft Items</h2></li></Link>
    <Link to={'/addCraftItem'}><li className='text-black'><h2>Add Craft Item</h2></li></Link>
    <Link to={'/myCart'}><li className='text-black'><h2>My Art & Cart List</h2></li></Link>
    </>
    return (
        <div className="navbar bg-[#FF8C00] text-black">
            <div className="navbar-start">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu  bg-[#FF8C00] menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        
                        {navLinks}
                    </ul>
                </div>
                <Link to={'/'}><h2 className="btn btn-ghost text-xl font-satisfy">Art Diary</h2></Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal  bg-[#FF8C00] px-1">
                   {navLinks}
                </ul>
            </div>  
               
            
            <div className="navbar-end gap-4">
            <div className='flex items-center gap-2' >
            

                <div className='flex'>
                  
                
                    <img  onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} className='w-10 relative rounded-lg' src={user&&user.photoURL||" "} alt="" />
                {
                    hover?<p className='absolute top-0 p-2 bg-black bg-opacity-75 text-white text-sm rounded-full'>{user.displayName}</p>: ' '
                }
               
              
                </div>
              
                
            </div>
               {
                user? <h2 onClick={handleLogout} className="btn btn-secondary bg-yellow-400 border-none">Logout</h2>:<Link to={'/login'}> <h2 className="btn btn-secondary bg-yellow-400 border-none">Login</h2></Link>
               }
            </div>
        </div>
    );
};

export default Navbar;