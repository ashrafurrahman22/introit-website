import React from "react";
import { Link } from "react-router-dom";
import intrologo from "../../../assets/IntroIT-logo.png";
import img from "../../../assets/Best-Web-Development-Company-in-Bangladesh.jpg";
import "../../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="min-h-screen" id="nav">

      {/* updating */}
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
    <ul class="menu menu-horizontal pt-5">
    <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/services">Service</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </div>
  <div class="navbar-end lg:flex hidden pt-5">
  <button id='btn' className= 'btn font-medium text-white px-6 uppercase'>
                Request Quote</button>
  </div>
</div>




        <div className="lg:grid grid-cols-2 mx-auto text-left">
            <div id="myText" className="max-w-7xl mt-28 mx-auto px-12">
                <h1 style={{fontFamily:"Raleway", fontSize:"26px"}} className=" font-semibold lg:text-0 text-md my-4">Introit, Why [Our Company] is the Best Web Development Company in Bangladesh?</h1>

                <p style={{fontSize:"18px"}} className="my-3">Intro It [Our company] is the best web development company in Bangladesh, and we have the track record to prove it. We have worked with some of the biggest names in the country, and our team of skilled developers has always been able to deliver on our promises.</p>

                <div className='my-3'>
              
            <button id='btn' className= 'btn font-medium text-white px-8 py-2 my-10 uppercase'>
                Get A Quote</button>
        </div>
            </div>

        </div>

    </div>
  );
};

export default Navbar;
