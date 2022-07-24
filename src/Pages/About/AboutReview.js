import React from 'react';
import aboutimg from '../../assets/about/Intro-IT-about.png';

const AboutReview = () => {
    return (
        <div className='px-12'>
            
            <div className="flex justify-center items-center">
            <div  className='p-16'>
                <img src={aboutimg} alt="" />
            </div>

            <div style={{fontFamily:"Aleo"}}>
                <h3 style={{fontFamily:"Raleway"}} className="text-3xl font-bold my-3">Why Choose Us?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.</p>
            </div>
            </div>
            
        </div>
    );
};

export default AboutReview;