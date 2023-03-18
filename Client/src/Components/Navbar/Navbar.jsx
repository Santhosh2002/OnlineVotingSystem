import React from "react";
import "./Navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import Profile from "./Profile";
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
              <Profile></Profile>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
