import React from 'react'
import "./Sidebar.scss";
import logo from "../../assets/images/Logo 2.png";
import DashboardIcon from '@mui/icons-material/Dashboard';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PollIcon from '@mui/icons-material/Poll';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
const Sidebar = () =>{
    return(
        <>
        <div className="sideBar">
            <div className="top">
                <span className="logo"><img src={logo} alt="logo"></img></span>
                <span className="title">Online Voting System</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <HowToRegIcon className="icon" />
                        <span>Voter's List</span>
                    </li>
                    <li>
                        <ManageAccountsIcon className="icon" />
                        <span>Manage Candidates</span>
                    </li>
                    <li>
                        <HowToVoteIcon className="icon" />
                        <span>Manage Polling</span>
                    </li>
                    <li>
                        <PollIcon className="icon" />
                        <span>Results</span>
                    </li>
                    <li>
                        <LogoutIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}
export default Sidebar;