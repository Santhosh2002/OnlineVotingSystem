import React, { Component } from "react";

const Dashboard_fun = () => {
  let toggle = document.querySelector(".toggle");
  let navigation = document.querySelector(".navigation");
  let list = document.querySelectorAll(".navigation li");
  let main = document.querySelector(".main");

  toggle.onclick = function () {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
  };

  function activeLink() {
    list.forEach((item) => item.classList.remove("hovered"));
    this.classList.add("hovered");
  }
  list.forEach((item) => item.addEventListener("mouseover", activeLink));

  //  POPUP
};
function popup_toggle() {
  var blur = document.getElementById("blur");
  blur.classList.toggle("popup_active");
  var popup = document.getElementById("popup");
  popup.classList.toggle("popup_active");
  var overlay = document.getElementById("overlay");
  overlay.classList.toggle("popup_active");
}
function popup_text_toggle() {}
function openTab(tabName) {
  var i;
  var x = document.getElementsByClassName("main");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

function topbar(props) {
  return (
    <div className="topbar" onLoad={Dashboard_fun}>
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
