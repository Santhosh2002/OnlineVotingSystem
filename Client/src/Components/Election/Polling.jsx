import Topbar from "../Topbar/Top_bar";
import React from "react";
import { useContext } from "react";
import { VoteContext } from "../../context/VoteContext";
import "../../assets/CSS/Polling.css";

const Polling = () => {
  const {
    checkIfWalletIsConnected,
    setCandidate,
    setCand_Index,
    castyourvote,
  } = useContext(VoteContext);

  var PollingP = [
    {
      Index: 0,
      Candidate: "Candidate 1",
      Party: "Party : BJP",
      url: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30144716/616-768x591.png",
    },
    {
      Index: 1,
      Candidate: "Candidate 2",
      Party: "Party : INC",
      url: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30144638/1115.png",
    },
    {
      Index: 2,
      Candidate: "Candidate 3",
      Party: "Party : NPP",
      url: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30144704/2_big2-768x591.png",
    },
    {
      Index: 3,
      Candidate: "Candidate 4",
      Party: "Party : NCP",
      url: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30144633/149.png",
    },
    {
      Index: 4,
      Candidate: "Candidate 5",
      Party: "Party : CPI",
      url: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30144642/1213.png",
    },
    {
      Index: 5,
      Candidate: "Candidate 6",
      Party: "Party : BSP",
      url: "https://i.pinimg.com/736x/d8/0e/09/d80e09a69eb3bea45b20f73c7d8dad54.jpg",
    },
  ];

  var PollingCards = PollingP.map(function (name) {
    return (
      <div className="card C1">
        <div className="imgBox">
          <img src={name.url} alt="name" />
          <h2>{name.Party}</h2>
          <p>
            <button
              onClick={function (event) {
                castyourvote();
                checkIfWalletIsConnected();
                setCandidate(name.Candidate);
                setCand_Index(name.Index);
              }}
              className="votebutton"
            >
              VOTE
            </button>
          </p>
        </div>
      </div>
    );
  });
  return (
    <div className="main" id="Poll">
      {/* TOPBAR */}
      <Topbar PageNam="Polling" />
      {/* TOPBAR ENDS */}
      {/* FORMS STARTS */}
      <div className="Home">
        <div className="text-box">
          <h1 id="title">Select your choice</h1>
          <div className="Res">
            <div className="candidates">{PollingCards}</div>
          </div>
        </div>
      </div>
      {/* FORM ENDS */}
    </div>
  );
};

export default Polling;
