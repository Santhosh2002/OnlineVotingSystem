import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';

class SideNav extends Component {
    state = {  } 
    render() { 
        return (
        <div className="navigation">
        <ul>
          <li>
            <Link to ='/UserDashboard'>
              <img src="Plugin icon - 1.png" alt="" />
              <span className="Title">Online Voting System</span>
            </Link>
          </li>
          <li>
            <Link to ='/UserDashboard'>
              <i className="bx bx-grid-alt" />
              <span className="Title">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to ='/Authentication'>
              <i className="bx bx-id-card" />
              <span className="Title">Authentication</span>
            </Link>
          </li>
          <li>
            <Link to ='/ElectionList'>
              <i className="bx bx-list-ul" />
              <span className="Title">Election List</span>
            </Link>
          </li>
          <li>
            <Link to ='/CandidateList'>
              <i className="bx bx-trophy" />
              <span className="Title">Nomines List</span>
            </Link>
          </li>
          <li>
            <Link to ='/Polling'>
              <i className="bx bx-trophy" />
              <span className="Title">Polling</span>
            </Link>
          </li>
          <li>
            <Link to ='/Polling'>
              <i className="bx bx-trophy" />
              <span className="Title">Results</span>
            </Link>
          </li>
          <li>
            <Link to ='/Login'>
              <i className="bx bx-log-out" />
              <span className="Title">Logout</span>
            </Link>
          </li>
        </ul>
        </div>
        );
    }
}
 
export default SideNav;