import React, { useContext, useState } from 'react';
import Navbar from '../../Components/Navbar';
import { FcGoogle } from 'react-icons/fc';
import { PiGithubLogoBold } from 'react-icons/pi';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import 'animate.css';
import { AuthContext } from '../../Providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
import Foot from '../../Components/Foot';
const Login = () => {
    const { signInUser,signInWithGoogle,signInWithGit,user } = useContext(AuthContext)
    const [error,setError]=useState(false);
    const navigate = useNavigate();
    const location =useLocation()
    
    const handleLogin = e => {
        
        e.preventDefault();
        
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setError(false)
        signInUser(email, password)
        
            .then(res => {
                console.log(res.user)
               Swal.fire("Welcome!");
              navigate(location?.state?location.state:'/')
            })
            
            .catch(error => {
                
                Swal.fire(error.message);
              console.log(error)
                
            })
           
    }
    const handleGoogle = ()=>{
       signInWithGoogle()
       .then(res=>{
        console.log(res.user)
        navigate(location?.state?location.state:'/')
        
       })
       .catch(error=>{
        console.error(error)
        Swal.fire(error.message);
       })
    }
    const handleGit = ()=>{
         signInWithGit()
        .then(res=>{
            console.log(res.user)
            navigate(location?.state?location.state:'/')
            
           })
           .catch(error=>{
            console.error(error)
            Swal.fire(error.message);
           })
    }
    return (
        <div className='login-bg'>
            
            <Navbar></Navbar>
       

           
           
              <ToastContainer/>
            <div className="hero  min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className=" text-right text-yellow-300 animate__animated animate__backInLeft">
                        <h1 className="text-5xl font-bold ">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-[#490e0e] w-full max-w-sm shrink-0 shadow-2xl animate__animated animate__backInRight">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-yellow-300">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered bg-[#490e0e]" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-yellow-300">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered bg-[#490e0e]" required />

                            </div>
                            <div className='form-control flex-row  gap-2'>
                                <button onClick={handleGoogle} className='btn btn-warning  bg-white border-none '><FcGoogle /> </button>
                                <button onClick={handleGit} className='btn btn-warning  bg-black border-none text-white '><PiGithubLogoBold /> </button>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-pink-700 border-none">Login</button>
                            </div>

                            <div>
                                <p className='text-yellow-300'>New here? <Link to={"/register"}><span className='text-red-700 '>Register </span></Link>First</p>
                            </div>

                        </form>
                
                    </div>
                </div>
            </div>
<Foot></Foot>
        </div>
    );
};

export default Login;