import React from 'react';
import paper1 from "../../public/origami.webp"
import paper2 from "../../public/origami2.webp"
import paper3 from "../../public/origami3.jpg"

const Blogs = () => {
    return (
        <div className='grid lg:grid-cols-4 gap-4 my-10 text-black'>
            <div className='col-span-2 space-y-3'>
                <img className='rounded-xl' src={paper1} alt="" />
                <h2>07 jul, 2024</h2>
                <h2 className="text-2xl font-bold">Pamper your Creativity in Making Mud Pots</h2>
                <p>Origami is the Japanese art of paper folding, where a single sheet of paper is transformed into intricate designs without cutting or gluing. It ranges from simple figures like cranes and flowers to complex, modular structures.</p>

            </div>
            <div className='space-y-3'>
                <h2>07 jul, 2024</h2>
                <h2 className="text-2xl font-bold">Best Way To Learning Art Easy With Fun</h2>
                <p>standard origami paper (kami) is thin and easy to fold, but you can also experiment with foil-backed paper for complex designs or thicker cardstock for durability.
                Start with Simple Models – If you're new to origami, begin with easy folds like a paper boat or a basic crane before advancing to modular or tessellation designs.</p>
              <img src={paper2} className='rounded-xl' alt="" />
                 
            </div>
            <div className='space-y-3 '>
                <img src={paper3} className='rounded-xl' alt="" />
                <h2>07 jul, 2024</h2>
                <h2 className="text-2xl font-bold">Summer Art With Origami</h2>
                <p>Precision is Key – Sharp creases and accurate folds are essential for a clean, polished result. Using a bone folder or fingernail can help sharpen folds.
                Follow Diagrams or Video Tutorials – Many origami books and online resources provide step-by-step diagrams and videos for better learning.</p>


            </div>
            
        </div>
    );
};

export default Blogs;