import React, { Component } from 'react';
import {connect} from 'react-redux';
import {editReview} from "../../redux/reducers/reviewsReducer"
import {getSession} from '../../redux/reducers/authReducer';




class EditReview extends Component {
    constructor () {
        super();
        this.state = {
            category_name: "",
            brand:"",
            product: "",
            content: ""
        }
    }
    componentDidMount() {
    
    }

    handleChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value 
        })
      }
 
      handleEditReview= (review_id) => {
          const {category_name, brand, product, content} = this.state;
          const {editReview} = this.props;
          const updated_review = {
              category_name,
              brand,
              product,
              content
          }
          editReview(review_id, updated_review)
      }

render() {
    return (
        <div>
            <h1> Edit This Review</h1>
    <h1>{this.props.match.params.review_id}</h1>
            <input name="category_name" placeholder="Category" onChange ={this.handleChange} />
            <input name="brand" placeholder="Brand" onChange ={this.handleChange} />
            <input name="product" placeholder="Product" onChange ={this.handleChange}/>
            <input name="content" placeholder="Content"  onChange ={this.handleChange}/>
            <button onClick={() => (this.handleEditReview(this.props.match.params.review_id))}>Save Changes</button>
            
        </div>
    )
}
}

const mapStateToProps = reduxState => {
    return {
      reviews: reduxState.reviewsReducer.reviews
    }
  }
  
  export default connect(mapStateToProps, {
    editReview,
    getSession
  })(EditReview)