import React, { Component } from "react";
import logo from "../assets/images/Logo 2.png";
import app from "./firebaseConfig";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const auth = getAuth(app);

class OTP_Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobilenum: "",
      otp: "",
    };
    this.onSignInSubmit = this.onSignInSubmit.bind(this);
    this.verifyCode = this.verifyCode.bind(this);
    this.onCaptchVerify = this.onCaptchVerify.bind(this);
  }
  async componentDidMount() {
    const res = await fetch("/otp_Confirm", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);
    const datanum = data.mobilenum;
    this.setState({ mobilenum: datanum });
    this.onSignInSubmit();
    if (!res.status === 200) {
      const error = new Error(res.error);
      throw error;
    }
  }

  onCaptchVerify() {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
      },
      auth
    );
  }
  onSignInSubmit() {
    this.onCaptchVerify();
    const phoneNumber = "+91" + this.state.mobilenum;
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        toast.info("OTP!  OTP Has Send To Your Registered Mobile Number");

        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        toast.error("Unsuccess!  Please resend again in 2 min");

        console.log(error);
        alert("error");
        // ...
      });
  }
  resendOnClick() {
    const phoneNumber = "+91" + this.state.mobilenum;
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        toast.info("OTP!  OTP Has Send To Your Registered Mobile Number");

        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        toast.error("Unsuccess!  Please resend again in 2 min");

        console.log(error);
        alert("error");
        // ...
      });
  }
  verifyCode() {
    const code = this.state.otp;
    if (code != 0) {
      window.confirmationResult
        .confirm(code)
        .then((result) => {
          // User signed in successfully.
          toast.success("Success!  Registration Successfull");
          window.location.href = "./Userdashboard";
          const user = result.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          console.log(error);
          // User couldn't sign in (bad verification code?)
          // ...
        });
    } else {
      toast.warn("Warning!  Please fill the Fields");
    }
  }
  render() {
    return (
      <div>
        <div className="header" id="OTP">
          <nav>
            <a href="index.html">
              <img src={logo} />
            </a>
            <a href="index.html" className="Company">
              Online Voting System
            </a>
            <div className="alertPopup">
              <div className="alert" id="A1">
                <strong>Unsuccess!</strong> Incorrect OTP.
              </div>
              <div className="alert warning" id="A4">
                <strong>Warning!</strong> Please fill the Fields.
              </div>
            </div>
          </nav>
        </div>
        <div className="Home" id="OTP_P">
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <div id="recaptcha-container"></div>
          <div className="signin-signup">
            <form method="GET" action="#" className="sign-in-form">
              <i className="fa-solid fa-circle-user" />
              <h2 className="title">Mobile Verification</h2>
              <div className="mobile">
                <p>
                  The OTP is sent to this number{" "}
                  <input
                    id="mobile_num"
                    defaultValue={this.state.mobilenum}
                    readOnly
                  />{" "}
                  . <br />
                  Please don't share OTP with anyone.
                </p>
              </div>
              <div className="Input_Refresh">
                <div className=" input-field">
                  <i className="fas fa-lock" />
                  <input
                    type="number"
                    id="OTP"
                    placeholder="  Enter OTP"
                    onChange={(e) => this.setState({ otp: e.target.value })}
                  />
                </div>
                <button id="Resend" onClick={this.resendOnClick}>
                  <i className="fa-solid fa-rotate-right" />
                </button>
              </div>
              <div className="timer">
                <p>Resend</p> <span id="timer" />
              </div>
              <input
                type="button"
                id="Submit"
                className="btn solid"
                defaultValue="Submit"
                onClick={this.verifyCode}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default OTP_Confirmation;
