import React, { useContext } from 'react';
import Navbar from '../../Components/Navbar';
import { FcGoogle } from 'react-icons/fc';
import { PiGithubLogoBold } from 'react-icons/pi';
import { Link, Navigate } from 'react-router-dom';
import 'animate.css';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import Foot from '../../Components/Foot';


const Register = () => {
    const {signUpUser}=useContext(AuthContext)
    const handleRegister=e=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        const userInfo = {name,email,photoURL};
       
        if(!/[A-Z]/.test(password)){
              Swal.fire("Add a uppercase letter!");
              return
        }
        if(!/[0-9]/.test(password)){
            Swal.fire("add at least one digit!");
            return
            
        }
        if(!/[a-z]/.test(password)){
            Swal.fire("add at least one Uppercase!");
            return
            
        }
        if(password.length<6){
            Swal.fire("password must be 6 letter!");
            return
            
        }
        
        signUpUser(email,password)
        .then(res=>{
            console.log(res)
            Swal.fire("User Added Successfully!");
            fetch('https://art-dairy-server-lo6e75iqj-captainboggeys-projects.vercel.app/users',{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify(userInfo)
                
            })
            .then(res=>res.json())
                .then(data=>console.log(data))
         
        }) 
        .catch(error=>{
            console.error(error)
            Swal.fire(error.message);
        })

    }
    return (
        <div className='login-bg'>
        <Navbar></Navbar>
        <div className="hero  min-h-screen text-yellow-300">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" text-Left animate__animated animate__backInRight">
                    <h1 className="text-5xl font-bold ">Register!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-[#490e0e] w-full text-black max-w-sm shrink-0 shadow-2xl animate__animated animate__backInLeft ">
                    <form onSubmit={handleRegister} className="card-body ">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-yellow-300">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered bg-[#490e0e]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-yellow-300">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered bg-[#490e0e]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-yellow-300">PhotoURL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="URL" className="input input-bordered bg-[#490e0e]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-yellow-300">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered bg-[#490e0e]" required />
                            
                        </div>
                        
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-pink-700 border-none">Register</button>
                        </div>
                        <div>
                            <p className='text-yellow-300'>Already Have An Account? <Link to={"/login"}><span className='text-red-700'>Login</span></Link> Then!</p>
                        </div>

                    </form>
                    
                </div>
            </div>
        </div>
<Foot></Foot>
    </div>
    );
};

export default Register;