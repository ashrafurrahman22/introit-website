import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Project = () => {
    return (
        <div className='max-w-6xl mx-auto px-12'>


            <div class="card w-full bg-base-100 shadow-xl">
        <div class="card-body">
         
         <div className='flex items-center justify-between'>


         <div>
          <h2 style={{fontFamily:"raleway", color:"#22A55A"}} class="card-title text-3xl my-5">Would you like to start a project with us?</h2>
          <p style={{fontFamily:"aleo", fontSize:"18px"}}>Thank you for your interest in working with us! We are always looking for <br /> talented and ambitious individuals to join our team. If you are interested in <br /> starting a project with us, please fill out the form below. We will review your <br /> submission and get back to you as soon as possible.</p>
          </div>

          <div className='flex justify-center my-10'>
              
            <button id='btn' className= 'btn font-medium text-white px-8 py-2'>
            <FontAwesomeIcon className='mr-3' icon={faPhone}></FontAwesomeIcon>
                +8801721778884</button>
        </div>


         </div>


        </div>
      </div>

     



            </div>


        // </div>
    );
};

export default Project;