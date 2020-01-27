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
                <h3>Let's connect! </h3>
                <br/>
                <h3>We'd love to hear from you.</h3>
                <br/>

            
                 <span>Name:              
                
                    <input className="contact-inputs"
                    name="name"  
                    type="text"  
                    onChange={this.handleInput}
                    /></span>

                    <br/>
                <span>Email:
                    <input className="contact-inputs"
                    name="email"  
                    type="email"  
                    onChange={this.handleInput} 
                    />  </span>   
                    <br/>   

                    <span>Message:
                    <input className="contact-inputs" id="message-input"
                    name="message" 
                    onChange={this.handleInput} 
                    />
                    </span>

                    <br/>

                <button
                 onClick={this.handleSubmit}>
                     Submit
                     </button>
                     
                </div>

        )
    }
}

export default Contact;