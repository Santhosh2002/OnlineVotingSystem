import logo from "../../assets/images/Logo 2.png";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../assets/CSS/login.css";

class VoterID extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_number: "",
    };
    this.Login_fun = this.Login_fun.bind(this);
  }
  componentDidMount = () => {
    loadCaptchaEnginge(6);
  };

  Login_fun = async (e) => {
    e.preventDefault();
    let user_captcha = document.getElementById("Captcha").value;

    const { voterid } = this.state;

    const res = await fetch("voteridlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        voterid,
      }),
    });
    // const data = await res.json();
    // console.log(data);
    if (res.status === 421) {
      toast.warn("Warning!  Please fill the Fields");
    } else if (res.status === 422) {
      toast.error("Unsuccess!  Invalid AadharNumber");
    } else if (res.status === 423) {
      toast.error("Unsuccess!  Invalid Mobile Number");
    } else {
      if (res.status === 201 && validateCaptcha(user_captcha) === true) {
        // new OTP_Confirmation().onSignInSubmit();

        toast.success("Success!  Authentication Successfull");
        window.location.href = "./VoterID_OTP";
        loadCaptchaEnginge(6);
        document.getElementById("Captcha1").value = "";
      } else if (res.status === 202) {
        toast.error("Unsuccess!  Authentication Failed");
      } else {
        toast.warn("Captcha!  Invalid Captcha");
        document.getElementById("Captcha1").value = "";
      }
    }
  };
  render() {
    return (
      <>
        <div className="header" id="Login">
          <nav>
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
            <Link to="/" className="Company">
              Online Voting System
            </Link>
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
            <div className="nav-links" id="navLinks">
              <i
                className="fa-solid fa-rectangle-xmark"
                onClick={["hideMenu"]}
              />
              <ul>
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/AdminLogin">ADMIN LOGIN</Link>
                </li>
                <li>
                  <Link to="/Login">AADHAR NUMBER LOGIN</Link>
                </li>
              </ul>
            </div>
            <i className="fa-solid fa-bars" onclick={["showMenu"]} />
          </nav>
        </div>
        <div className="Home" id="Login_P">
          <div className="signin-signup">
            <form method="POST" action="#" className="sign-in-form">
              <i className="fa-solid fa-circle-user" />
              <h2 className="title">VOTER ID Login</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input
                  type="text"
                  name="aadharnum"
                  id="Aadhar"
                  placeholder="Voter ID"
                  autoComplete="off"
                  onChange={(e) => this.setState({ voterid: e.target.value })}
                />
              </div>

              <div className=" input-field">
                <i className="fas fa-lock" />
                <input type="text" id="Captcha" placeholder="Enter CAPTCHA" />
              </div>
              <div className="captcha-box">
                <LoadCanvasTemplate reloadColor="cadetblue" />
                <input
                  type="button"
                  id="gen_otp"
                  onClick={this.Login_fun}
                  className="btn solid"
                  defaultValue="Generate OTP"
                />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default VoterID;
