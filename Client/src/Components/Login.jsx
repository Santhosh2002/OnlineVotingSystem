import logo from '../assets/images/Logo 2.png';
import Popup from './Popup';
import { Link , useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Captcha from './Captcha';
const Login = () => {
  let popupIn = document.getElementById("A1");
    let popupInv = document.getElementById("A4");
    let popupWar = document.getElementById("A3");
  const navigate = useNavigate();
    const [user, setUser] = useState({
      aadharnum: "",
      mobilenum: ""
    });
    
    let name, value;
    const handleInputs = (e) => {
      console.log(e);
      name = e.target.name;
      value = e.target.value;
      setUser({...user, [name]:value })
    }
    
  const Login_fun = async (e) => {
    e.preventDefault();
       
    const { aadharnum,mobilenum } = user;
    
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        aadharnum,
        mobilenum
      })
    });
    const data = await res.json();

    if (data.status === 422) {
      popupInv.classList.add("open-Alert");
      setTimeout(() => {
            popupInv.classList.remove("open-Alert");
        },2000);
    } else {
      
    navigate("/OTP_Confirm");
    }

    }
      return (
        <>
          
          <div className="header" id='Login' onLoad={Captcha}>
            <nav>
              <a href="#first"><img src={logo} className="App-logo" alt="logo" /></a>
              <a href="index.html" className="Company">Online Voting System</a>
              <Popup type = 'Aadhar Number' />
              <div className="nav-links" id="navLinks">
                <i className="fa-solid fa-rectangle-xmark" onClick={['hideMenu']} />
                <ul>
                  <li><Link to ='/' >HOME</Link></li>
                  <li><Link to ='/AdminLogin'>ADMIN LOGIN</Link></li>
                </ul>
              </div>
              <i className="fa-solid fa-bars" onclick={['showMenu']} />
            </nav>
          </div>
          <div className="Home" id ="Login_P">
            
              <div className="signin-signup">
                <form method ="POST" action="#" className="sign-in-form">
                  <i className="fa-solid fa-circle-user" />
                  <h2 className="title">Voter</h2>
                  <div className="input-field">
                    <i className="fas fa-user" />
                  <input type="number" name ="aadharnum" id="Aadhar" placeholder="Aadhar Number" autoComplete='off' value={user.aadharnum} onChange={handleInputs} />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-user" />
                  <input type="number" name ="mobilenum" id="Mobile" placeholder="Mobile Number" autoComplete='off' value={user.mobilenum} onChange={handleInputs} />
                  </div>
                  <div className=" input-field">
                    <i className="fas fa-lock" />
                    <input type="text" id="Captcha" placeholder="Enter CAPTCHA" />
                  </div>
                  <div className="captcha-box">
                    <canvas id="myCanvas"> </canvas>
                    <input type="button" id="refresh" className="btn solid" defaultValue="Refresh" />
                  </div>
                  <input type="button" id="gen_otp" onClick={Login_fun} className="btn solid" defaultValue="Generate OTP" />
                </form>
              </div>
            </div>
        
        </>
      );
    }
 
export default Login;