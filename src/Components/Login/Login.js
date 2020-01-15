import React, { Component } from 'react';
// import {connect} from 'react-redux';
// import {loginUser} from "../../redux/reducers/authReducer";
// import { Redirect } from 'react-router-dom'


class Login extends Component {
    constructor () {
        super();
        this.state = {
            
        }

    }


render() {
    return (
        <div>
            <h1> Please Login </h1>
            <input placeholder="username"/>
            <input placeholder="password"/>
            <button>Login</button>
        </div>
    )
}
}

export default Login;