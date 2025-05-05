import React from 'react';
import { Carousel } from "flowbite-react";
import ill from "../../public/ill.png"
import ill2 from "../../public/ill2.png"
import ill3 from "../../public/ill3.png"


const Banner = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-20">
      <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
        <div className="slide-1 h-full  justify-center bg-gray-400 dark:bg-gray-700 dark:text-white self-center text-lg sm:text-4xl text-white font-bold items-center flex flex-row-reverse">
        Creativity takes courage." – Henri Matisse <img className='w-52' src={ill} alt="" />
        </div>
        <div className="slide-2 flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white self-center text-lg sm:text-4xl text-white font-bold flex-row-reverse">
         Art enables us to find ourselves and lose ourselves at the same time <img className='w-12 lg:w-28' src={ill2} alt="" />
        </div>
        <div className="slide-3 flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white self-center text-lg sm:text-4xl text-white font-bold flex-row-reverse">
          Every artist was first an amateur <img className='w-44' src={ill3} alt="" />
        </div>
      </Carousel>
    </div>
    );
};

export default Banner;