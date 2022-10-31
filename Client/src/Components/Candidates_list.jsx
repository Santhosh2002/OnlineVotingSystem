import Topbar from './Top_bar';

const CandidatesList = () => {
    var candidates_details = [
      { Candidate: 'Candidate 1',
        Party: 'Party : BJP',
        Qualifications: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Illum unde sequi labore placeat repudiandae vitae iusto excepturi sapiente a vel!',
        Qualities: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        url: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/30144716/616-768x591.png'
        },
      { Candidate: 'Candidate 2',
        Party: 'Party : INC',
        Qualifications: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Illum unde sequi labore placeat repudiandae vitae iusto excepturi sapiente a vel!',
        Qualities: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        url: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/30144638/1115.png'
        },
      { Candidate: 'Candidate 3',
        Party: 'Party : NPP',
        Qualifications: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Illum unde sequi labore placeat repudiandae vitae iusto excepturi sapiente a vel!',
        Qualities: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        url: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/30144704/2_big2-768x591.png'
        },
      { Candidate: 'Candidate 4',
        Party: 'Party : NCP',
        Qualifications: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Illum unde sequi labore placeat repudiandae vitae iusto excepturi sapiente a vel!',
        Qualities: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        url: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/30144633/149.png'
        },
      { Candidate: 'Candidate 5',
        Party: 'Party : CPI',
        Qualifications: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Illum unde sequi labore placeat repudiandae vitae iusto excepturi sapiente a vel!',
        Qualities: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        url: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/30144642/1213.png'
        },
      { Candidate: 'Candidate 6',
        Party: 'Party : BSP',
        Qualifications: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Illum unde sequi labore placeat repudiandae vitae iusto excepturi sapiente a vel!',
        Qualities: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        url: 'https://i.pinimg.com/736x/d8/0e/09/d80e09a69eb3bea45b20f73c7d8dad54.jpg'
        }
    ];
    var CandiCard = candidates_details.map(function (value) {
        return <div className="card C1">
                    <div className="imgBox">
                        <img src={value.url} onclick="openTab('Poll')" />
                <h2>{value.Candidate}</h2>
                <p>{value.Party}</p>
                    </div>
                </div>
            
    });
    var descriptCard = candidates_details.map(function (value) {
        return <div className="card C1">
                    <div id="Qualif">
                        <h1>Qualifications: </h1>
                        <p>
                            {value.Qualifications}
                        </p>
                    </div>
                    <div id="Qualit">
                        <h1>Qualities: </h1>
                        <p>
                            {value.Qualities}
                        </p>
                    </div>
                    
                </div>
            
    });
    return (
        <div className="main" id="Cand" >
            {/* TOPBAR */}
            <Topbar PageNam="Candidates List" />
            {/* FORMS STARTS */}
            <div className="Home">
                <div className="text-box">
                    <h1 id="title">Nomines List</h1>
                    <div className="Res">
                        <div className="candidates">
                            {CandiCard}
                        </div>
                        <div className="candidates_details">
                            {descriptCard}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CandidatesList;