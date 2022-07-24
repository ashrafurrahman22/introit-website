import React from 'react';
import Project from '../Home/Project';
import ContactNav from './ContactNav';
import Form from './Form';
import GetInTouch from './GetInTouch';
import Map from './Map';

const Contact = () => {
    return (
        <div>
            <ContactNav></ContactNav>

        <div className='grid grid-cols-3 px-12 items-center my-16'>

        <div>
            <h2 style={{fontFamily:"Aleo", color:"#22A55A", letterSpacing:"1px"}} className='text-center text-3xl font-semibold'>Request Free Consultation</h2> 
        <Form></Form>
        </div>
        <Map></Map>

        <div className='flex flex-col justify-center items-center'>
        <h2 style={{fontFamily:"Aleo", color:"#22A55A", letterSpacing:"1px"}} className='text-center my-4 text-3xl font-semibold'>Get In Touch</h2> 
         
        <GetInTouch></GetInTouch>
        </div>

        </div>

            <div className='my-16'>

            <Project></Project>
            </div>

        </div>
    );
};

export default Contact;