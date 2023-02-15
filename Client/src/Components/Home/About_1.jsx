import React, { Component } from "react";
import Image from "../../assets/images/male.png";
import Image2 from "../../assets/images/female.png";
class About_1 extends Component {
  render() {
    var names = ["Santhosh", "Gaurav", "Lingareddy"];
    var names2 = ["Deepanjana", "Indraneela"];
    var nameCard = names.map(function (name) {
      return (
        <div className="card ">
          <div className="imgBox">
            <img src={Image} alt="Developers" />
            <h2>{name}</h2>
          </div>
          <div className="content_c">
            <h2>{name}</h2>
            <p>
              Group Member <br /> ------------------
            </p>
          </div>
        </div>
      );
    });
    var nameCard2 = names2.map(function (name) {
      return (
        <div className="card ">
          <div className="imgBox">
            <img src={Image2} alt="Developers" />
            <h2>{name}</h2>
          </div>
          <div className="content_c">
            <h2>{name}</h2>
            <p>
              Group Member <br /> ------------------
            </p>
          </div>
        </div>
      );
    });
    return (
      <div className="About" id="aboutMain">
        <div className="content_a">
          <h1 id="head_a">About Us</h1>
          <h2>Our team</h2>
        </div>
        <div className="ourteam">{nameCard}</div>
        <div className="ourteam">{nameCard2}</div>
      </div>
    );
  }
}
export default About_1;
