import React, { Component } from "react";
import "../../assets/CSS/index.css";
class Home extends Component {
  render() {
    return (
      <div className="Home_main" id="homeMain">
        <div className="text-box">
          <h1>Digital India's New Voting System </h1>
          <p>
            An Online Voting System to digitalize the Voting process while using
            the latest technology <br />
            to make the process more Secure, Transperant, Immutable and Reliable
            <br />
            in order to deliver an effective scheme for electronic Voting
          </p>
          <a href className="hero-btn">
            Visit Us To know More
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
