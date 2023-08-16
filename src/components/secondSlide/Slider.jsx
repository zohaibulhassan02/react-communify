import React, { useState } from "react";
import "./slider.css";

const Slider = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [thumbColor, setThumbColor] = useState("");

  
  const handleChange = (event) => {
    const value = event.target.value;
    setSliderValue(value);
    const newThumbColor = getBackgroundColor(value);
    setThumbColor(newThumbColor);
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
    background: getBackgroundColor(),
  };

  const thumbStyle = {
    backgroundColor: thumbColor,
  };

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

export default Slider;
