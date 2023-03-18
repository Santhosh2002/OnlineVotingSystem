import React from "react";
import { PopupMenu } from "react-simple-widgets";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import "./Profile.scss";
const Profile = () => {
  const Name_Letter = "J";
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
          <div className="card-body px-4 py-4">
            <div className="main">
              <div id="circle">
                <span>{Name_Letter}</span>
              </div>

              <h3>John Doe</h3>
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
                  <h5>Employee Id</h5> OVS5742165
                </li>
                <li className="list-items">
                  <h5>Date of Birth</h5> 10-23-1970
                </li>
                <li className="list-items">
                  <h5>Mobile Number</h5> 9876543210
                </li>
                <li className="list-items">
                  <h5>Email</h5> admin@DigitialIndia.gov.in
                </li>
                <li className="list-items">
                  <h5>Address</h5> ABCD
                </li>
              </ul>
            </div>
            <div className="connectbtn">
              <button className="connect">Connect</button>
            </div>
          </div>
        </div>
      </PopupMenu>
    </div>
  );
};

export default Profile;
