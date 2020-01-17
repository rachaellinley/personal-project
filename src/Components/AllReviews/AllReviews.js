import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getAllReviews} from '../../redux/reducers/reviewsReducer';
import "./AllReviews.css"


class AllReviews extends Component {
    constructor () {
        super();
        this.state = {
        }
    }

    componentDidMount() {
        this.props.getAllReviews();
      }

render() {

    const { reviews } = this.props;
    console.log(reviews)
    const reviewsMapped = reviews.map((review, i) => {
        console.log(review) 
        return (
        <div id="card" key={i}>
            
           <h2>Brand:{review.brand}</h2> 
        <h3>Product: {review.product}</h3>
           <h3>Content:{review.content}</h3>
        </div>)})

    return (
        <div>
            <h3>Search Reviews</h3>
            <input placeholder="Search"></input>
            <button> Go </button>
            
            <h1>All Reviews</h1>
            {reviewsMapped}
        </div>
            )
    
    }
    
}

const mapStateToProps = reduxState => {
    return {
      reviews: reduxState.reviewsReducer.reviews
    }
  }

export default connect(mapStateToProps, {getAllReviews})(AllReviews);