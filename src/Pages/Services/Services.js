import React from "react";
import Card from "../Home/Card";
import OurCustomer from "../Home/OurCustomer";
import Project from "../Home/Project";
import Review from "../Home/Review";
import ServiceNav from "./ServiceNav";
import Nav from "./ServiceNav";

const Services = () => {
  return (
    <div>
      <ServiceNav></ServiceNav>
        <div  style={{backgroundColor:"#eff2ff"}} className="lg:px-0 p-5">
        <Card></Card>
        </div>
        <OurCustomer></OurCustomer>

        <div style={{backgroundColor:"#eff2ff", padding:"12px"}} className="my-16">
           <Review></Review>
           </div>
           
           <div className="my-16">
        <Project></Project>
      </div>
    </div>
  );
};

export default Services;
