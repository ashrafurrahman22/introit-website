import React from 'react';
import leader1 from '../../assets/leader/Raihan.jpg';
import leader2 from '../../assets/leader/Sir-copy.jpg';
import leader3 from '../../assets/leader/WhatsApp-Image-2022-06-26-at-12.13.16-PM.jpeg';

const Leadership = () => {
    return (
        <div>

             <div className='lg:w-2/5 lg:px-0 px-4 my-10 mx-auto font-aleo'>
           <div>
           <h2 id='headings' className='my-2 font-bold'>Meet Our Leadership</h2>
            <p style={{fontFamily:"Aleo", fontSize:"18px"}} className='text-center font-medium text-md'>Thank you for choosing our company for your design needs! We take pride in our work and guarantee amazing designs and quality work. We know that your business is important to you, and we want to help you succeed. With our team of experienced designers, you can be sure that your project will be in good hands.</p>
           </div>
        </div>

        {/* image */}
        <div className="lg:grid grid-cols-3 gap-24 max-w-7xl mx-auto px-12">

        <div style={{fontFamily:"Aleo"}}>
        <img className='border rounded-xl' src={leader2} alt="" />
        <div className='my-8 text-center'>
        <h2 className='text-2xl font-bold'>MR. Mokter Mojumder</h2>
        <h3 className='text-xl my-2'>Founder at CEO</h3>
        </div>
        </div>

        <div style={{fontFamily:"Aleo"}}>
        <img className='border rounded-xl' src={leader1} alt="" />
        <div className='my-8 text-center'>
        <h2 className='text-2xl font-bold'>Rayhan Mojumder Mijan</h2>
        <h3 className='text-xl my-2'>Director HR</h3>
        </div>
        </div>

        <div style={{fontFamily:"Aleo"}}>
        <img className='border rounded-xl' src={leader3} alt="" />
        <div className='my-8 text-center'>
        <h2 className='text-2xl font-bold'>MD. Monir Mojumder</h2>
        <h3 className='text-xl my-2'>Assistant Director</h3>
        </div>
        </div>


        </div>

        </div>
    );
};

export default Leadership;