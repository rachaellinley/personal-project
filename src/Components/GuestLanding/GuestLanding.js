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
        <div id="body">

            <h2> The Product Curator  </h2>
            <div id="component-container">
            <Login />
            <Register />
            </div>
          
        </div>
    )
}
}

export default GuestLanding;