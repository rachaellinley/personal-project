import React, { Component } from 'react';
import AddReview from "../AddReview/AddReview"

class Profile extends Component {
    constructor () {
        super();
        this.state = {
            
        }

    }


render() {
    return (
        <div>
            <h1>Welcome to your Profile! Where you can see all your reviews and add a review.</h1>
            <AddReview />            

        </div>
        
    )
}
}

export default Profile;