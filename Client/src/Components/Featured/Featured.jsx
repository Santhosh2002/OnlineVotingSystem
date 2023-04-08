import React from "react";
import "./Featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Polling</h1>
        <MoreVertIcon className="icon"></MoreVertIcon>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={40} text={"40%"} strokeWidth={3} />
        </div>
        <p className="title">Active Polling</p>
        <p className="amount">4200</p>
        <p className="desc">Total polling for the current election</p>
      </div>
    </div>
  );
};

export default Featured;
