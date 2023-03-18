import React from "react";
import "./AdminHome.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Widgets from "../../Components/Widgets/Widget";
import Featured from "../../Components/Featured/Featured";
import Chart from "../../Components/Chart/Chart";
const Home = () => {
  return (
    <div className="AdminHome">
      <Sidebar></Sidebar>
      <div className="HomeContainer">
        <Navbar> </Navbar>
        <div className="widgets">
          <Widgets type="Voters"></Widgets>
          <Widgets type="Candidates"></Widgets>
          <Widgets type="Total Votes"></Widgets>
          <Widgets type="Active Polls"></Widgets>
        </div>
        <div className="charts">
          <Featured></Featured>
          <Chart></Chart>
        </div>
      </div>
    </div>
  );
};

export default Home;
