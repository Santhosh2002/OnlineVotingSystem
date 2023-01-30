import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { PopupMenu } from "react-simple-widgets";
const Topbar = (props) => {
  const [userData, setUserData] = useState("");
  const [Name_Letter, setLetter] = useState("");
  const profile_Data = async () => {
    const res = await fetch("/otp_Confirm", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    setUserData(data);
    let letter = data.firstname.charAt(0).toUpperCase();
    setLetter(letter);
    // console.log(data);
  };
  useEffect(() => {
    profile_Data();
  }, []);
  return (
    <div className="topbar">
      {/* TOGGLE BUTTON STARTS*/}
      <div className="toggle">
        <i className="bx bx-menu" />
        <div className="dashboard">{props.PageNam}</div>
      </div>
      <div className="profile">
        <PopupMenu>
          <button className="user">
            <div id="circle-avatar-profile">
              <span>{Name_Letter}</span>
            </div>{" "}
            <p>Profile</p>
            <i className="bx bx-chevron-down" />
          </button>

          <div className="card-profile ">
            <div className="card-body px-4 py-4">
              <div className="profile-main">
                <div id="circle-avatar">
                  <span>{Name_Letter}</span>
                </div>

                <h3>
                  {userData.firstname} {userData.lastname}
                </h3>
                <p className="text-center ">{userData.mobilenum}</p>
              </div>
              <hr />

              <p
                className="mb-0"
                style={{ color: "#bebebe", fontWeight: "bold", fontSize: 14 }}
              >
                Details
              </p>

              <div className="details-list">
                <ul className="list">
                  <li className="list-items">
                    <h5>Aadhar Number</h5> {userData.aadharnum}
                  </li>
                  <li className="list-items">
                    <h5>Voter Id</h5> {userData.voterid}
                  </li>

                  <li className="list-items">
                    <h5>Date of Birth</h5> {userData.dob}
                  </li>
                  <li className="list-items">
                    <h5>Mobile Number</h5> {userData.mobilenum}
                  </li>
                  <li className="list-items">
                    <h5>Address</h5> {userData.address}
                  </li>
                </ul>
              </div>
              <div className="logoutbtn">
                <button className="logout">Logout</button>
              </div>

              {/* <div className="d-grid">
                <button className="btn btn-secondary">
                  <small>Logout</small>
                </button>
              </div> */}
            </div>
          </div>
        </PopupMenu>
      </div>
    </div>
  );
};

export default Topbar;
