import React from "react";
import Project from "../Home/Project";
import AboutCard from "./AboutCard";
import AboutNav from "./AboutNav";
import AboutReview from "./AboutReview";
import Summary from "./Summary";

const About = () => {
  return (
    <div>
      <AboutNav></AboutNav>

      <div className="flex justify-center mt-[-100px] mb-16">
        <AboutCard></AboutCard>
      </div>

      <AboutReview></AboutReview>

      <div className="my-16">
        <Summary></Summary>
      </div>

      <div className="my-16">
        <Project></Project>
      </div>
    </div>
  );
};

export default About;
