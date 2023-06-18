import React, { Component, useContext } from "react";
import Topbar from "../Topbar/Top_bar";
import app from "../Login/firebaseConfig";
import { VoteContext } from "../../context/VoteContext";
import "../../assets/CSS/Authentication_OTP.css";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import App from "../../Pages/App";
import { ReqDataContextProvider } from "../../context/dataContext";
const auth = getAuth(app);
// const requestData = createContext();
class Authentication_OTP extends Component {
  static contextType = VoteContext;

  constructor(props) {
    super(props);
    this.state = {
      mobilenum: "",
      otp: "",
      minutes1: "",
      seconds1: "",
      btnState: "",
      data: "",
      Address: "",
    };
    this.onSignInSubmit = this.onSignInSubmit.bind(this);
    this.verifyCode = this.verifyCode.bind(this);
    this.onCaptchVerify = this.onCaptchVerify.bind(this);
    this.resendOnClick = this.resendOnClick.bind(this);
  }
  async componentDidMount() {
    const res = await fetch("/voter_otpConfirm", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    // const Response = await fetch("/RequestApi", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({}),
    // });
    const data = await res.json();
    console.log(data);
    const datanum = data.mobilenum;
    this.setState({ mobilenum: datanum });

    if (!res.status === 200) {
      const error = new Error(res.error);
      throw error;
    }

    this.onCaptchVerify();
    this.onSignInSubmit();

    this.setState({ btnState: 0 });
    this.setState({ minutes1: 1 });
    this.setState({ seconds1: 30 });

    const interal1 = setInterval(() => {
      if (this.state.seconds1 > 0) {
        this.setState({ seconds1: this.state.seconds1 - 1 });
      }
      if (this.state.seconds1 === 0) {
        if (this.state.minutes1 === 0) {
          clearInterval(interal1);
        } else {
          this.setState({ seconds1: 59 });
          this.setState({ minutes1: this.state.minutes1 - 1 });
        }
      }
    }, 1000);
    return () => {
      clearInterval(interal1);
    };
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
    if (code !== 0) {
      window.confirmationResult
        .confirm(code)
        .then((result) => {
          // User signed in successfully.
          toast.success("Success!  Authentication Successfull");
          // window.location.href = "./ElectionList";
          this.setState({ btnState: 1 });
          // const user = result.user;
          // console.log(user);
          // ...
        })
        .catch((error) => {
          console.log(error);
          // User couldn't sign in (bad verification code?)
          toast.info("Incorrect!  Invalid OTP");
        });
    } else {
      toast.warn("Warning!  Please fill the Fields");
    }
  }

  render() {
    const { connectWallet } = this.context;
    // this.setState({ Account: currentAccount });
    return (
      // <requestData.Provider value={{ reData, currentAccount }}>

      <div className="main" id="Auth_OTP">
        {/* <App val="currentAccount"></App> */}

        {/* <ReqDataContextProvider data="123456789"></ReqDataContextProvider> */}
        <Topbar PageNam="Authentication" />
        <div className="Home">
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
          <div className="text-box">
            <div className="signin-signup">
              <form method="GET" action="#" className="sign-in-form">
                <i className="bx bxs-id-card" />
                <h2 className="title">Mobile Verfication</h2>
                <div className="mobile">
                  <p>
                    The OTP is sent to this number{" "}
                    <input
                      id="mobile_num"
                      defaultValue={this.state.mobilenum}
                      readOnly
                    />
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
                  <button
                    disabled={
                      this.state.seconds1 > 0 || this.state.minutes1 > 0
                    }
                    style={{
                      opacity:
                        this.state.seconds1 > 0 || this.state.minutes1 > 0
                          ? 0.5
                          : 1,
                    }}
                    id="Resend"
                    onClick={this.resendOnClick}
                  >
                    <i className="fa-solid fa-rotate-right" />
                  </button>
                </div>
                <div className="timer">
                  <p>Resend</p>
                  {this.state.seconds1 > 0 || this.state.minutes1 > 0 ? (
                    <span id="timer">
                      {this.state.minutes1 < 10
                        ? `0${this.state.minutes1}`
                        : this.state.minutes1}
                      :
                      {this.state.seconds1 < 10
                        ? `0${this.state.seconds1}`
                        : this.state.seconds1}
                    </span>
                  ) : (
                    <span> Didnt receive otp</span>
                  )}
                </div>
                <button
                  id="Submit"
                  className="btn solid"
                  defaultValue="Submit"
                  onClick={this.verifyCode}
                >
                  Submit
                </button>
                <button
                  id="Submit"
                  disabled={this.state.btnState === 0}
                  style={{ opacity: this.state.btnState === 0 ? 0 : 1 }}
                  className="btn solid"
                  defaultValue="Connect"
                  onClick={[
                    connectWallet,
                    (e) => {
                      window.location.href = "./ElectionList";
                    },
                  ]}
                >
                  Connect
                </button>
                {/* <button
                  id="Submit"
                  disabled={this.state.btnState === 0}
                  style={{ opacity: this.state.btnState === 0 ? 0 : 1 }}
                  className="btn solid"
                  defaultValue="Get Right To Vote"
                  onClick={rightToVote}
                >
                  Right To Vote
                </button> */}
              </form>
            </div>
          </div>
        </div>
      </div>
      // </requestData.Provider>
    );
  }
}

export default Authentication_OTP;
// export { requestData };
