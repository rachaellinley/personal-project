import React, { Component } from 'react';
import "./Contact.css"
import axios from 'axios';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            message: ""
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
      
    handleInput(e){
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit(e){
        e.preventDefault();
        axios({
            method: "POST", 
            url:"/send", 
            data: {
                name: this.state.name,   
                email: this.state.email,  
                message: this.state.message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    render() {
        return (
            <div id="contact-container">
                <h3>Want to see your product featured? </h3>
                <h3>Have a question?</h3>
                    
                <div>
                    <input 
                    name="name" 
                    placeholder="name" 
                    type="text"  
                    onChange={this.handleInput}
                    />

                    <input 
                    name="email" 
                    placeholder="email" 
                    type="email"  
                    onChange={this.handleInput} 
                    />                    
                    
                    <input 
                    name="message" 
                    placeholder="message" 
                    onChange={this.handleInput} 
                    />

                <button
                 onClick={this.handleSubmit}>
                     Submit
                     </button>
                     </div>
                </div>

        )
    }
}

export default Contact;