import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/portfolio1-300x300.jpg';
import img2 from '../../assets/portfolio2-300x300.jpg';
import img3 from '../../assets/portfolio3-300x300.jpg';
import img4 from '../../assets/portfolio4-1-300x300.jpg';
import '../Styles/Portfolio.css'

const Portfolio = () => {
    return (
        <div>
            {/* portfolio */}
            <div className='lg:w-2/5 my-14 mx-auto lg:px-0 px-3 font-aleo'>
           <div>
           <h2 id='headings' className='my-2 font-bold'>Portfolio</h2>
            <p style={{fontFamily:"Aleo", fontSize:"18px"}} className='text-center font-medium text-md'>As an investor, you always want to be diversified. That means having a mix of different types of investments in your portfolio. But what is the best mix? And how do you know when to rebalance your portfolio? In this blog post, we’ll answer those questions and more.</p>
           </div>
        </div>

        {/* image */}
        <div className="grid grid-cols-4 gap-5 max-w-7xl mx-auto px-12">
            <img className='hover:-translate-y-1 hover:scale-110 hover:card duration-700' src={img1} alt="" />
            <img className='hover:-translate-y-1 hover:scale-110 hover:card duration-700' src={img2} alt="" />
            <img className='hover:-translate-y-1 hover:scale-110 hover:card duration-700' src={img3} alt="" />
            <img className='hover:-translate-y-1 hover:scale-110 hover:card duration-700' src={img4} alt="" />

        </div>

        <div className='flex justify-center my-12'>
            <Link to='/services'><button id='btn' className= 'btn font-medium text-white px-8 py-2'>Explore More</button></Link>
        </div>

        </div>
    );
};

export default Portfolio;