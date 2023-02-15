import React from "react";
import "./Navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="wrapper">
          <div className="search">
            <input type="text" placeholder="Search...." />
            <SearchOutlinedIcon className="searchIcon" />
          </div>
          <div className="items">
            <div className="item">
              <div className="profile">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/000/420/553/original/avatar-icon-vector-illustration.jpg"
                  alt=""
                  className="avatar"
                />
                Profile
                <KeyboardArrowDownOutlinedIcon className="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
