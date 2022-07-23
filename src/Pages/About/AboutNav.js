import React from 'react';
import { Link } from 'react-router-dom';
import intrologo from '../../assets/IntroIT-logo.png';
// import '../Styles/AboutNav.css';

const AboutNav = () => {
    return (
        <div className="min-h-screen" id="service">

<div id="servicebar" class="navbar p-8 text-xl">

  <div class="flex-1">
    <Link to='/' class="btn btn-ghost normal-case text-xl">
        <img className="w-44" src={intrologo} alt="" />
    </Link>
  </div>
  <div class="flex-none pt-2 pr-6">
    <ul class="menu menu-horizontal p-0">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/services">Service</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <button id='btn' className= 'btn font-medium text-white px-6 uppercase'>
                Request Quote</button>
    </ul>
  </div>
</div>


        <div className="w-2/4 text-center mx-auto">
            <div className="max-w-7xl mt-28 mx-auto px-12">
                <h1 style={{fontFamily:"Aleo", fontSize:"32px", letterSpacing:"4px"}} className="font-semibold my-4">About Us</h1>

                <p style={{fontSize:"17px"}} className="my-3">Welcome to Intro IT</p>
                <p style={{fontSize:"17px"}} className="my-3">Thank you for your interest in our company. We would love to hear from you. Please fill out the form below and someone from our team will be in touch shortly.</p>
            </div>

        </div>

    </div>
    );
};

export default AboutNav;