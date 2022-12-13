import Topbar from "./Top_bar";
import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voterid: "",
      mobile: "",
    };
    this.doSubmit = this.doSubmit.bind(this);
    // const { navigation } = this.props;
  }
  componentDidMount = () => {
    loadCaptchaEnginge(6);
  };
  doSubmit = async (e) => {
    let user_captcha = document.getElementById("Captcha1").value;
    // const navigate = useNavigate();
    const { voterid, mobile } = this.state;
    const res = await fetch("/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        voterid,
        mobile,
      }),
    });

    if (res.status === 421) {
      toast.warn("Warning!  Please fill the Fields");
    } else {
      if (res.status === 201 && validateCaptcha(user_captcha) === true) {
        toast.success("Success!  Authentication Successfull");
        loadCaptchaEnginge(6);
        document.getElementById("Captcha1").value = "";
        window.location.href = "./ElectionList";
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
        <div className="main" id="Auth">
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
            <div className="text-box">
              <div className="signin-signup">
                <form method="POST" action="#" className="sign-in-form">
                  <i className="bx bxs-id-card" />
                  <h2 className="title"> Voter Verfication</h2>
                  <div className="input-field">
                    <i className="bx bxs-user" />
                    <input
                      type="string"
                      id="Voter"
                      placeholder="Voter ID"
                      onChange={(e) =>
                        this.setState({ voterid: e.target.value })
                      }
                    />
                  </div>
                  <div className="input-field">
                    <i className="bx bxs-user" />
                    <input
                      type="string"
                      id="Mobile"
                      placeholder="Mobile Number"
                      onChange={(e) =>
                        this.setState({ mobile: e.target.value })
                      }
                    />
                  </div>
                  <div className="input-field">
                    <i className="bx bxs-lock-alt" />
                    <input
                      type="text"
                      id="Captcha1"
                      placeholder=" Enter CAPTCHA"
                    />
                  </div>

                  <div className="captcha-box">
                    <LoadCanvasTemplate reloadColor="cadetblue" />
                  </div>

                  <input
                    type="button"
                    id="Login"
                    className="btn solid"
                    onClick={() => this.doSubmit()}
                    defaultValue="Verify"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Authentication;
