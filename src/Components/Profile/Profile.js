import React, { Component } from 'react';
import AddReview from "../AddReview/AddReview"
import {userReviews} from "../../redux/reducers/reviewsReducer";
import {connect } from 'react-redux';
import { deleteReview } from '../../redux/reducers/reviewsReducer'

class Profile extends Component {
    constructor () {
        super();
        this.state = {

            
        }
    }

    componentDidMount(){
        this.props.userReviews();
    }

    componentDidUpdate(prevProps){
        //think of this as a listener that changes when myReviews updates
        if(prevProps.myReviews !== this.props.myReviews){
            this.props.userReviews()
        }
    }


render() {
    const { myReviews } = this.props;
    const myReviewsMapped = myReviews.map((myReview, i) =>{
        return (
            <div key={i}>
    <h3>Category: {myReview.category_name}</h3>
        <h3>Brand: {myReview.brand}</h3>
        <h3>Product: {myReview.product}</h3>
        <h3>Content: {myReview.content}</h3>
    <button>Edit</button>
    <button onClick={() => deleteReview(myReview.review_id)}>Delete</button>

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
      myReviews: reduxState.reviewsReducer.myReviews
    }
  }

export default connect(mapStateToProps, {userReviews})(Profile);