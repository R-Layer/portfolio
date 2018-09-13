import React from "react";

const actualYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="footer-stripe">
      <nav className="social-container">
        <span className="icon">
          <i className="fab fa-facebook-f fa-2x" />
        </span>
        <span className="icon">
          <i className="fab fa-free-code-camp fa-2x" />
        </span>
        <span className="icon">
          <i className="fab fa-twitter fa-2x" />
        </span>
      </nav>
      <span className="footer-text is-optional">Layer - Fullstack Web Dev</span>
      <span className=" is-optional">|</span>
      <span className="footer-text">
        &copy; {actualYear} All right reserved
      </span>
    </div>
  );
};

export default Footer;
