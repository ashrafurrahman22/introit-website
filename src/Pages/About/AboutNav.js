import React from 'react';
import { Link } from 'react-router-dom';
import intrologo from '../../assets/IntroIT-logo.png';
// import '../Styles/AboutNav.css';

const AboutNav = () => {
    return (
        <div className="min-h-screen" id="service">

<div id="navbar" class="navbar">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg className="w-10" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/services">Service</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
    <Link to='/' class="btn btn-ghost normal-case text-xl">
    <img className="lg:w-44 w-28" src={intrologo} alt="" />
    </Link>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
    <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/services">Service</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </div>
  <div class="navbar-end lg:flex hidden">
  <button id='btn' className= 'btn font-medium text-white px-6 uppercase'>
                Request Quote</button>
  </div>
</div>



        <div className="lg:w-2/4 text-center mx-auto">
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