import React from 'react';
// import "./NavBar.css";
import "./NavBar.scss";
import {Link } from "react-router-dom"; 

export default class NavBar extends React.Component {
    constructor (){
        super();
        this.state={
            menuStatus: 'drop-down-menu'
        }
    }
    
    handleClick = () => {
        if(this.state.menuStatus === 'drop-down-menu-open'){
            this.setState({
                menuStatus: 'drop-down-menu-closed'
            })
        } else {
            this.setState ({menuStatus: 'drop-down-menu-open'})
        }
    }

    handleLinkClick = () => {
        if(this.state.menuStatus === 'drop-down-menu-open'){
            this.setState({
                menuStatus: 'drop-down-menu-closed'
            })
        } else {
            this.setState ({menuStatus: 'drop-down-menu-open'})
        }
    }



    render(){
    return (
        <header>
            <h2 id="logo"> skinAdvisor </h2>
            <ul id='site-nav'>
                <Link to= "/AllReviews/"><li className='menu-text'>All Reviews</li></Link>
                <Link to="/Education/"><li className='menu-text'>Learn</li></Link>
                <Link to="/profile/:user_id"><li className='menu-text'>Profile</li></Link>
                <Link to="/Contact/"><li className='menu-text'>Contact</li></Link>
                <Link to="/"><li className='menu-text'>Login</li></Link>
                
                
                <li>
                    {/* <div id="image-box"> */}
                    <img
                    onClick={this.handleClick}
                    src='https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png' alt='menu icon'/>
                    {/* </div> */}
                </li>
                <ul className={this.state.menuStatus}>
                    <Link to="/AllReviews/" onClick={this.handleLinkClick}><li>All Reviews</li></Link>
                    <Link to="/Education/" onClick={this.handleLinkClick}><li>Learn</li></Link>
                    <Link to="/profile/:user_id" onClick={this.handleLinkClick}><li>Profile</li></Link>
                    <Link to="/Contact/" onClick={this.handleLinkClick}><li>Contact</li></Link>
                    <Link to="/" onClick={this.handleLinkClick}><li>Login</li></Link>
                   
                </ul>
            </ul>
        </header> 
    )
    }
}