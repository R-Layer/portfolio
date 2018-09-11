import React, { Component } from "react";

import "../css/main.css";

import { Element, Link, animateScroll as scroll } from "react-scroll";
//import { CSSTransition } from "react-transition-group";
import ProjectsContainer from "./ProjectsContainer";
import Navbar from "./Navbar";
import Hero from "./Hero";

import { projects } from "../projects";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideShow: false
    };
  }

  render() {
    return (
      <main>
        <header>
          <Navbar>
            <Link
              activeClass={"is-current"}
              spy={true}
              to={"portfolio"}
              smooth={true}
              duration={1000}
              offset={-60}
            >
              Link to bottom
            </Link>
            <Link
              activeClass={"is-current"}
              spy={true}
              to={"about"}
              smooth={true}
              duration={1000}
              offset={-60}
            >
              Link to very bottom
            </Link>
          </Navbar>
        </header>
        <Hero />
        <Element name="portfolio">
          <p className="section-title">Portfolio</p>
          <ProjectsContainer projects={projects} />
        </Element>
        <Element name="about">
          <p className="section-title">Very Btm</p>
        </Element>
        <div onClick={scroll.scrollToTop}>Link to top</div>
      </main>
    );
  }
}

export default Main;
