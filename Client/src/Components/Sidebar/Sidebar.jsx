import React from "react";
import "./Sidebar.scss";
import logo from "../../assets/images/Logo 2.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PollIcon from "@mui/icons-material/Poll";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import { Link } from "react-router-dom";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PreviewIcon from "@mui/icons-material/Preview";
const Sidebar = () => {
  return (
    <>
      <div className="sideBar">
        <div className="top">
          <span className="logo">
            <img src={logo} alt="logo"></img>
          </span>
          <span className="title">Online Voting System</span>
        </div>
        <hr />
        <div className="center">
          <ul>
            <Link
              to="/users"
              style={{ color: "black", textDecoration: "none" }}
            >
              <li>
                <DashboardIcon className="icon" />
                <span>Dashboard</span>
              </li>
            </Link>
            <Link
              to="/users"
              style={{ color: "black", textDecoration: "none" }}
            >
              <li>
                <HowToRegIcon className="icon" />
                <span>Voter's List</span>
              </li>
            </Link>
            <p className="title">Manage Candidates</p>
            <Link
              to="/users"
              style={{ color: "black", textDecoration: "none" }}
            >
              <li>
                <PersonAddIcon className="icon" />
                <span>Add Candidates</span>
              </li>
            </Link>
            <Link
              to="/users"
              style={{ color: "black", textDecoration: "none" }}
            >
              <li>
                <ManageAccountsIcon className="icon" />
                <span>View/Edit Candidates</span>
              </li>
            </Link>
            <p className="title">Manage Polling</p>
            <Link
              to="/users"
              style={{ color: "black", textDecoration: "none" }}
            >
              <li>
                <HowToVoteIcon className="icon" />
                <span>Start Polling</span>
              </li>
            </Link>
            <Link
              to="/users"
              style={{ color: "black", textDecoration: "none" }}
            >
              <li>
                <PreviewIcon className="icon" />
                <span>Monitor Polling</span>
              </li>
            </Link>
            <Link
              to="/users"
              style={{ color: "black", textDecoration: "none" }}
            >
              <li>
                <PollIcon className="icon" />
                <span>Results</span>
              </li>
            </Link>
            <Link
              to="/users"
              style={{ color: "black", textDecoration: "none" }}
            >
              <li>
                <LogoutIcon className="icon" />
                <span>Logout</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
