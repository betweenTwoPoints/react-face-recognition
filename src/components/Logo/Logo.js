import React from "react";
import Tilt from "react-parallax-tilt";
import face from "./face-detection_2383479.png";
import "./Logo.css";

function Logo() {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        style={{
          height: "150px",
          width: "150px",
        }}
        tiltReverse={true}
      >
        <div className="pa3">
          <img src={face} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
