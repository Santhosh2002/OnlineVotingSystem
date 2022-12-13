import Topbar from "./Top_bar";

const Result = () => {
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

  var PollingCards = PollingP.map(function (name) {
    return (
      <div className="card C1">
        <div className="imgBox">
          <img src="./Images/INC.png" />
          <h2>Candidate 2</h2>
          <p>Party : INC</p>
          <p>% : 19</p>
        </div>
      </div>
    );
  });
  return (
    <div className="container" id="blur">
      <div className="main" id="Resu">
        <Topbar PageNam="Polling" />
        {/* FORMS STARTS */}
        <div className="Home">
          <div className="text-box">
            <h1>Polling Results</h1>
            <div className="graph" id="graph"></div>
            <div className="Res">
              <div className="candidates">
                <div className="card C1">
                  <div className="imgBox">
                    <img src="./Images/BJP_Flag.svg.png" />
                    <h2>Candidate 1</h2>
                    <p>Party : BJP</p>
                    <p>% : 65</p>
                  </div>
                </div>
                <div className="card C1">
                  <div className="imgBox">
                    <img src="./Images/INC.png" />
                    <h2>Candidate 2</h2>
                    <p>Party : INC</p>
                    <p>% : 19</p>
                  </div>
                </div>
                <div className="card C1">
                  <div className="imgBox">
                    <img src="./Images/NPP_Flag.jpg" />
                    <h2>Candidate 3</h2>
                    <p>Party : NPP</p>
                    <p>% : 1</p>
                  </div>
                </div>
                <div className="card C1">
                  <div className="imgBox">
                    <img src="./Images/NCP.png" />
                    <h2>Candidate 4</h2>
                    <p>Party : NCP</p>
                    <p>% : 2</p>
                  </div>
                </div>
                <div className="card C1">
                  <div className="imgBox">
                    <img src="./Images/CPI.png" />
                    <h2>Candidate 5</h2>
                    <p>Party : CPI</p>
                    <p>% : 5</p>
                  </div>
                </div>
                <div className="card C1">
                  <div className="imgBox">
                    <img src="./Images/bsp.png" />
                    <h2>Candidate 6</h2>
                    <p>Party : BSP</p>
                    <p>% : 6</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Result;
