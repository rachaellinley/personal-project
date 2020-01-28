import React, { Component } from 'react';
import "./Education.css"


class Education extends Component {
    constructor() {
        super();
        this.state = {

        }

    }


    render() {
        return (
            <div id="education-container">
                <h1 id="question"> What's in your product? </h1>
                <h2 id="spotlight">Ingredient Spotlight</h2>
              
                
                <div id="ingredients-container">

                    <br/>
                    
                    <h1 id="vitamin-c"> Vitamin C</h1>

                    <br/>
                    
                    <h3>
                    Vitamin C has been praised for its anti-aging and brightening benefits, 
                    and studies have shown that it also works as protection against sun-damage. 
                    Lines and wrinkles can form on the skin due to oxidative stress, 
                    a disturbance caused by unstable electrons that attack healthy cells and 
                    change their structure, oxidative stress mainly occurs when the skin is 
                    exposed to pollutants and environmental aggressors, such as the sun’s UV rays. 
                    When an anti-oxidant such as vitamin C is added to the skin, it combats the oxidative 
                    stress, slows the aging process and protects the skin.</h3>

                    <br/>

                    <h1 id="vitamin-c"> When to Use:</h1>
                    <h3>
                    Immediately after cleanser, morning or night.</h3>
                    <br/>

                    <h1 id="vitamin-c"> What to Look For:</h1>
                    <h3>
                        The most beneficial form of vitamin C is Ascorbic Acid AKA L-ascorbic acid. 
                        Other forms: sodium ascorbyl phosphate, ascorbyl palmitate, retinyl ascorbate,
                     tetrahexyldecyl ascorbate, magnesium ascorbyl phosphate, and ascorbyl glucoside. Because
                     vitamin c is very unstable, the best way to use it is in a oil-based serum.</h3>
        

                        <br/>
                    <h3>
                     Reference: How does Vitamin C Help Skin? Source: paulaschoice.com. 
                    </h3>

                </div>
            </div>
        )
    }
}

export default Education;