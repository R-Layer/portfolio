import React, { Component, Fragment } from "react";

import "../css/main.css";

import { animateScroll as scroll } from "react-scroll";
import SectionElement from "./SectionElement";
import BlockLink from "./BlockLink";
//import { CSSTransition } from "react-transition-group";
import ProjectsContainer from "./ProjectsContainer";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Contacts from "./Contacts";
import Footer from "./Footer";

import { projects } from "../projects";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideShow: false
    };
  }

  backToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <Fragment>
        <h1 className="hidden-outline" aria-hidden="true">
          Layer's site
        </h1>
        <header>
          <Navbar>
            {/* First child, placed left */}
            <BlockLink
              activeClass={"is-at-top"}
              spy={true}
              to={"hero"}
              smooth={true}
              duration={1000}
              offset={-70}
            >
              <span className="icon is-medium">
                <i className="fas fa-arrow-up fa-lg" />
              </span>
            </BlockLink>
            {/* Other childs, placed right [<1088px listed in the burger] */}
            <BlockLink
              activeClass={"is-current"}
              spy={true}
              to={"portfolio"}
              smooth={true}
              duration={1000}
              offset={-52}
            >
              Portfolio
            </BlockLink>
            <BlockLink
              activeClass={"is-current"}
              spy={true}
              to={"about"}
              smooth={true}
              duration={1000}
              offset={-50}
            >
              Contacts
            </BlockLink>
          </Navbar>
        </header>
        <main>
          <SectionElement name="hero">
            <h3 className="hidden-outline">Hero section</h3>
            <Hero />
          </SectionElement>
          <SectionElement name="portfolio">
            <h3 className="section-title">Portfolio</h3>
            <ProjectsContainer projects={projects} />
          </SectionElement>
          <SectionElement name="about">
            <h3 className="section-title">Contacts</h3>
            <Contacts />
          </SectionElement>
          <Footer />
        </main>
      </Fragment>
    );
  }
}

export default Main;
