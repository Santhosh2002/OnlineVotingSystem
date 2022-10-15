import React, { Component } from 'react';
import logo from '../assets/images/Logo 2.png';
import { Link } from 'react-router-dom';
class Header extends Component {
     
  render() { 
       var navLinks = document.getElementById("navLinks");

        function showMenu() {
            navLinks.style.right = "0";
        }

        function hideMenu() {
            navLinks.style.right = "-200px";
        }
    
    return (<div className="header">
          
        <nav id="navbar">
          <Link to ='Home' ><img src={logo} className="App-logo" alt="logo" /></Link>
          <Link to ='Home' className="Company">Online Voting System</Link>
          <div className="nav-links" id="navLinks">
            <i className="fa-solid fa-rectangle-xmark" onClick={hideMenu} />
            <ul className="navbar-nav">
              {/* <li><Link class="nav-links scroll" href="#first">HOME</Link></li> */}
              <li><Link to ='Login' className="nav-links scroll" >LOGIN</Link></li>
              <li><Link to ='About' className="nav-links scroll" >ABOUT US</Link></li>
              <li><Link to ='Contact' className="nav-links scroll" >CONTACT</Link></li>
            </ul>
          </div>
          <i className="fa-solid fa-bars" onClick={showMenu}/>
        </nav>
      </div>);
    }
}
 
export default Header;