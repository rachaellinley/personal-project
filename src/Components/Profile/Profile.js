import React, { Component } from 'react';
import AddReview from "../AddReview/AddReview"
import { userReviews } from "../../redux/reducers/reviewsReducer";
import { connect } from 'react-redux';
import { deleteReview } from '../../redux/reducers/reviewsReducer'
import { logoutUser, getSession } from "../../redux/reducers/authReducer"
import { Link } from "react-router-dom";

class Profile extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    componentDidMount() {
        console.log("mounted");
        this.props.userReviews();
        this.props.getSession();
    }

    componentDidUpdate(prevProps) {
        //think of this as a listener that changes when myReviews updates
        // console.log(this.props.myReviews.length)
        // if(prevProps.myReviews.length !== this.props.myReviews.length){
        //     this.props.userReviews()
        // }
    }

    handleLogout = () => {

        const { logoutUser } = this.props;
        logoutUser();
    }

    render() {
        const { first_name } = this.props;
        console.log(this.props.myReviews, this.props.reviews)
        const { myReviews, deleteReview } = this.props;
        const myReviewsMapped = myReviews.map((myReview, i) => {
            return (
                <div key={i}>
                    <h3>Category: {myReview.category_name}</h3>
                    <h3>Brand: {myReview.brand}</h3>
                    <h3>Product: {myReview.product}</h3>
                    <h3>Content: {myReview.content}</h3>
                    <Link to={`/EditReview/${myReview.review_id}`}><button>Edit</button></Link>
                    <button onClick={() => { deleteReview(myReview.review_id) }}>Delete</button>
                </div>
            )
        })

        return (
            <div>

                <h1>Hi, {first_name} </h1>
                <AddReview />
                {myReviewsMapped}
                <Link to='/'><button onClick={this.handleLogout}>Logout</button></Link>

            </div>

        )
    }
}

const mapStateToProps = reduxState => {
    return {
        myReviews: reduxState.reviewsReducer.myReviews,
        reviews: reduxState.reviewsReducer.reviews,
        first_name: reduxState.authReducer.first_name

    }
}

export default connect(mapStateToProps, { deleteReview, userReviews, logoutUser, getSession })(Profile);