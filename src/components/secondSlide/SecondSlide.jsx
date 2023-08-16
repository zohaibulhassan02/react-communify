import React, { useState } from "react";
import "./secondSlide.css";
import { FaHeartbeat } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";
import { GiSandCastle } from "react-icons/gi";
import { PiTreeEvergreenFill } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import "./slider.css";
import Popup from "../thirdSlide/Popup";
import CircularProgressBar from "../../ind";

const useSlider = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [thumbColor, setThumbColor] = useState("#007BFF");

  const handleChange = (event) => {
    const value = event.target.value;
    setSliderValue(value);
    setThumbColor(getBackgroundColor(value));
  };
  const getBackgroundColor = () => {
    if (sliderValue >= 90) {
      return "#7C3AED";
    } else if (sliderValue <= 89 && sliderValue >= 80) {
      return "#814095";
    } else if (sliderValue <= 79 && sliderValue >= 70) {
      return "#5D3FD3	";
    } else if (sliderValue <= 69 && sliderValue >= 60) {
      return "#E5422C";
    } else {
      return "red";
    }
  };

  const sliderStyle = {
    background: getBackgroundColor(sliderValue),
  };

  const thumbStyle = {
    backgroundColor: thumbColor,
  };
  return { sliderValue, handleChange, sliderStyle, thumbStyle };
};

const Slider = () => {
  const { sliderValue, handleChange, sliderStyle, thumbStyle } = useSlider();

  return (
    <div className="slider-box">
      <input
        type="range"
        className="range-slider"
        value={sliderValue}
        onChange={handleChange}
        min="0"
        max="100"
        style={sliderStyle}
      />
      <div className="slider-value">{sliderValue}%</div>

      <style>
        {`.range-slider::-webkit-slider-thumb { background-color: ${thumbStyle.backgroundColor}; }
      .range-slider::-moz-range-thumb { background-color: ${thumbStyle.backgroundColor}; }`}
      </style>
    </div>
  );
};

const SecondSlide = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <div className="container">
      <div className="content">
        <h2 className="heading">Community Score</h2>
        <div className="main-div">
          <div className="left-div">
            <div className="box-container">
              <div className="box">
                <FaHeartbeat />
                <h4>Healthcare Quality</h4>
                <BiInfoCircle
                  onClick={togglePopup}
                  style={{ cursor: "pointer" }}
                />
                {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} />}
              </div>
              <h5>86%</h5>
              <Slider />
            </div>

            <div className="box-container">
              <div className="box">
                <GiSandCastle />
                <h4>Events and Activities</h4>
                <BiInfoCircle
                  onClick={togglePopup}
                  style={{ cursor: "pointer" }}
                />
                {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} />}
              </div>
              <h5>86%</h5>
              <Slider />
            </div>

            <div className="box-container">
              <div className="box">
                <PiTreeEvergreenFill />
                <h4>Parks And Outdoors</h4>
                <BiInfoCircle
                  onClick={togglePopup}
                  style={{ cursor: "pointer" }}
                />
                {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} />}
              </div>
              <h5>86%</h5>
              <Slider />
            </div>

            <div className="box-container">
              <div className="box">
                <FaUsers />
                <h4 style={{ fontSize: ".835rem" }}>Community Amenities</h4>
                <BiInfoCircle
                  onClick={togglePopup}
                  style={{ cursor: "pointer" }}
                />
                {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} />}
              </div>
              <h5>86%</h5>
              <Slider />
            </div>
            <div className="btns left">
              <button>Set To Default</button>
              <button style={{ backgroundColor: "#814095" }}>
                Save My Score
              </button>
            </div>
          </div>
          <div className="right-div" style={{ marginTop: "2rem" }}>
            <div
              style={{
                boxShadow:
                  "0px 0px 62.02641677856445px 0px rgba(0, 0, 0, 0.05)",
                borderRadius: "100%",
              }}
            >
              <CircularProgressBar
                selectedValue={(25 / 100) * 86}
                text={86}
                maxValue={25}
                textColor="#f00"
                activeStrokeColor="#7C3AEC"
                withGradient
              />
            </div>
            <div className="btns right">
              <button>Set To Default</button>
              <button style={{ backgroundColor: "#814095" }}>
                Save My Score
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSlide;
