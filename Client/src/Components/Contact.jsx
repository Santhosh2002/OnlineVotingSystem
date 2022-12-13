import React, { Component } from "react";

class Contact extends Component {
  render() {
    function year() {
      document.write(new Date().getFullYear());
    }
    return (
      <div className="contact" id="contact">
        <div className="content">
          <h1 id="head">Contact Us</h1>
          <h2>Feel Free to Contact</h2>
          <p>
            Hello Everyone! Have a great day :) I am here to help you.
            <br />
            If you want to know something or you have any suggestions feel free
            to contact us.
          </p>
        </div>
        <div className="container_contact">
          <div className="contactForm">
            <form>
              <h2>SEND MESSAGE</h2>
              <div className="inputbox">
                <input
                  placeholder="Full Name"
                  type="text"
                  name
                  required="required"
                />
              </div>
              <div className="inputbox">
                <input
                  placeholder="Email"
                  type="text"
                  name
                  required="required"
                />
              </div>
              <div className="inputbox">
                <textarea
                  placeholder="Message"
                  type="text"
                  name
                  required="required"
                  defaultValue={""}
                />
              </div>
              <div className="inputbox">
                <input id="button" type="submit" name defaultValue="Send" />
              </div>
            </form>
          </div>
        </div>
        <div className="contactInfo">
          <div className="box" id="b1">
            <div className="icon">
              <i className="fa fa-map-marker" aria-hidden="true" />
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>
                Indian Institute of Information Technology, Vadodara
                <br />
                Gandhinagar, Gujarat,
                <br />
                382028
              </p>
            </div>
          </div>
          <div className="box" id="b2">
            <div className="icon">
              <i className="fa fa-phone" aria-hidden="true" />
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>+91-9998880000</p>
            </div>
          </div>
          <div className="box" id="b3">
            <div className="icon">
              <i className="fa fa-envelope-o" aria-hidden="true" />
            </div>
            <div className="text">
              <h3>Email</h3>
              <a href="https://www.youtube.com">e-voting@digitalindia.com</a>
            </div>
          </div>
        </div>
        <div className="coyrights">
          <p> Thank You © Copyrights</p>
          {year}, All Rights Reserved.
          <p />
          <i className="fa-brands fa-facebook" />
          <i className="fa-brands fa-instagram" />
          <i className="fa-brands fa-twitter" />
          <i className="fa-brands fa-linkedin" />
        </div>
      </div>
    );
  }
}

export default Contact;
