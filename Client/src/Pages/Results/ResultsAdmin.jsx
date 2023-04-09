import React from "react";
import "./ResultsAdmin.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Chart from "../../Components/Chart/Chart";

const ResultsAdmin = () => {
  return (
    <>
      <div className="ResultsAdminComponent">
        <Sidebar />
        <div className="ResultsAdminContainer">
          <Navbar />
          <div className="top">
            <Chart></Chart>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultsAdmin;
