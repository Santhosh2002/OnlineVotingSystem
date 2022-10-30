import React, { Component } from 'react';
import Topbar from './Top_bar';
import Popup from './Popup';
import Authenticate_Captcha from './Authenticate_Captcha';
const Authentication = () => {

  return (
    <>
    <div className="main" id="Auth" onLoad={Authenticate_Captcha}>
    {/* TOPBAR */}
    <Topbar PageNam = "Authentication" /> 
    {/* FORMS STARTS */}
    <div className="Home">
      <div className="text-box">
        <Popup type = 'Voter ID' />
        <div className="signin-signup">
          <form method ="POST" action="#" className="sign-in-form">
            <i className="bx bxs-id-card" />
            <h2 className="title"> Voter Verfication</h2>
            <div className="input-field">
              <i className="bx bxs-user" />
              <input type="number" id="Voter" placeholder="Voter ID" />
            </div>
            <div className="input-field">
              <i className="bx bxs-lock-alt" />
              <input type="text" id="Captcha" placeholder=" Enter CAPTCHA" />
            </div>
            {/* CAPTCHA BOX STARTS */}
            <div className="captcha-box">
              <canvas id="myCanvas"> </canvas>
              <input type="button" id="refresh" className="btn solid" defaultValue="Refresh" />
            </div>
            {/* CAPTCHA BOX ENDS */}
            <input type="button" id="Login" className="btn solid" defaultValue="Verify" />
          </form>
        </div>
      </div>
    </div>
    {/* FORM ENDS */}
      </div>
    </>
    );
}
 
export default Authentication;