import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginUser} from "../../redux/reducers/authReducer";
import {Redirect} from "react-router-dom";
import "./Login.css"

class Login extends Component {
    constructor () {
        super();
        this.state = {
            username: "",
            password: ""        
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
      }
    
      handleLogin = () => {
        const { loginUser } = this.props;
        const { username, password } = this.state;
    
        loginUser({ username, password })
      }

render() {
    if(this.props.user_id){
        return(
            <Redirect to={`/profile/${this.props.user_id}`} />
        )
    }

    return (
        <div id="login-box">
            <h1 id="welcome"> Welcome Back </h1>
            <input name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} />
        <input name="password" type="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
        <button onClick={this.handleLogin}>Login</button>
        </div>
    )
}
}

const mapStateToProps = reduxState => {
    return {
      user_id: reduxState.authReducer.user_id
    }
  }
  
  export default connect(mapStateToProps, { loginUser })(Login);