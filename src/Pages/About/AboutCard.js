import { faCircleQuestion, faClipboardQuestion, faEyeLowVision, faRocket, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AboutCard = () => {
    return (
        <div>
            
            {/* cards */}

            <div className="flex gap-5">
           
            {/* first card */}
      <div id="card" class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
            <div>
            <FontAwesomeIcon className="text-4xl py-2 text-red-500 card-title" icon={faClipboardQuestion}></FontAwesomeIcon>
            </div>
          <h2 style={{fontFamily:"raleway"}} class="card-title text-2xl">Who Are We ?</h2>
          <p style={{fontFamily:"aleo", fontSize:"18px"}}>Intro IT provides comprehensive solutions for the administration of credentials to organizations in the public and private sectors. It is a single turnkey solution that integrates state-of-the-art solution design, solid back-end technology, and efficient project management. This solution is intended for projects involving national IT infrastructure.</p>

          
          <p style={{fontFamily:"aleo", fontSize:"18px"}} className="my-3">Among the many applications of information technology offered by Intro are National ID, Voter Registration, e-Passports, Border Control, Driving Licenses, and Vehicle Registration and Tracking. Additionally, Intro IT offers highly specialized system integration of third-party hardware and software with legacy systems. These services include identification governance, Enterprise Single Sign-On, and identity management solutions for large organizations such as banks, telecom companies, and multinational corporations.</p>
        </div>
      </div>

        {/* second card */}
      <div id="card" class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
            <div>
            <FontAwesomeIcon className="text-4xl py-2 text-red-500 card-title" icon={faRocket}></FontAwesomeIcon>
            </div>
          <h2 style={{fontFamily:"raleway"}} class="card-title text-2xl">Our Mission</h2>
          <p style={{fontFamily:"aleo", fontSize:"18px"}}>Intro IT Mission is dedicated to helping individuals and businesses harness the power of Web development Company. We provide tips, tricks, and resources to help you make the most of your IT investment.</p>

          <p style={{fontFamily:"aleo", fontSize:"18px"}}>The Information Technology Mission (ITM) was established in 2013 as a dedicated and integrated effort by the Department of Science & Technology (DST), Ministry of Communications and Information Technology (MCIT) and the Department of Electronics and Information Technology (DeitY), Ministry of Communications and Information Technology (MCIT) to spur development and innovation in the Indian Information Technology (IT) sector.</p>
        </div>
      </div>

        {/* third card */}
      <div id="card" class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
            <div>
            <FontAwesomeIcon className="text-4xl py-2 text-red-500 card-title" icon={faEyeLowVision}></FontAwesomeIcon>
            </div>
          <h2 style={{fontFamily:"raleway"}} class="card-title text-2xl">What We Do ?</h2>


          <div style={{fontFamily:"Aleo"}} className='flex flex-col gap-5'>
          <div className='flex items-center text-xl gap-3'>
                <FontAwesomeIcon style={{color:"#22A55A"}} icon={faSquareArrowUpRight}></FontAwesomeIcon>
                <h3 className="font-bold">Web Design</h3>
            </div>
          <div className='flex items-center text-xl gap-3'>
                <FontAwesomeIcon style={{color:"#22A55A"}} icon={faSquareArrowUpRight}></FontAwesomeIcon>
                <h3 className='font-bold'>UI UX Design</h3>
            </div>
          <div className='flex items-center text-xl gap-3'>
                <FontAwesomeIcon style={{color:"#22A55A"}} icon={faSquareArrowUpRight}></FontAwesomeIcon>
                <h3 className='font-bold'>Website Development</h3>
            </div>
          <div className='flex items-center text-xl gap-3'>
                <FontAwesomeIcon style={{color:"#22A55A"}} icon={faSquareArrowUpRight}></FontAwesomeIcon>
                <h3 className='font-bold'>Digital Marketing</h3>
            </div>
          <div className='flex items-center text-xl gap-3'>
                <FontAwesomeIcon style={{color:"#22A55A"}} icon={faSquareArrowUpRight}></FontAwesomeIcon>
                <h3 className='font-bold'>Social Media</h3>
            </div>
          <div className='flex items-center text-xl gap-3'>
                <FontAwesomeIcon style={{color:"#22A55A"}} icon={faSquareArrowUpRight}></FontAwesomeIcon>
                <h3 className='font-bold'>Search Engine Optimisation</h3>
            </div>
          <div className='flex items-center text-xl gap-3'>
                <FontAwesomeIcon style={{color:"#22A55A"}} icon={faSquareArrowUpRight}></FontAwesomeIcon>
                <h3 className='font-bold'>E-Commerce Development</h3>
            </div>
          <div className='flex items-center text-xl gap-3'>
                <FontAwesomeIcon style={{color:"#22A55A"}} icon={faSquareArrowUpRight}></FontAwesomeIcon>
                <h3 className='font-bold'>Logo Design</h3>
            </div>
          <div className='flex items-center text-xl gap-3'>
                <FontAwesomeIcon style={{color:"#22A55A"}} icon={faSquareArrowUpRight}></FontAwesomeIcon>
                <h3 className='font-bold'>App Development</h3>
            </div>
          <div className='flex items-center text-xl gap-3'>
                <FontAwesomeIcon style={{color:"#22A55A"}} icon={faSquareArrowUpRight}></FontAwesomeIcon>
                <h3 className='font-bold'>E-Commerce Store</h3>
            </div>
          <div className='flex items-center text-xl gap-3'>
                <FontAwesomeIcon style={{color:"#22A55A"}} icon={faSquareArrowUpRight}></FontAwesomeIcon>
                <h3 className='font-bold'>Software Development</h3>
            </div>
          <div className='flex items-center text-xl gap-3'>
                <FontAwesomeIcon style={{color:"#22A55A"}} icon={faSquareArrowUpRight}></FontAwesomeIcon>
                <h3 className='font-bold'>Tech Support</h3>
            </div>
          </div>
        </div>
      </div>    

       </div>



        </div>
    );
};

export default AboutCard;