import React from "react";
import Card from "../Home/Card";
import OurCustomer from "../Home/OurCustomer";
import Project from "../Home/Project";
import Review from "../Home/Review";
import Nav from "./Nav";

const Services = () => {
  return (
    <div>
        <Nav></Nav>
        <div  style={{backgroundColor:"#eff2ff"}} className="p-20">
        <Card></Card>
        </div>
        <OurCustomer></OurCustomer>

        <div style={{backgroundColor:"#eff2ff", padding:"12px"}} className="my-16">
           <Review></Review>
           </div>

        <Project></Project>

    </div>
  );
};

export default Services;
