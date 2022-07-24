import { faEnvelopeCircleCheck, faLocation, faLocationDot, faMobileScreenButton, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const GetInTouch = () => {
    return (
        <div style={{fontFamily:"Aleo"}} className="flex flex-col gap-4">
            <div>
            <h2 className='text-xl text-left'>Reach Us</h2>
            </div>

            <div className='flex items-center text-xl gap-6'>
                <FontAwesomeIcon style={{color:"#22A55A"}} icon={faLocationDot}></FontAwesomeIcon>
                <h3>Mohammadpur, Dhaka-1207.</h3>
            </div>
            <div className='flex items-center text-xl gap-6'>
                <FontAwesomeIcon style={{color:"#22A55A"}} icon={faEnvelopeCircleCheck}></FontAwesomeIcon>
                <h3>introit55@gmail.com</h3>
            </div>
            <div className='flex items-center text-xl gap-6'>
                <FontAwesomeIcon style={{color:"#22A55A"}} icon={faPhoneVolume}></FontAwesomeIcon>
                <h3>+8801872254530</h3>
            </div>
            <div className='flex items-center text-xl gap-6'>
                <FontAwesomeIcon style={{color:"#22A55A"}} icon={faMobileScreenButton}></FontAwesomeIcon>
                <h3>+001 987-654-3210</h3>
            </div>

        </div>
    );
};

export default GetInTouch;