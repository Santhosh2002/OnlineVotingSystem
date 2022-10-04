import React, { Component } from 'react';

class User_Dashboard extends Component {
    render() { 
        return (<div>
        <div className="container" id="blur">
          
          {/* MAIN STARTS*/}
          <div className="main" id="blur2">
            {/* TOPBAR */}
            <div className="topbar">
              {/* TOGGLE BUTTON STARTS*/}
              <div className="toggle">
                <i className="bx bx-menu" />
                <div className="dashboard">Dashboard</div>
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
            {/* TOPBAR ENDS */}
            {/* CARDS STARTS */}
            <div className="cardbox">
              <div className="card" onclick="popup_toggle()">
                <div>
                  <div className="step_number"> Step 1 </div>
                  <div className="step_text">Select a Live Poll</div>
                </div>
                <div className="iconbox">
                  <i className="bx bx-right-arrow-alt" />
                  <span className="text">Show More</span>
                </div>
              </div>
              <div className="card" onclick="popup_toggle()">
                <div>
                  <div className="step_number"> Step 2 </div>
                  <div className="step_text">Verify your Voter ID</div>
                </div>
                <div className="iconbox">
                  <i className="bx bx-right-arrow-alt" />
                  <span className="text">Show More</span>
                </div>
              </div>
              <div className="card" onclick="popup_toggle()">
                <div>
                  <div className="step_number"> Step 3 </div>
                  <div className="step_text">View the Candidate List</div>
                </div>
                <div className="iconbox">
                  <i className="bx bx-right-arrow-alt" />
                  <span className="text">Show More</span>
                </div>
              </div>
              <div className="card" onclick="popup_toggle()">
                <div>
                  <div className="step_number"> Step 4 </div>
                  <div className="step_text">Cast your Vote</div>
                </div>
                <div className="iconbox">
                  <i className="bx bx-right-arrow-alt" />
                  <span className="text">Show More</span>
                </div>
              </div>
            </div>
            {/* CARD ENDS */}
            {/* DETAILS */}
            <div className="details">
              <div className="upcoming_elections">
                <div className="cardheader">
                  <h2>Upcoming Elections</h2>
                  <a href="#" className="btn">View All</a>
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
                  <tbody>
                    <tr>
                      <td>Nov 2022</td>
                      <td>State Legislative</td>
                      <td>Himachal Pradesh</td>
                      <td><span className="status_ongoing">Ongoing</span></td>
                    </tr>
                    <tr>
                      <td>Dec 2022</td>
                      <td>State Legislative</td>
                      <td>Gujrat</td>
                      <td><span className="status_offline">Offline</span></td>
                    </tr>
                    <tr>
                      <td>TBD</td>
                      <td>Legislative</td>
                      <td>Gopalganj, Bhihar</td>
                      <td><span className="status_offline">Offline</span></td>
                    </tr>
                    <tr>
                      <td>14 Feb 2022</td>
                      <td>State Legislative</td>
                      <td>Uttarakhand</td>
                      <td><span className="status_completed">Completed</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="recent_news">
                <div className="cardheader">
                  <h2>Recent News</h2>
                </div>
                <table>
                  <tbody><tr>
                      <td width="60px">
                        <div className="imgbox">
                          <img src="Images/HT_logo.jpg" alt="" />
                        </div>
                      </td><td><h4>BJP wins in West Bengal's Nandigram<br />
                          <span><a target="_blank" href="https://www.hindustantimes.com/india-news/bjp-wins-election-in-west-bengal-s-nandigram-cooperative-body-101663508160389.html">Know more</a></span></h4></td>
                    </tr>
                    <tr>
                      <td width="60px">
                        <div className="imgbox">
                          <img src="Images/ABP_live.jpg" alt="" />
                        </div>
                      </td><td><h4>Maharashtra Gram Panchayat Results<br />
                          <span><a target="_blank" href="https://news.abplive.com/news/india/maharashtra-gram-panchayat-election-result-2022-updates-bjp-eknath-shinde-shiv-sena-alliance-congress-ncp-1554096">Know more</a></span></h4></td>
                    </tr>
                    <tr>
                      <td width="60px">
                        <div className="imgbox">
                          <img src="Images/BS_logo.jpg" alt="" />
                        </div>
                      </td><td><h4>Election Commission launched E-Patrika<br />
                          <span><a target="_blank" href="https://currentaffairs.adda247.com/election-commission-of-india-launched-blo-e-patrika/">Know more</a></span></h4></td>
                    </tr>
                    <tr>
                      <td width="60px">
                        <div className="imgbox">
                          <img src="Images/adda247_logo.jpg" alt="" />
                        </div>
                      </td><td><h4>EC team visits Gujarat ahead of polls<br />
                          <span><a target="_blank" href="https://www.business-standard.com/article/current-affairs/ec-team-visits-gujarat-ahead-of-polls-reviews-election-preparedness-122091900048_1.html">Know more</a></span></h4></td>
                    </tr>
                  </tbody></table>
              </div>
            </div>
          </div>  
          <div className="main" id="Auth" style={{display: 'none'}}>
            {/* TOPBAR */}
            <div className="topbar">
              {/* TOGGLE BUTTON STARTS*/}
              <div className="toggle">
                <i className="bx bx-menu" />
                <div className="dashboard">Authenticate</div>
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
            {/* TOPBAR ENDS */}
            {/* FORMS STARTS */}
            <div className="Home">
              <div className="text-box">
                <div className="signin-signup">
                  <form action="#" className="sign-in-form">
                    <i className="bx bxs-id-card" />
                    <h2 className="title">Verfication</h2>  
                    <div className="input-field">
                      <i className="bx bxs-user" />
                      <input type="text" placeholder="Voter ID" />
                    </div>  
                    <div className="input-field">
                      <i className="bx bxs-lock-alt" />
                      <input type="captha" placeholder="CAPTCHA" />
                    </div>
                    {/* CAPTCHA BOX STARTS */}
                    {/* CAPTCHA BOX ENDS */}
                    <input type="submit" id="Login" className="btn solid" defaultValue="Verify" />
                  </form>
                </div>
              </div>
            </div>
            {/* FORM ENDS */}
          </div>
        </div>
        {/* POPSP STARTS */}
        <div id="popup">
          <div className="popup_icon">
            <i className="bx bx-detail" />
          </div>
          <div className="popup_content">
            <h2>Step 1</h2>
            <div className="popup_text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium nostrum provident sapiente placeat velit similique id perspiciatis suscipit, tenetur ex in, assumenda explicabo quos autem tempora maiores!</div>
          </div>
          <div className="dismiss" onclick="popup_toggle()">
            <button className="dismiss_btn">Dismiss</button>
          </div>
        </div>
        <div id="popup">
          <div className="popup_icon">
            <i className="bx bx-detail" />
          </div>
          <h2>Step 2</h2>
          <div className="popup_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis non asperiores nihil, libero, quod error fugiat animi alias accusantium quaerat assumenda eveniet ipsum distinctio nemo unde illo laudantium molestiae qui eos minima debitis nostrum maxime ullam est? Porro, eveniet cupiditate.</div>
          <div className="dismiss" onclick="popup_toggle()">
            <button className="dismiss_btn">Dismiss</button>
          </div>
        </div>
        <div id="overlay" onclick="popup_toggle()" />
        {/* POPUP ENDS */} 
        {/* SCRIPT */}
      </div>);
    }
}
 
export default User_Dashboard;