import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import aboutimg from "../../assets/about/Intro-IT-about.png";

const AboutReview = () => {
  return (
    <div className="px-12 ">
      <div className="flex justify-center items-center gap-16">
        <div style={{ backgroundColor: "black" }} className="rounded-xl">
          <img style={{ opacity: "0.4" }} src={aboutimg} alt="" />
        </div>

        <div className="flex flex-col">
          <div style={{ fontFamily: "Aleo" }}>
            <h3
              style={{ fontFamily: "Raleway" }}
              className="text-3xl font-bold my-3"
            >
              Why Choose Us?
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar.
            </p>
          </div>


        </div>
      </div>

      <div></div>
    </div>
  );
};

export default AboutReview;
