import React, { Component } from "react";
import PropTypes from "prop-types";

class Navbar extends Component {
  state = {
    isMenuActive: false,
    firstChild: null,
    childrenArray: []
  };

  componentDidMount() {
    document.addEventListener("click", this.navStateHandler);

    const childrenArray = React.Children.toArray(this.props.children);
    this.setState({
      firstChild: childrenArray.shift(),
      childrenArray
    });
  }

  componentWillUnmount = () => {
    document.removeEventListener("click", this.navStateHandler);
  };
  // --------------------------------------------
  // OutsideClick check: Credits to  Paul Fitzgerald [STACK OVERFLOW]

  navStateHandler = event => {
    const hamburgerMenu = this.node;
    if (hamburgerMenu && !hamburgerMenu.contains(event.target)) {
      this.setState({
        isMenuActive: false
      });
    }
  };

  // -----------------------------------------------

  render() {
    return (
      <nav
        className="navbar is-fixed-top has-shadow "
        aria-label="main navigation"
      >
        <h1 className="hidden-outline" aria-hidden="true">
          Navbar
        </h1>
        <div className="navbar-brand">
          <div className="navbar-item">{this.state.firstChild}</div>
          <a
            role="button"
            className={`navbar-burger ${this.state.isMenuActive &&
              "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() =>
              this.setState({ isMenuActive: !this.state.isMenuActive })
            }
            ref={node => (this.node = node)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div
          className={`navbar-menu ${this.state.isMenuActive && "is-active"}`}
        >
          <div className="navbar-end">
            {this.state.childrenArray.map((child, i) => (
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
