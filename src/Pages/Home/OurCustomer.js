import React from 'react';
import logo1 from '../../assets/logo/y-logo.jpg';
import logo2 from '../../assets/logo/3d-blue-bird-logo-design_15713-231.jpg';
import logo3 from '../../assets/logo/background-material-design-for-lorem-ipsum-logo-png_87814.jpg';
import logo4 from '../../assets/logo/blue-logo-letter-b_1061-171.jpg';


const OurCustomer = () => {
    return (
        <div>

             <div className='lg:w-2/5 my-10 lg:px-0 px-3 mx-auto font-aleo'>
           <div>
           <h2 id='headings' className='my-2 font-bold'>Our Customers</h2>
            <p style={{fontFamily:"Aleo", fontSize:"18px"}} className='text-center font-medium text-md'>We are proud to serve our customers in every way possible. They are the reason we exist and we are dedicated to providing them with the best possible experience. To that end, we have compiled a list of the ten most important things our customers need to know about us.</p>
           </div>
        </div>

        {/* image */}
        <div className="grid grid-cols-4 gap-5 max-w-7xl mx-auto px-12">
        <img className='border hover:-translate-y-1 hover:scale-110 hover:card duration-700 rounded-xl' src={logo1} alt="" />
            <img className='border hover:-translate-y-1 hover:scale-110 hover:card duration-700 rounded-xl' src={logo2} alt="" />
            <img className='border hover:-translate-y-1 hover:scale-110 hover:card duration-700 rounded-xl' src={logo3} alt="" />
            <img className='border hover:-translate-y-1 hover:scale-110 hover:card duration-700 rounded-xl' src={logo4} alt="" />

        </div>

        </div>
    );
};

export default OurCustomer;