import React, { Component } from "react";

import "../css/main.css";

import { CSSTransition } from "react-transition-group";

class Main extends Component {
  state = {
    slideShow: false
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Portfolio v0.1</h1>
        </header>
        <p className="App-intro">First paragraph</p>
        <p className="notification is-info">
          <button className="delete" />
          Bulma check
        </p>
        <CSSTransition
          in={this.state.slideShow}
          timeout={1000}
          classNames={"slide"}
        >
          <p>Sliding paragraph - css transition set up</p>
        </CSSTransition>
        <button
          onClick={() =>
            this.setState({
              slideShow: !this.state.slideShow
            })
          }
        >
          Toggle
        </button>
      </div>
    );
  }
}

export default Main;
