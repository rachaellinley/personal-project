import React, { Component } from 'react';
// import "./GuestLanding.scss";
import "./GuestLanding.css";
import Login from "../Login/Login";
import Register from "../Register/Register";



class GuestLanding extends Component {
    constructor () {
        super();
        this.state = {
            
        }
    }

render() {
    return (
        <div className="background">
            
            <h2 id="tagline"> Your Product Curator  </h2>
            <div id="component-container">
            <Login />
            <Register />
            </div>
          
        </div>
    )
}
}

export default GuestLanding;