import React, { useState } from "react";
import "../secondSlide/secondSlide.css";
import { FaHeartbeat } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";
import { GiSandCastle } from "react-icons/gi";
import { PiTreeEvergreenFill } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import "./ThirdSlide.css";
import "./Dropdown";
import CircleWithLines from "./circleWithLines";
import Dropdown from "./Dropdown";
import Popup from "./Popup";
import Footer from "../Footer/Footer";
import CircularProgressBar from "../../ind";

const ThirdSlide = () => {
  const options1 = [
    "Super important 🙌",
    "Very Important 😝",
    "Moderately Important 🧐 ",
    "Not Really Important 👎",
  ];

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
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
                  {isPopupOpen && (
                    <Popup onClose={() => setIsPopupOpen(false)} />
                  )}
                </div>
                <h5>86%</h5>
                <div>
                  <Dropdown options={options1} />
                </div>
              </div>

              <div className="box-container">
                <div className="box">
                  <GiSandCastle />
                  <h4>Events and Activities</h4>
                  <BiInfoCircle
                    onClick={togglePopup}
                    style={{ cursor: "pointer" }}
                  />
                  {isPopupOpen && (
                    <Popup onClose={() => setIsPopupOpen(false)} />
                  )}
                </div>
                <h5>86%</h5>
                <div>
                  <Dropdown options={options1} />
                </div>
              </div>

              <div className="box-container">
                <div className="box">
                  <PiTreeEvergreenFill />
                  <h4>Parks And Outdoors</h4>
                  <BiInfoCircle
                    onClick={togglePopup}
                    style={{ cursor: "pointer" }}
                  />
                  {isPopupOpen && (
                    <Popup onClose={() => setIsPopupOpen(false)} />
                  )}
                </div>
                <h5>86%</h5>
                <div>
                  <Dropdown options={options1} />
                </div>
              </div>

              <div className="box-container">
                <div className="box">
                  <FaUsers />
                  <h4 style={{ fontSize: ".835rem" }}>Community Amenities</h4>
                  <BiInfoCircle
                    onClick={togglePopup}
                    style={{ cursor: "pointer" }}
                  />
                  {isPopupOpen && (
                    <Popup onClose={() => setIsPopupOpen(false)} />
                  )}
                </div>
                <h5>86%</h5>
                <div>
                  <Dropdown options={options1} />
                </div>
              </div>
            </div>
            <div className="right-div">
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
              <button>
                <nobr>Set To Default</nobr>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ThirdSlide;
