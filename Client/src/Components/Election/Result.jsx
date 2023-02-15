import Topbar from "../Topbar/Top_bar";
import BarChart from "./BarChart";
import { VoteContext } from "../../context/VoteContext";
import "../../assets/CSS/result.css";

import React from "react";
// import { useContext } from "react";
const Result = () => {
  // const {} = useContext(VoteContext);
  var PollingP = [
    {
      Candidate: "Candidate 1",
      Party: "Party : BJP",
      url: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30144716/616-768x591.png",
    },
    {
      Candidate: "Candidate 2",
      Party: "Party : INC",
      url: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30144638/1115.png",
    },
    {
      Candidate: "Candidate 3",
      Party: "Party : NPP",
      url: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30144704/2_big2-768x591.png",
    },
    {
      Candidate: "Candidate 4",
      Party: "Party : NCP",
      url: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30144633/149.png",
    },
    {
      Candidate: "Candidate 5",
      Party: "Party : CPI",
      url: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30144642/1213.png",
    },
    {
      Candidate: "Candidate 6",
      Party: "Party : BSP",
      url: "https://i.pinimg.com/736x/d8/0e/09/d80e09a69eb3bea45b20f73c7d8dad54.jpg",
    },
  ];
  var PollingR = [
    { Result: "49%" },
    { Result: "19%" },
    { Result: "15%" },
    { Result: "10%" },
    { Result: "5%" },
    { Result: "2%" },
  ];
  var PollingCards = PollingP.map(function (name) {
    return (
      <div className="card C1">
        <div className="imgBox">
          <img src={name.url} />
          <h2>{name.Candidate}</h2>
          <p>{name.Party}</p>
        </div>
      </div>
    );
  });
  var PollingCardsResult = PollingR.map(function (name) {
    return (
      <div className="Resultcard R1">
        <div className="imgBox">
          <p>{name.Result}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="main" id="Resu">
      <Topbar PageNam="Results" />
      {/* FORMS STARTS */}
      <div className="Home">
        <div className="text-box">
          <h1>Polling Results</h1>
          <div className="graph" id="graph">
            <BarChart
              Data={[20, 15, 16, 3, 4, 9]}
              Lables={[
                "Candidate1",
                "Candidate2",
                "Candidate3",
                "Candidate4",
                "Candidate5",
                "Candidate6",
              ]}
            />
          </div>
          <div className="Res">
            <div className="candidates">{PollingCards}</div>
            <div className="results">{PollingCardsResult}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Result;
