import React, { Component } from 'react';

class Login extends Component {
    render() { 
        return (
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
          <input type="button" id="gen_otp" className="btn solid" defaultValue="Generate OTP" />
        </form>
      </div>
        );
    }
}
 
export default Login;