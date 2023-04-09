import React, { useState, useEffect, useContext } from "react";
import { PopupMenu } from "react-simple-widgets";
import { VoteContext } from "../../context/VoteContext";
import "./Profile.scss";
const Profile = (props) => {
  const [adminData, setAdminData] = useState("");
  const [NameLetter, setLetter] = useState();
  const { currentAccount, connectWallet } = useContext(VoteContext);
  const adminprofileData = async () => {
    const res = await fetch("/adminauth", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    setAdminData(data);

    let letter = adminData.name.charAt(0).toUpperCase();
    setLetter(letter);
  };
  useEffect(() => {
    adminprofileData();
  }, []);
  return (
    <div className="profile">
      <PopupMenu>
        <button className="profile">
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/420/553/original/avatar-icon-vector-illustration.jpg"
            alt=""
            className="avatar"
          />
          Profile
        </button>

        <div className="card-profile ">
          <div className="card-body px-4 py-4" style={props}>
            <div className="main">
              <div id="circle">
                <span>{NameLetter}</span>
              </div>

              <h3>{adminData.name}</h3>
              <p className="text-center ">System Admin</p>
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
                  <h5>Employee Id</h5> {adminData.employeeid}
                </li>
                <li className="list-items">
                  <h5>Date of Birth</h5> {adminData.dob}
                </li>
                <li className="list-items">
                  <h5>Mobile Number</h5> {adminData.mobilenumber}
                </li>
                <li className="list-items">
                  <h5>Email</h5> {adminData.username}
                </li>
                <li className="list-items">
                  <h5>Address</h5> {adminData.address}
                </li>
              </ul>
            </div>
            <div className="connectbtn">
              <button className="connect" onClick={connectWallet}>
                Connect
              </button>
            </div>
          </div>
        </div>
      </PopupMenu>
    </div>
  );
};

export default Profile;
