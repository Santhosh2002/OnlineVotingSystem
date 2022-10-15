import React, { Component } from 'react';

class About_1 extends Component {
    
    render() {
        var names = ['Santhosh', 'Gaurav', 'Deepanjana', 'Indraneela'];
        var nameCard = names.map(function (name) {
            return <div className="card ">
                <div className="imgBox">
                <img src="Images/gaurav.png" />
                <h2>{name}</h2>
                </div>
                <div className="content_c">
                        <h2>{name}</h2>
                <p>Group Member <br /> ------------------</p>
                </div>
          </div>
            
        })
        return (
        <div className="About" id="about">
            <div className="content_a">
            <h1 id="head_a">About Us</h1>
            <h2>Our team</h2>
            </div>
            <div className="ourteam">
                {nameCard}
            </div>
        </div>);
    }
}
export default About_1;