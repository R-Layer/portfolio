import React from "react";

const actualYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="footer-stripe">
      <nav className="social-container">
        <a
          href="https://www.facebook.com/layer.rock.9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <i className="fab fa-facebook-f fa-2x" />
          </span>
        </a>
        <a
          href="https://forum.freecodecamp.org/u/Layer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <i className="fab fa-free-code-camp fa-2x" />
          </span>
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <i className="fab fa-twitter fa-2x" />
          </span>
        </a>
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
