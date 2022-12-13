import React, { Component } from "react";
import logo from "../assets/images/Logo 2.png";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    var navLinks = document.getElementById("navLinks");

    function showMenu() {
      navLinks.style.right = "0";
    }

    function hideMenu() {
      navLinks.style.right = "-200px";
    }

    return (
      <div className="header" id="homeHeader">
        <nav id="navbar">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <Link to="/" className="Company">
            Online Voting System
          </Link>
          <div className="nav-links" id="navLinks">
            <i className="fa-solid fa-rectangle-xmark" onClick={hideMenu} />
            <ul className="navbar-nav">
              {/* <li><a class="nav-links scroll" href="#first">HOME</a></li> */}
              <li>
                <Link to="Login" className="nav-links scroll">
                  LOGIN
                </Link>
              </li>
              <li>
                <a className="nav-links scroll" href="#aboutMain">
                  ABOUT US
                </a>
              </li>
              <li>
                <a className="nav-links scroll" href="#contact">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
          <i className="fa-solid fa-bars" onClick={showMenu} />
        </nav>
      </div>
    );
  }
}

export default Header;
