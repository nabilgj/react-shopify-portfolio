import React, { Component } from "react";

import emailjs from "emailjs-com";

import Snackbar from "@material-ui/core/Snackbar";
import emailJSAPI from "../../../emailjs.config.json";

class ContactTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      email: "",
      subject: "",
      message: "",
      open: false,
      alert: {
        open: false,
        message: "",
        backgroundColor: "Dialo",
      },
    };
  }

  onNameChanged = (e) => {
    const fname = e.target.value;
    this.setState(() => ({
      fname: fname,
    }));
  };

  onEmailChanged = (e) => {
    const email = e.target.value;
    this.setState(() => ({
      email: email,
    }));
  };

  onSubjectChanged = (e) => {
    const subject = e.target.value;
    this.setState(() => ({
      subject: subject,
    }));
  };

  onMessageChanged = (e) => {
    const message = e.target.value;
    this.setState(() => ({
      message: message,
    }));
  };

  setOpen = () => {
    this.setState(() => ({
      open: true,
    }));
  };

  onFormSubmitted = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        emailJSAPI.SERVICE_ID,
        emailJSAPI.TEMPLATE_ID,
        e.target,
        emailJSAPI.USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          this.state.open = false;
          this.state.fname = "";
          this.state.email = "";
          this.state.subject = "";
          this.state.message = "";
          this.setState(() => ({
            alert: {
              open: true,
              message: "Message Sent Successfully",
              backgroundColor: "#4bb543",
            },
          }));
        },
        (error) => {
          console.log(error.text);
          this.state.open = false;
          this.state.fname = "";
          this.state.email = "";
          this.state.subject = "";
          this.state.message = "";
          this.setState(() => ({
            alert: {
              open: true,
              message: "Message Sent Successfully",
              backgroundColor: "#4bb543",
            },
          }));
        }
      );
  };

  render() {
    return (
      <div className="contact-form--1">
        <div className="container">
          <div className="row row--35 align-items-start">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="section-title text-left mb--50">
                <h2 className="title">Contact Me</h2>
                <p className="description">
                  Would love to hear from you! Please reach out with any
                  questions
                </p>
              </div>
              <div className="form-wrapper">
                <form onSubmit={this.onFormSubmitted}>
                  <label htmlFor="item01">
                    <input
                      type="text"
                      name="name"
                      id="item01"
                      value={this.state.fname}
                      onChange={this.onNameChanged}
                      placeholder="Your Name *"
                    />
                  </label>

                  <label htmlFor="item02">
                    <input
                      type="text"
                      name="email"
                      id="item02"
                      value={this.state.email}
                      onChange={this.onEmailChanged}
                      placeholder="Your email *"
                    />
                  </label>

                  <label htmlFor="item03">
                    <input
                      type="text"
                      name="subject"
                      id="item03"
                      value={this.state.subject}
                      onChange={this.onSubjectChanged}
                      placeholder="Subject *"
                    />
                  </label>
                  <label htmlFor="item04">
                    <textarea
                      type="text"
                      id="item04"
                      name="message"
                      value={this.state.message}
                      onChange={this.onMessageChanged}
                      placeholder="Message *"
                    />
                  </label>
                  <button
                    className="rn-button-style--2 btn-solid contact-btn"
                    type="submit"
                    value="submit"
                    name="submit"
                    id="mc-embedded-subscribe"
                    style={{ background: "#000", border: "none" }}
                    onClick={this.setOpen}
                    disabled={
                      !this.state.fname ||
                      !this.state.email ||
                      !this.state.subject ||
                      !this.state.message
                    }
                  >
                    {this.state.fname === "" ||
                    this.state.email === "" ||
                    this.state.subject === "" ||
                    this.state.message === ""
                      ? "Please fill the form"
                      : "Submit"}
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="thumbnail mb_md--30 mb_sm--30">
                <img src="/assets/images/about/about-6.jpg" alt="trydo" />
              </div>
            </div>
          </div>
        </div>

        <Snackbar
          open={this.state.alert.open}
          message={this.state.alert.message}
          ContentProps={{
            style: { backgroundColor: this.state.alert.backgroundColor },
          }}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={() =>
            this.setState(() => ({
              alert: { ...alert, open: false },
            }))
          }
          autoHideDuration={3000}
        />
      </div>
    );
  }
}

// into Contact
export default ContactTwo;
