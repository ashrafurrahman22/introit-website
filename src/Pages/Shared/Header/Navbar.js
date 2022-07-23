import React from "react";
import { Link } from "react-router-dom";
import intrologo from "../../../assets/IntroIT-logo.png";
import img from "../../../assets/Best-Web-Development-Company-in-Bangladesh.jpg";
import "../../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="min-h-screen" id="nav">

<div id="navbar" class="navbar p-8 text-xl">

  <div class="flex-1">
    <Link to='/' class="btn btn-ghost normal-case text-xl">
        <img className="w-40" src={intrologo} alt="" />
    </Link>
  </div>
  <div class="flex-none pt-2 pr-6">
    <ul class="menu menu-horizontal p-0">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/">About</Link></li>
      <li><Link to="/">Service</Link></li>
      <li><Link to="/">Contact</Link></li>
      <button id='btn' className= 'btn font-medium text-white px-6 uppercase'>
                Request Quote</button>
    </ul>
  </div>
</div>


        <div className="grid grid-cols-2 mx-auto text-left">
            <div className="max-w-7xl mt-36 mx-auto px-12">
                <h1 style={{fontFamily:"Raleway", fontSize:"26px"}} className=" font-bold my-4">Introit, Why [Our Company] is the Best Web Development Company in Bangladesh?</h1>

                <p style={{fontSize:"18px"}} className="my-3">Intro It [Our company] is the best web development company in Bangladesh, and we have the track record to prove it. We have worked <br /> with some of the biggest names in the country, and our team of skilled developers has always been able to deliver on our promises.</p>

                <div className='ml-4 my-10'>
              
            <button id='btn' className= 'btn font-medium text-white px-8 py-2 my-10 uppercase'>
                Get A Quote</button>
        </div>
            </div>

        </div>

    </div>
  );
};

export default Navbar;
