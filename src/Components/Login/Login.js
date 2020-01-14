import React, { Component } from 'react';


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