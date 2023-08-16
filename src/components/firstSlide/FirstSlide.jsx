import React from "react";
import "./FirstSlide.css";
import { GrLocation } from "react-icons/gr";
import { BsArrowUpRightCircle } from "react-icons/bs";

const FirstSlide = () => {
  return (
    <>
      <div className="container first-slide">
        <div className="content">
          <h2 className="heading">Community Score</h2>
          <div className="address">
            <GrLocation />
            <p>2801 Westren Ave, Belltown, Seattle, W...</p>
          </div>
          <div className="score">
            <h1 className="score-heading">86%</h1>
          </div>
          <div className="calculate-btn">
            <button>See how this score is calculated</button>
            <BsArrowUpRightCircle />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default FirstSlide;
