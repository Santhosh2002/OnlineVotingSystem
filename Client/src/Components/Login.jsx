import logo from "../assets/images/Logo 2.png";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, Component } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OTP_Confirmation from "./OTP_Confirmation";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aadharnum: "",
      mobilenum: "",
    };
    this.Login_fun = this.Login_fun.bind(this);
  }
  componentDidMount = () => {
    loadCaptchaEnginge(6);
  };

  Login_fun = async (e) => {
    e.preventDefault();
    let user_captcha = document.getElementById("Captcha").value;

    const { aadharnum, mobilenum } = this.state;

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        aadharnum,
        mobilenum,
      }),
    });
    // const data = await res.json();
    // console.log(data);
    if (res.status === 421) {
      toast.warn("Warning!  Please fill the Fields");
    } else {
      if (res.status === 201 && validateCaptcha(user_captcha) === true) {
        // new OTP_Confirmation().onSignInSubmit();

        toast.success("Success!  Authentication Successfull");
        window.location.href = "./OTP_Confirm";
        loadCaptchaEnginge(6);
        document.getElementById("Captcha1").value = "";

        // navigate("/ElectionList");
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
              </ul>
            </div>
            <i className="fa-solid fa-bars" onclick={["showMenu"]} />
          </nav>
        </div>
        <div className="Home" id="Login_P">
          <div className="signin-signup">
            <form method="POST" action="#" className="sign-in-form">
              <i className="fa-solid fa-circle-user" />
              <h2 className="title">Voter Login</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input
                  type="number"
                  name="aadharnum"
                  id="Aadhar"
                  placeholder="Aadhar Number"
                  autoComplete="off"
                  onChange={(e) => this.setState({ aadharnum: e.target.value })}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-user" />
                <input
                  type="number"
                  name="mobilenum"
                  id="Mobile"
                  placeholder="Mobile Number"
                  autoComplete="off"
                  onChange={(e) => this.setState({ mobilenum: e.target.value })}
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
              <p>
                New User? Click Here to{" "}
                <Link to="/Register" className="Login_link">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
