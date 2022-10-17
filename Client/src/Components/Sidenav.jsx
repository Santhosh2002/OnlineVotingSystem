import React, { Component } from 'react';

class SideNav extends Component {
    state = {  } 
    render() { 
        return (
        <div className="navigation">
        <ul>
          <li>
            <a href="#">
              <img src="Plugin icon - 1.png" alt="" />
              <span className="Title">Online Voting System</span>
            </a>
          </li>
          <li>
            <a href="#" onclick="openTab('blur2');">
              <i className="bx bx-grid-alt" />
              <span className="Title">Dashborad</span>
            </a>
          </li>
          <li>
            <a href="#" onclick="openTab('Auth');">
              <i className="bx bx-id-card" />
              <span className="Title">Authentication</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-list-ul" />
              <span className="Title">Election List</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-trophy" />
              <span className="Title">Nomines List</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-trophy" />
              <span className="Title">Polling</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-trophy" />
              <span className="Title">Results</span>
            </a>
          </li>
          <li>
            <a href="login.html">
              <i className="bx bx-log-out" />
              <span className="Title">Logout</span>
            </a>
          </li>
        </ul>
        </div>
        );
    }
}
 
export default SideNav;