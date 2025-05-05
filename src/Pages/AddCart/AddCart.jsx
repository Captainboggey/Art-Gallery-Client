import React from 'react';
import Navbar from '../../Components/Navbar';
import Foot from '../../Components/Foot';
import Swal from 'sweetalert2';

const AddCart = () => {
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
        fetch("https://art-dairy-server-lo6e75iqj-captainboggeys-projects.vercel.app/cards",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(itemInfo)
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
           
        })
    }
    return (
        <div>
        <Navbar></Navbar>
       <div className=''>
       <h2 className="text-4xl text-center mt-10 ">Add Your Desired Items</h2>
       <div className='main-bg  '>
       <form onSubmit={handleAddItem} className=' grid md:grid-cols-2 max-w-2xl mt-10 mx-auto items-center  '>
           <label className="form-control  max-w-xs">
               <div className="label">
                   <span className="label-text">Image URL</span>
                   
               </div>
               <input type="text" name='imgURL' placeholder="Url" className="input input-bordered w-full max-w-xs" />
              
           </label>
           <label className="form-control  max-w-xs">
               <div className="label">
                   <span className="label-text">Item Name</span>
                   
               </div>
               <input type="text" name='itemName' placeholder="item name" className="input input-bordered w-full max-w-xs" />
              
           </label>
           <label className="form-control  max-w-xs">
               <div className="label">
                   <span className="label-text">Subcategory Name</span>
                   
               </div>
               <input type="text" name='subcategory' placeholder="subcategory" className="input input-bordered w-full max-w-xs" />
              
           </label>
           <label className="form-control  max-w-xs">
               <div className="label">
                   <span className="label-text">Short Description</span>
                   
               </div>
               <input type="text" name='description' placeholder="description" className="input input-bordered w-full max-w-xs" />
              
           </label>
           <label className="form-control  max-w-xs">
               <div className="label">
                   <span className="label-text">Price</span>
                   
               </div>
               <input type="text" name='price' placeholder="price" className="input input-bordered w-full max-w-xs" />
              
           </label>
           <label className="form-control  max-w-xs">
               <div className="label">
                   <span className="label-text">Rating</span>
                   
               </div>
               <input type="text" name='rating' placeholder="rating" className="input input-bordered w-full max-w-xs" />
              
           </label>
           <label className="form-control  max-w-xs">
               <div className="label">
                   <span className="label-text">Customization</span>
                   
               </div>
               <input type="text" name='customization' placeholder="yes or no" className="input input-bordered w-full max-w-xs" />
              
           </label>
           <label className="form-control  max-w-xs">
               <div className="label">
                   <span className="label-text">Stock Status</span>
                   
               </div>
               <input type="text" name='stock' placeholder="in stock or made to order" className="input input-bordered w-full max-w-xs" />
              
           </label>
           <label className="form-control  max-w-xs">
               <div className="label">
                   <span className="label-text">User Email</span>
                   
               </div>
               <input type="email" name='email' placeholder="user email" className="input input-bordered w-full max-w-xs" />
              
           </label>
           <label className="form-control  ">
               <div className="label">
                   <span className="label-text">User Name</span>
                   
               </div>
               <input type="text" name='name' placeholder="user name" className="input input-bordered w-full max-w-xs" />
              
           </label>
           <label className='form-control mb-40  mt-10 col-span-2'>
              <input type="submit" className='btn' value="Add" />
           </label>
       </form>
       </div>
       </div>
<Foot></Foot>
        </div>
    );
};

export default AddCart;