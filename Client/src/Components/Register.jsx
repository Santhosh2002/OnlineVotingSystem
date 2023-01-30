import logo from "../assets/images/Logo 2.png";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import MyImageCaptureComponent from "./CaptureImage";
import "react-toastify/dist/ReactToastify.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      aadharnum: "",
      voterid: "",
      dob: "",
      mobilenum: "",
      address: "",
    };
    this.doSubmit = this.doSubmit.bind(this);
  }

  doSubmit = async (e) => {
    e.preventDefault();

    // const navigate = useNavigate();
    const { firstname, lastname, aadharnum, voterid, dob, mobilenum, address } =
      this.state;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        aadharnum,
        voterid,
        dob,
        mobilenum,
        address,
      }),
    });

    if (res.status === 421) {
      toast.warn("Warning!  Please fill the Fields");
    } else {
      if (res.status === 201) {
        toast.success("Success!  Registration Successfull");
        window.location.href = "./Login";

        // navigate("/ElectionList");
      } else if (res.status === 422) {
        toast.error("Unsuccess!  User Already Exists");
      } else {
        toast.info("Captcha!  Invalid Captcha");
      }
    }
  };
  render() {
    return (
      <>
        <div className="header" id="Register">
          <nav>
            <Link to="/Home">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
            <Link to="/Home" className="Company">
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
        <div className="Home" id="Register_P">
          <div className="signin-signup">
            <form method="POST" action="#" className="sign-in-form">
              {/* <MyImageCaptureComponent></MyImageCaptureComponent> */}
              <i className="fa-solid fa-circle-user" id="user_icon" />
              <h2 className="title">Voter Registration</h2>
              <div className="form-inputs">
                <div className="input-field I1">
                  <i className="fas fa-user" />
                  <input
                    type="text"
                    name="firstname"
                    id="F_name"
                    placeholder="First Name"
                    autoComplete="off"
                    onChange={(e) =>
                      this.setState({ firstname: e.target.value })
                    }
                  />
                </div>
                <div className="input-field I2">
                  <i className="fas fa-user" />
                  <input
                    type="text"
                    name="lastname"
                    id="L_name"
                    placeholder="Last Name"
                    autoComplete="off"
                    onChange={(e) =>
                      this.setState({ lastname: e.target.value })
                    }
                  />
                </div>
                <div className="input-field I4">
                  <i class="fa-regular fa-id-card"></i>
                  <input
                    type="number"
                    name="aadharnum"
                    id="Aadhar"
                    placeholder="Aadhar Number"
                    autoComplete="off"
                    onChange={(e) =>
                      this.setState({ aadharnum: e.target.value })
                    }
                  />
                </div>
                <div className="input-field I4">
                  <i class="fa-regular fa-id-badge"></i>
                  <input
                    type="text"
                    name="voterid"
                    id="Voter"
                    placeholder="Voter ID"
                    autoComplete="off"
                    onChange={(e) => this.setState({ voterid: e.target.value })}
                  />
                </div>
                <div className="input-field I3">
                  <i className="fa-regular fa-calendar-days"></i>
                  <input
                    type="date"
                    name="dob"
                    id="DateOfBirth"
                    placeholder="Date of Birth"
                    autoComplete="off"
                    onChange={(e) => this.setState({ dob: e.target.value })}
                  />
                </div>
                <div className="input-field I5">
                  <i class="fa fa-mobile"></i>
                  <input
                    type="number"
                    name="mobilenum"
                    id="Mobile"
                    placeholder="Mobile Number"
                    autoComplete="off"
                    onChange={(e) =>
                      this.setState({ mobilenum: e.target.value })
                    }
                  />
                </div>
                <div className="input-field I6">
                  <i class="fa-regular fa-address-book"></i>
                  <textarea
                    type="text"
                    name="address"
                    id="Address"
                    placeholder="Address"
                    autoComplete="off"
                    onChange={(e) => this.setState({ address: e.target.value })}
                  />
                </div>
                <input type="button" id="imagebtn" defaultValue="Capture" />
              </div>
              <input
                type="button"
                id="register"
                className="btn solid"
                defaultValue="Register"
                onClick={this.doSubmit}
              />
              <p>
                Already Registered ? Click Here to{" "}
                <Link to="/Login" className="Login_link">
                  Login
                </Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default Register;
