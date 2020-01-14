import React, { Component } from 'react';
import {Link} from "react-router-dom";


class Register extends Component {
    constructor () {
        super();
        this.state = {
            
        }

    }


render() {
    return (
        <div>
            <h1> Please Register </h1>
            <input placeholder="username"/>
            <input placeholder="password"/>
            <button>Register</button>
            <Link to='/AllReviews'><h1>Continue as Guest</h1></Link>
        </div>
    )
}
}

export default Register;