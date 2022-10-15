import React, { Component } from 'react';

function topbar(props) {
    return (
        
            <div className="topbar">
              {/* TOGGLE BUTTON STARTS*/}
              <div className="toggle">
                <i className="bx bx-menu" />
                <div className="dashboard">{props.PageNam}</div>
              </div>
              {/* TOGGLE BUTTON ENDS */}
              {/* PTOFILE STARTS */}
              <div className="user">
                <img src="profile.jpg" alt="" className />
                <span className="profile_name">Profile</span>
                <i className="bx bx-chevron-down" />
              </div>
              {/* PROFILE ENDS */}
            </div>
    );
}

export default topbar;