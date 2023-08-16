import React from "react";
import './Footer.css'

const divStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "0.1rem",
  alignItems: "end",
  marginRight: "3rem",
};

const Footer = () => {
  return (
    <div style={divStyle} className="footer">
      <p style={{fontWeight: 100, color: "#2f2f2f", fontSize: ".85rem"}}>Powered By</p>
      <p>
        Comm<b>Un</b>
        <b>ify</b>
      </p>
    </div>
  );
};

export default Footer;
