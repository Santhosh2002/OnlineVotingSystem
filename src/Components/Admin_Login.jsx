import React, { Component } from 'react';

class Admin_Login extends Component {

    render() { 
        return (<div>
        <div className="header">
          <nav>
            <a href="index.html"><img src="Images/Logo 2.png" /></a>
            <a href="index.html" className="Company">Online Voting System</a>
            <Popup type = 'Voter Number' />
            <div className="nav-links" id="navLinks">
              <i className="fa-solid fa-rectangle-xmark" onclick="hideMenu()" />
              <ul>
                <li><a href="index.html">HOME</a></li>
                <li><a href="login.html">VOTER LOGIN</a></li>
              </ul>
            </div>
            <i className="fa-solid fa-bars" onclick="showMenu()" />
          </nav>
        </div>
        <div className="Home">
          <div className="text-box">
            <div className="signin-signup">
              <form action="#" className="sign-in-form">
                <i className="fa-solid fa-circle-user" />
                <h2 className="title">Admin</h2>  
                <div className="input-field">
                  <i className="fas fa-user" /> 
                  <input type="email" placeholder="Username" id="username" />
                </div>  
                <div className="input-field">
                  <i className="fas fa-lock" />
                  <input type="password" placeholder="Password" id="password" />
                </div>
                <input type="button" id="Login" className="btn solid" defaultValue="Login" />
              </form>
            </div>
          </div>
        </div>
      </div>);
    }
}
 
export default Admin_Login;