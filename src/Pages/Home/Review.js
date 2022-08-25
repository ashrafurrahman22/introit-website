import React from 'react';
import man from '../../assets/testimonial.jpg'

const Review = () => {
    return (
        <div className='lg:w-2/4 my-24 lg:px-0 px-4 mx-auto font-aleo'>
        <div>
        <h2  className='my-3 text-3xl text-center font-bold'>"Amazing Designs and Quality Work!"</h2>
         <p style={{fontFamily:"Aleo", fontSize:"16px"}} className='text-center font-medium text-md'>Nam at congue diam. Etiam erat lectus, finibus eget commodo quis, tincidunt eget leo. Nullam quis vulputate orci, ac accumsan quam. Morbi fringilla congue libero, ac malesuada vulputate pharetra.</p>
        </div>

        <div className='text-center my-3'>
          <img className='w-20 rounded-full mx-auto' src={man} alt="" />
          <h2 style={{fontFamily:"Aleo"}} className='text-xl font-bold mt-3'>Jhon Doe</h2>
          <h2 style={{fontFamily:"Aleo"}} className='text-sm font-bold my-2'>CEO, ACME INC.</h2>

        </div>


     </div>
    );
};

export default Review;