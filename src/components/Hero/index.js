import React from "react";
import "./style.css";
import Photo from "../../images/portfolio-photo.png"

function Hero() {
  return (
    <div className="card hero center img">
      <img src={Photo} alt="Logo"/>
    </div>
  );
}

export default Hero;
