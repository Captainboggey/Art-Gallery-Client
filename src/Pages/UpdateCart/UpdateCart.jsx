
import React from 'react';
import Navbar from '../../Components/Navbar';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import Foot from '../../Components/Foot';


const UpdateCart = () => {
    const data = useLoaderData();
    const {imgURL,itemName,subcategory,description,price,rating,customization,stock,email,name,_id}= data;
    const handleAddItem = e=>{
        e.preventDefault();
        const form = e.target;
        const imgURL = form.imgURL.value;
        const itemName = form.itemName.value;
        const subcategory = form.subcategory.value;
        const description= form.description.value;
        const price= form.price.value;
        const rating= form.rating.value;
        const customization= form.customization.value;
        const stock = form.stock.value;
        const email= form.email.value;
        const name = form.name.value;
        const itemInfo = {imgURL,itemName,subcategory,description,price,rating,customization,stock,email,name};
        fetch(`https://art-dairy-server-lo6e75iqj-captainboggeys-projects.vercel.app/addItems/${_id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(itemInfo)
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    return (
        <div>
        <Navbar></Navbar>
       <div className=''>
       <h2 className="text-4xl text-center mt-10 ">Update Your  Items</h2>
       <div className='main-bg  '>
       <form onSubmit={handleAddItem} className=' grid md:grid-cols-2 max-w-2xl mt-10 mx-auto items-center  '>
           <label className="form-control  max-w-xs">
               <div className="label">
                   <span className="label-text">Image URL</span>
                   
               </div>
               <input type="text" name='imgURL' required placeholder={imgURL} className="input input-bordered w-full max-w-xs" />
              
           </label>
           <label className="form-control  max-w-xs">
               <div className="label">
                   <span className="label-text">Item Name</span>
                   
               </div>
               <input type="text" name='itemName' required placeholder={itemName} className="input input-bordered w-full max-w-xs" />
              
           </label>
           <label className="form-control  max-w-xs">
               <div className="label">
                   <span className="label-text">Subcategory Name</span>
                   
               </div>
               <input type="text" name='subcategory' required placeholder={subcategory} className="input input-bordered w-full max-w-xs" />
              
           </label>
           <label className="form-control  max-w-xs">
               <div className="label">
                   <span className="label-text">Short Description</span>
                   
               </div>
               <input type="text" name='description' required placeholder={description} className="input input-bordered w-full max-w-xs" />
              
           </label>
           <label className="form-control  max-w-xs">
               <div className="label">
                   <span className="label-text">Price</span>
                   
               </div>
               <input type="text" name='price' required placeholder={price} className="input input-bordered w-full max-w-xs" />
              
           </label>
           <label className="form-control  max-w-xs">
               <div className="label">
                   <span className="label-text">Rating</span>
                   
               </div>
               <input type="text" name='rating' required placeholder={rating} className="input input-bordered w-full max-w-xs" />
              
           </label>
           <label className="form-control  max-w-xs">
               <div className="label">
                   <span className="label-text">Customization</span>
                   
               </div>
               <input type="text" name='customization' required placeholder={customization} className="input input-bordered w-full max-w-xs" />
              
           </label>
           <label className="form-control  max-w-xs">
               <div className="label">
                   <span className="label-text">Stock Status</span>
                   
               </div>
               <input type="text" name='stock' required placeholder={stock} className="input input-bordered w-full max-w-xs" />
              
           </label>
           <label className="form-control  max-w-xs">
               <div className="label">
                   <span className="label-text">User Email</span>
                   
               </div>
               <input type="email" name='email' required placeholder={email} className="input input-bordered w-full max-w-xs" />
              
           </label>
           <label className="form-control  ">
               <div className="label">
                   <span className="label-text">User Name</span>
                   
               </div>
               <input type="text" name='name' required placeholder={name} className="input input-bordered w-full max-w-xs" />
              
           </label>
           <label className='form-control mb-40  mt-10 col-span-2'>
              <input type="submit" className='btn' value="Update" />
           </label>
       </form>
       </div>
       </div>
<Foot></Foot>
        </div>
    );
};

export default UpdateCart;