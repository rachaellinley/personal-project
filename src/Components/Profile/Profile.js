import React, { Component } from 'react';
import AddReview from "../AddReview/AddReview"
import {userReviews} from "../../redux/reducers/reviewsReducer";
import {connect } from 'react-redux';

class Profile extends Component {
    constructor () {
        super();
        this.state = {
            
        }
    }

    componentDidMount(){
        this.props.userReviews();
    }

render() {
    const { myReviews } = this.props;
    const myReviewsMapped = myReviews.map((myReview, i) =>{
        return (
            <div key={i}>
    <h2>Brand: {myReview.brand}</h2>
        <h3>Product: {myReview.product}</h3>
    <h3>Content: {myReview.content}</h3>

            </div>
        )
    })
        return (
        <div>
            
            <h1>Welcome to your Profile! Where you can see all your reviews and add a review.</h1>
            <AddReview />   
            {myReviewsMapped}

        </div>
        
    )
}
}

const mapStateToProps = reduxState => {
    return {
      myReviews: reduxState.reviewsReducer.reviews
    }
  }

export default connect(mapStateToProps, {userReviews})(Profile);