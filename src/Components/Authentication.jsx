import React, { Component } from 'react';

class Authentication extends Component {
    state = {  } 
    render() { 
        return (
        <div className="main" id="Auth" style={{display: 'none'}}>
        <Topbar PageNam = "Authuntication" />
        {/* FORMS STARTS */}
        <div className="Home">
          <div className="text-box">
            <div className="alertPopup">
              <div className="alert" id="A1">
                <strong>Unsuccess!</strong> Invalid Voter number.
              </div>
              <div className="alert success" id="A2">
                <strong>Success!</strong> Your Voter is validated
              </div>
              <div className="alert info" id="A3">
                <strong>Captcha!</strong> Incorrect CAPTCHA.
              </div>
              <div className="alert warning" id="A4">
                <strong>Warning!</strong> Please fill the Fields.
              </div>
            </div>
            <div className="signin-signup">
              <form action="#" className="sign-in-form">
                <i className="bx bxs-id-card" />
                <h2 className="title"> Voter Verfication</h2>
                <div className="input-field">
                  <i className="bx bxs-user" />
                  <input type="number" id="Voter" placeholder="Voter ID" />
                </div>
                <div className="input-field">
                  <i className="bx bxs-lock-alt" />
                  <input type="captha" id="Captcha" placeholder="CAPTCHA" />
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
        );
    }
}
 
export default Authentication;