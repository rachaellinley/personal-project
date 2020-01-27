import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getAllReviews} from '../../redux/reducers/reviewsReducer';
import "./AllReviews.css"


class AllReviews extends Component {
    constructor () {
        super();
        this.state = {
            filteredString: '',
            reviews: []
        }
    }

    componentDidMount() {
        this.props.getAllReviews().then(() => this.setState({reviews: this.props.reviews}));
      }

      handleClear = () => { 
        this.setState({reviews: this.props.reviews});
      }

      handleChange = e => {
          if (e.target.value === "All Categories"){
            this.props.getAllReviews().then(() => this.setState({reviews: this.props.reviews}));
          } else {
            this.handleClear()
            this.setState({ [e.target.name]: e.target.value })
          }
      }

      handleSearch = () => {
        let filteredReviews = this.state.reviews.filter(reviews => 
            reviews.category_name.includes(this.state.filteredString))

        // console.log(filteredReviews)
        this.setState({reviews: filteredReviews})
        
      }


render() {

    const { reviews } = this.state;
   
    const reviewsMapped = reviews.map((review, i) => {
        // console.log(review) 
        return (
        <div id="card" key={i}>
        <h3>Category: {review.category_name}</h3>
        <h3>Brand: {review.brand}</h3> 
        <h3>Product: {review.product}</h3>
        <h3>Content: {review.content}</h3>
       <br/>
        </div>)})

    return (
        <div id="all-reviews-container">
          <h1 id="all-reviews-title">All Reviews</h1>
          <br/>
            <h3>Search Reviews by Category</h3>

            <select placeholder="Search" name="filteredString" onChange={this.handleChange}>
            <option value="">Choose a Category</option>
            <option value="Cleanser">Cleanser</option>
            <option value="Toner">Toner</option>
            <option value="Moisturizer">Moisturizer</option>
            <option value="Scrub">Scrub</option>
            <option value="Treatment">Treatment</option>
            <option value="Serum">Serum</option>
            <option value="Lip Treatment">Lip Treatment</option>
            <option value="Shampoo">Shampoo</option>
            <option value="Conditioner">Conditioner</option>
            </select>

            <button onClick={() => {this.handleSearch()}}> Go </button>
            
           
            
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