import React, { Component } from 'react';

import logo from '../assets/images/Logo 2.png';


class Login extends Component {
    render() { 
      return (
        <>
        
          <div className="header">
            <nav>
              <a href="#first"><img src={logo} className="App-logo" alt="logo" /></a>
              <a href="index.html" className="Company">Online Voting System</a>
              <div className="alertPopup">
                <div className="alert" id="A1">
                  <strong>Unsuccess!</strong> Invalid Aadhar number.
                </div>
                <div className="alert success" id="A2">
                  <strong>Success!</strong> Your Aadhar is validated
                </div>
                <div className="alert info" id="A3">
                  <strong>Captcha!</strong> Incorrect CAPTCHA.
                </div>
                <div className="alert warning" id="A4">
                  <strong>Warning!</strong> Please fill the Fields.
                </div>
              </div>
              <div className="nav-links" id="navLinks">
                <i className="fa-solid fa-rectangle-xmark" onClick={['hideMenu']} />
                <ul>
                  <li><a href="index.html">HOME</a></li>
                  <li><a href="Admin_Login.html">ADMIN LOGIN</a></li>
                </ul>
              </div>
              <i className="fa-solid fa-bars" onclick={['showMenu']} />
            </nav>
          </div>
          <div className="Home">
            <div className="text-box">
              <div className="signin-signup">
                <form action="#" className="sign-in-form">
                  <i className="fa-solid fa-circle-user" />
                  <h2 className="title">Voter</h2>
                  <div className="input-field">
                    <i className="fas fa-user" />
                    <input type="number" id="Aadhar" placeholder="Aadhar Number" />
                  </div>
                  <div className=" input-field">
                    <i className="fas fa-lock" />
                    <input type="text" id="Captcha" placeholder="Enter CAPTCHA" />
                  </div>
                  <div className="captcha-box">
                    <canvas id="myCanvas"> </canvas>
                    <input type="button" id="refresh" className="btn solid" defaultValue="Refresh" />
                  </div>
                  <input type="button" id="gen_otp" onClick={['login']} className="btn solid" defaultValue="Generate OTP" />
                </form>
              </div>
            </div>
          </div>
        
        </>
      );
    }
}
 
export default Login;