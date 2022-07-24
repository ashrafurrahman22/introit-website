import React from 'react';
import '../Styles/Help.css'

const Help = () => {
    return (
        <div className='lg:w-2/5 my-10 mx-auto font-aleo'>
           <div>
           <h2 id='headings' className='my-2 font-bold'>How can we help you?</h2>
            <p style={{fontFamily:"Aleo", fontSize:"18px"}} className='text-center font-medium lg:text-md text-sm'>If you’re looking for a web development company that can get the job done, then you need to look no further than [our company]. We have the experience, the skills, and the track record to prove that we are the best in the business. Contact us today to learn more about what we can do for you</p>
           </div>
            
        </div>
    );
};

export default Help;