import { faCreditCard, faLightbulb, faMobileScreenButton, faObjectUngroup, faPenToSquare, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import '../Styles/Card.css'

const Card = () => {
  return (
    <div className="max-w-7xl mx-auto lg:px-12 px-3">

       <div className="lg:flex lg:justify-center lg:items-center lg:gap-5">
           
            {/* first card */}
      <div id="card" class="card lg:w-96 bg-base-100 shadow-xl hover:-translate-y-1 hover:scale-110 hover:card duration-700">
        <div class="card-body">
            <div>
            <FontAwesomeIcon className="text-2xl py-2 text-red-500 card-title" icon={faPenToSquare}></FontAwesomeIcon>
            </div>
          <h2 style={{fontFamily:"raleway"}} class="card-title text-xl">Web Design</h2>
          <p className="" style={{fontFamily:"aleo", fontSize:"18px"}}>Web design is the process of creating a website. It includes the structure, layout, and content of the website. A good web design is user-friendly, visually appealing, and easy to navigate.</p>
        </div>
      </div>

        {/* second card */}
      <div id="card" class="card lg:w-96 hover:-translate-y-1 hover:scale-110 hover:card duration-700 bg-base-100 shadow-xl">
        <div class="card-body">
            <div>
            <FontAwesomeIcon className="text-2xl py-2 text-red-500 card-title" icon={faObjectUngroup}></FontAwesomeIcon>
            </div>
          <h2 style={{fontFamily:"raleway"}} class="card-title text-xl">Web Development</h2>
          <p style={{fontFamily:"aleo", fontSize:"18px"}}>Web development is a process of creating, designing, and coding websites. The term "web development" can refer to a wide range of activities, from creating a simple website to a complex web.</p>
        </div>
      </div>

        {/* third card */}
      <div id="card" class="card lg:w-96 hover:-translate-y-1 hover:scale-110 hover:card duration-700 bg-base-100 shadow-xl">
        <div class="card-body">
            <div>
            <FontAwesomeIcon className="text-2xl py-2 text-red-500 card-title" icon={faMobileScreenButton}></FontAwesomeIcon>
            </div>
          <h2 style={{fontFamily:"raleway"}} class="card-title text-xl">App Development</h2>
          <p style={{fontFamily:"aleo", fontSize:"18px"}}>The number of mobile app developers is on the rise, and it's no wonder. Mobile apps have the potential to reach a wide audience and can be a lucrative way to make money.What's your decisions?</p>
        </div>
      </div>    

       </div>


    {/* second one */}


       <div className="lg:flex justify-center items-center gap-5 lg:my-8">

            {/* first card */}
      <div id="card" class="card lg:w-96 hover:-translate-y-1 hover:scale-110 hover:card duration-700 bg-base-100 lg:my-0 shadow-xl">
        <div class="card-body">
            <div>
            <FontAwesomeIcon className="text-2xl py-2 text-red-500 card-title" icon={faLightbulb}></FontAwesomeIcon>
            </div>
          <h2 style={{fontFamily:"raleway"}} class="card-title text-xl">Digital Marketing & SEO</h2>
          <p style={{fontFamily:"aleo", fontSize:"18px"}}>Digital marketing and SEO are two important aspects of online marketing. businesses need to understand how they work together to get the most benefit from their online presence.</p>
        </div>
      </div>


<div id="card" class="card lg:w-96 hover:-translate-y-1 hover:scale-110 hover:card duration-700 bg-base-100 lg:my-0 shadow-xl">
        <div class="card-body">
            <div>
            <FontAwesomeIcon className="text-xl py-2 text-red-500 card-title" icon={faCreditCard}></FontAwesomeIcon>
            </div>
          <h2 style={{fontFamily:"raleway"}} class="card-title text-xl">E-Commerce Development</h2>
          <p style={{fontFamily:"aleo", fontSize:"17px"}}>E-commerce development is no longer a luxury; it's a necessity. In today's digital age, customers expect to be able to purchase products and services online. If your business doesn't have an e-commerce.</p>
        </div>
      </div>


        {/* third card */}
      <div id="card" class="card lg:w-96 hover:-translate-y-1 hover:scale-110 hover:card duration-700 bg-base-100 shadow-xl">
        <div class="card-body">
            <div>
            <FontAwesomeIcon className="text-2xl py-2 text-red-500 card-title" icon={faUserCircle}></FontAwesomeIcon>
            </div>
          <h2 style={{fontFamily:"raleway"}} class="card-title text-xl">Help & Support</h2>
          <p style={{fontFamily:"aleo", fontSize:"18px"}}>If you're having trouble with your blog, don't hesitate to reach out for help and support. There are a number of ways to get help, including: give up – get help and support today!</p>
        </div>
      </div>    

       </div>


      



    </div>
  );
};

export default Card;
