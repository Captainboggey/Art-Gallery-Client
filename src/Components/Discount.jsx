import React from 'react';
import discountImg from "../../public/Colored Shapes.svg"
import { Link } from 'react-router-dom';

const Discount = () => {
    return (
        <div
  className="hero  my-20"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/9HttFmCB/gratisography-flower-beard-1.jpg)",
  }}>
  <div className="hero"></div>
  <div className="hero-content  text-white text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-red-600">Get 60% OFF</h1>
      <p className="mb-5">
      🎨✨ Enjoy an exclusive 60% OFF on your first login and dive into the world of stunning papercraft and glass art. Don't miss this limited-time offer—start creating today!"
      </p>
   <Link to={'/login'}> <button className='btn btn-primary bg-yellow-200 border-none'>Login Now!</button></Link>
    </div>
  </div>
</div>
    );
};

export default Discount;