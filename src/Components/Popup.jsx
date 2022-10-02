import React, { Component } from 'react';

class Popup extends Component {
    render() { 
        return (
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
        );
    }
}
 
export default Popup;