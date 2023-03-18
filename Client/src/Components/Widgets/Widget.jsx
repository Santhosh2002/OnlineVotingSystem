import React from "react";
import "./Widget.scss";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import PollIcon from "@mui/icons-material/Poll";
import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";
const Widgets = ({ type }) => {
  let data;
  switch (type) {
    case "Voters":
      data = {
        title: "Voters",
        count: "1,12,500",
        percentage: "50%",
        icon: (
          <PersonIcon
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218, 165, 32, 0.2)",
            }}
          />
        ),
        link: "View Details",
      };

      break;
    case "Candidates":
      data = {
        title: "Candidates",
        count: "124",
        percentage: "10%",
        icon: (
          <PeopleIcon
            className="icon"
            style={{
              color: "green",
              backgroundColor: "rgba(0, 128, 0, 0.2)",
            }}
          />
        ),
        link: "View Details",
      };
      break;
    case "Total Votes":
      data = {
        title: "Total Votes",
        count: "52,500",
        percentage: "40%",
        icon: (
          <HowToVoteIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
        link: "View Details",
      };
      break;
    case "Active Polls":
      data = {
        title: "Active Polls",
        count: "25",
        percentage: "10%",
        icon: (
          <PollIcon
            className="icon"
            style={{
              color: "#3399ff",
              backgroundColor: "rgba(0, 255, 255, 0.2)",
            }}
          />
        ),
        link: "View Details",
      };
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <div className="counter">{data.count}</div>
        <div className="link">
          {data.link}
          <ArrowRightAltIcon></ArrowRightAltIcon>
        </div>
      </div>
      <div className="right">
        <div className="percentage positive">
          <i className="fas fa-arrow-up"></i>
          {data.percentage}
        </div>
        <div>{data.icon}</div>
      </div>
    </div>
  );
};

export default Widgets;
