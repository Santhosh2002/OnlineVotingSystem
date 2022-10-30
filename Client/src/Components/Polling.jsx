import Topbar from './Top_bar';

const Polling = () => {

    var PollingP = [
      { Candidate: 'Candidate 1',
        Party: 'Party : BJP',
        url: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/30144716/616-768x591.png'
        },
      { Candidate: 'Candidate 2',
        Party: 'Party : INC',
        url: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/30144638/1115.png'
        },
      { Candidate: 'Candidate 3',
        Party: 'Party : NPP',
        url: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/30144704/2_big2-768x591.png'
        },
      { Candidate: 'Candidate 4',
        Party: 'Party : NCP',
        url: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/30144633/149.png'
        },
      { Candidate: 'Candidate 5',
        Party: 'Party : CPI',
        url: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/30144642/1213.png'
        },
      { Candidate: 'Candidate 6',
        Party: 'Party : BSP',
        url: 'https://i.pinimg.com/736x/d8/0e/09/d80e09a69eb3bea45b20f73c7d8dad54.jpg'
        }
    ];

    var PollingCards = PollingP.map(function (name) {
      return <div className="card C1">
                <div className="imgBox">
                  <img src={name.url} />
                  <h2>{name.Party}</h2>
                  <p><button onclick className="votebutton">VOTE</button></p>
                </div>
              </div>
            
    });
    return (
      <div className="main" id="Poll" >
        {/* TOPBAR */}
        <Topbar PageNam="Polling" />
        {/* TOPBAR ENDS */}
        {/* FORMS STARTS */}
        <div className="Home">
          <div className="text-box">
            <h1 id="title">Select your choice</h1>
            <div className="Res">
              <div className="candidates">
                {PollingCards}
              </div>
            </div>
          </div>
        </div>
        {/* FORM ENDS */}
       
      </div>
    );
  }

export default Polling;
