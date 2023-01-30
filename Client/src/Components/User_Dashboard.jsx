import Topbar from "./Top_bar";
import React from "react";
import Dashboard_Popup from "./Dashboard_Popup";
const User_Dashboard = () => {
  var Data = [
    {
      Date: "Nov 2022",
      Type: "State Legislative",
      Location: "Himacha Pradesh",
      Status: "Ongoing",
    },
    {
      Date: "Dec 2022",
      Type: "State Legislative",
      Location: "Gujrat",
      Status: "Offline",
    },
    {
      Date: "TBD",
      Type: "Legislative",
      Location: "Gopalganj ,bhihar",
      Status: "Offline",
    },
    {
      Date: "Feb 2022",
      Type: "State Legislative",
      Location: "Uttarakhand",
      Status: "Completed",
    },
  ];
  var valueCard = Data.map(function (value) {
    return (
      <tr>
        <td>{value.Date}</td>
        <td>{value.Type}</td>
        <td>{value.Location}</td>
        <td>
          <span className={value.Status}>{value.Status}</span>
        </td>
      </tr>
    );
  });
  var steps = [
    {
      Step: "Step1",
      Process: "Select a Live Poll",
      Message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis non asperiores nihil, libero, quod error fugiat animi alias accusantium quaerat assumenda eveniet ipsum distinctio nemo unde illo laudantium molestiae qui eos minima debitis nostrum maxime ullam est? Porro, eveniet cupiditate.",
    },
    {
      Step: "Step2",
      Process: "Verify your Voter ID",
      Message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis non asperiores nihil, libero, quod error fugiat animi alias accusantium quaerat assumenda eveniet ipsum distinctio nemo unde illo laudantium molestiae qui eos minima debitis nostrum maxime ullam est? Porro, eveniet cupiditate.",
    },
    {
      Step: "Step3",
      Process: "View the Candidate List",
      Message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis non asperiores nihil, libero, quod error fugiat animi alias accusantium quaerat assumenda eveniet ipsum distinctio nemo unde illo laudantium molestiae qui eos minima debitis nostrum maxime ullam est? Porro, eveniet cupiditate.",
    },
    {
      Step: "Step4",
      Process: "Cast your Vote",
      Message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis non asperiores nihil, libero, quod error fugiat animi alias accusantium quaerat assumenda eveniet ipsum distinctio nemo unde illo laudantium molestiae qui eos minima debitis nostrum maxime ullam est? Porro, eveniet cupiditate.",
    },
  ];
  var stepsCard = steps.map(function (value) {
    return (
      <div className="card">
        <div>
          <div className="step_number"> {value.Step} </div>
          <div className="step_text">{value.Process}</div>
        </div>
        <div className="iconbox">
          <i className="bx bx-right-arrow-alt" />
          <span
            className="text"
            id="open-popup"
            onClick={function (event) {
              document
                .getElementsByClassName("popup")[0]
                .classList.add("active");
              <Dashboard_Popup
                Step={value.Step}
                Description={value.Message}
              ></Dashboard_Popup>;
            }}
          >
            Show More
          </span>
        </div>
      </div>
    );
  });
  // var popup = message.map(function (value) {
  //   return <div id="popup" className={value.Step}>
  //       <div className="popup_icon">
  //         <i className="bx bx-detail" />
  //       </div>
  //       <div className="popup_content">
  //       <h2>{value.Step}</h2>
  //       <div className="popup_text">{value.Message}</div>
  //       </div>
  //       <div className="dismiss">
  //         <button className="dismiss_btn">Dismiss</button>
  //       </div>
  //     </div>
  // })
  return (
    <>
      <div className="container" id="blur">
        {/* MAIN STARTS*/}
        <div className="main" id="blur2">
          <Topbar PageNam="Dashboard" />
          {/* CARDS STARTS */}
          <div className="cardbox">{stepsCard}</div>
          {/* CARD ENDS */}
          {/* DETAILS */}
          <div className="details">
            <div className="upcoming_elections">
              <div className="cardheader">
                <h2>Upcoming Elections</h2>
                <a href="#" className="btn1">
                  View All
                </a>
              </div>
              <table>
                <thead>
                  <tr>
                    <td>Date</td>
                    <td>Type</td>
                    <td>Location</td>
                    <td>Status</td>
                  </tr>
                </thead>
                <tbody>{valueCard}</tbody>
              </table>
            </div>
            <div className="recent_news">
              <div className="cardheader">
                <h2>Recent News</h2>
              </div>
              <table>
                <tbody>
                  <tr>
                    <td width="60px">
                      <div className="imgbox">
                        <img src="Images/HT_logo.jpg" alt="" />
                      </div>
                    </td>
                    <td>
                      <h4>
                        BJP wins in West Bengal's Nandigram
                        <br />
                        <span>
                          <a
                            target="_blank"
                            href="https://www.hindustantimes.com/india-news/bjp-wins-election-in-west-bengal-s-nandigram-cooperative-body-101663508160389.html"
                          >
                            Know more
                          </a>
                        </span>
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td width="60px">
                      <div className="imgbox">
                        <img src="Images/ABP_live.jpg" alt="" />
                      </div>
                    </td>
                    <td>
                      <h4>
                        Maharashtra Gram Panchayat Results
                        <br />
                        <span>
                          <a
                            target="_blank"
                            href="https://news.abplive.com/news/india/maharashtra-gram-panchayat-election-result-2022-updates-bjp-eknath-shinde-shiv-sena-alliance-congress-ncp-1554096"
                          >
                            Know more
                          </a>
                        </span>
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td width="60px">
                      <div className="imgbox">
                        <img src="Images/BS_logo.jpg" alt="" />
                      </div>
                    </td>
                    <td>
                      <h4>
                        Election Commission launched E-Patrika
                        <br />
                        <span>
                          <a
                            target="_blank"
                            href="https://currentaffairs.adda247.com/election-commission-of-india-launched-blo-e-patrika/"
                          >
                            Know more
                          </a>
                        </span>
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td width="60px">
                      <div className="imgbox">
                        <img src="Images/adda247_logo.jpg" alt="" />
                      </div>
                    </td>
                    <td>
                      <h4>
                        EC team visits Gujarat ahead of polls
                        <br />
                        <span>
                          <a
                            target="_blank"
                            href="https://www.business-standard.com/article/current-affairs/ec-team-visits-gujarat-ahead-of-polls-reviews-election-preparedness-122091900048_1.html"
                          >
                            Know more
                          </a>
                        </span>
                      </h4>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User_Dashboard;
