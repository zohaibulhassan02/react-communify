import React, { useState } from "react";
import "./Popup.css";
import { GiCancel } from "react-icons/gi";
import { FaEarlybirds } from "react-icons/fa";

const Popup = ({ onClose }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const handleClose = () => {
    setIsPopupOpen(false);
    onClose();
  };
  return (
    isPopupOpen && (
      <div className="popup">
        <div className="popup-content">
          <button className="close-button" onClick={handleClose}>
            <GiCancel />
          </button>
          <FaEarlybirds />
          <p>
            This score is composed using public & private data relating to the
            top 3 closest hospitals/health facilities to the selected address.
          </p>
        </div>
      </div>
    )
  );
};

export default Popup;
