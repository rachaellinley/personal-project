import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import {registerUser } from "../../redux/reducers/authReducer";


class Register extends Component {
    constructor () {
        super();
        this.state = {
            first_name: "",
            username: "",
            password: ""
        }

    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleRegister = () => {
        const {registerUser} = this.props;
        const {first_name, username, password } = this.state;
        registerUser({first_name, username, password })
    }


render() {
    return (
        <div>
            <h1> First time? Please Register </h1>

            <input name="first_name" placeholder="first name" value={this.state.first_name} onChange={this.handleChange}/>
            <input name="username" placeholder="username" value={this.state.username} onChange={this.handleChange}/>
            <input name="password" placeholder="password" value= {this.state.password} onChange={this.handleChange}/>
            
            <Link to="/profile/:user_id"><button onClick={this.handleRegister}>Register</button></Link>
            <Link to='/AllReviews'><h1>Continue as Guest</h1></Link>
        </div>
    )
}
}

const mapStateToProps = reduxState => {
    return {
      user_id: reduxState.authReducer.user_id
    }
  }
  
  export default connect(mapStateToProps, { registerUser })(Register);