import React from "react";

const Hero = props => {
  return (
    <div className="hero is-fullheight">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="svg-container"
      >
        <polygon className="svg-main-path" points="100,0 70,100 100,100" />
        <line className="svg-line" x1="100" y1="0" x2="70" y2="100" />
      </svg>
      <div className="hero-header">
        <p className="hero-title">Layer</p>
        <p className="hero-subtitle">web developer</p>
      </div>
    </div>
  );
};

export default Hero;
