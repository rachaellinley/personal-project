import React, { Component } from 'react';
import "./GuestLanding.scss";
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
        <div id="main-div">
            

            <h1> The Product Curator  </h1>
            <Login />
            <Register />
          
        </div>
    )
}
}

export default GuestLanding;