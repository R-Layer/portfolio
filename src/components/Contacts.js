import React, { Component } from "react";

class Contacts extends Component {
  render() {
    return (
      <form className="controlled-width-section">
        {/* USERNAME */}
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Name</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control has-icons-left">
                <input className="input" type="text" placeholder="Jhon Smith" />
                <span className="icon is-small is-left">
                  <i className="fas fa-user" />
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* EMAIL */}
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Contact email</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="email"
                  placeholder="test@example.com"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope" />
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* MESSAGE SUBJECT */}
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Subject</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  className="input is-danger"
                  type="text"
                  placeholder="e.g. Partnership opportunity"
                />
              </div>
              <p className="help is-danger">This field is required</p>
            </div>
          </div>
        </div>

        {/* MESSAGE TEXTAREA */}
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Question</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <textarea className="textarea" placeholder="What's up?" />
              </div>
            </div>
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="field is-horizontal">
          <div className="field-label" />
          <div className="field-body">
            <div className="field">
              <div className="control">
                <button className="button">Send message</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Contacts;
