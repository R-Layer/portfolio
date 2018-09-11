import React, { Component } from "react";
import PropTypes from "prop-types";

class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar is-fixed-top has-shadow "
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            {this.props.children.map((child, i) => (
              <div className="navbar-item" key={i}>
                {child}
              </div>
            ))}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  children: PropTypes.array.isRequired
};

export default Navbar;
