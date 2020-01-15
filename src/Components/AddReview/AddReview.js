import React, { Component } from 'react';


class AddReview extends Component {
    constructor () {
        super();
        this.state = {
            
        }

    }


render() {
    return (
        <div>
            <h1> Add a Product Review </h1>
            <input placeholder="category"/>
            <input placeholder="brand"/>
            <input placeholder="product"/>
            <input placeholder="content"/>
            <button>Add</button>
            
        </div>
    )
}
}

export default AddReview;