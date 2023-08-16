import React from "react";
import "./FirstSlide.css";
import { GrLocation } from "react-icons/gr";
import { BsArrowUpRightCircle } from "react-icons/bs";
import CircularProgressBar from '../../ind'

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
           <div style={{ boxShadow: "0px 0px 62.02641677856445px 0px rgba(0, 0, 0, 0.05)",borderRadius:"100%" }}>
                  <CircularProgressBar
    selectedValue={25/100 * 86}
    text={86}
    maxValue={25}
    textColor='#f00'
    activeStrokeColor='#7C3AEC'
    withGradient
/>
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
