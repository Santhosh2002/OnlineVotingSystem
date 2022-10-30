import React, { Component } from 'react';
import Topbar from './Top_bar';

const Election_list = () => {
var Data = [
      { Date: 'Nov 2022',
        Type: 'State Legislative',
        Location: 'Himacha Pradesh',
        Status: 'Ongoing',
        Content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Illum unde sequi labore placeat repudiandae vitae iustoexcepturi sapiente a vel!',
        acc:'acc1'
    },
      { Date: 'Dec 2022',
        Type: 'State Legislative',
        Location: 'Gujrat',
        Status: 'Offline',
        Content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Illum unde sequi labore placeat repudiandae vitae iustoexcepturi sapiente a vel!',
        acc:'acc2'
      },
      { Date: 'TBD',
        Type: 'Legislative',
        Location: 'Gopalganj ,bhihar',
        Status: 'Offline',
        Content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Illum unde sequi labore placeat repudiandae vitae iustoexcepturi sapiente a vel!',
        acc:'acc3'
      },
      { Date: 'Feb 2022',
        Type: 'State Legislative',
        Location: 'Uttarakhand',
        Status: 'Ended',
        Content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Illum unde sequi labore placeat repudiandae vitae iustoexcepturi sapiente a vel!',
        acc:'acc4'
    },
      { Date: 'Feb 2022',
        Type: 'State Legislative',
        Location: 'Uttarakhand',
        Status: 'Ended',
        Content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Illum unde sequi labore placeat repudiandae vitae iustoexcepturi sapiente a vel!',
        acc:'acc5'
    },
      { Date: 'Feb 2022',
        Type: 'State Legislative',
        Location: 'Uttarakhand',
        Status: 'Ended',
        Content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Illum unde sequi labore placeat repudiandae vitae iustoexcepturi sapiente a vel!',
        acc:'acc6'
      }
    ];
   
    var valueCard = Data.map(function (value) {
        return  <div className="tab">
                    <input type="radio" name="acc" id={value.acc} />
                    <label htmlFor={value.acc} className={value.Status}>
                        <h2 />
                        <table className={value.Status}>
                            <thead>
                                <tr><td>{value.Date}</td>
                                    <td>{value.Type}</td>
                                    <td>{value.Location}</td>
                                    <td>{value.Status}</td>
                                </tr>
                            </thead>
                        </table>
                    </label>
                    <div className="content">
                        <p>
                            <td>{value.Content}</td>
                        </p>
                    </div>
                </div>
          
      })
    return (
            <div className="main" id="Election_P">
                {/* TOPBAR */}
                <Topbar PageNam="Election List" />
                {/* TOPBAR ENDS */}
                <div className="details"><div className="main_header">
                    <table>
                        <thead>
                            <tr><th>
                            </th><td>Date</td>
                                <td>Type</td>
                                <td>Location</td>
                                <td>Status</td>
                            </tr></thead>
                    </table>
                </div>
                  {valueCard}
                </div>
        </div>
    );
}
export default Election_list;