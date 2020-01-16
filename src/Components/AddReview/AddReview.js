import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addReview} from '../../redux/reducers/reviewsReducer';
import {getSession} from '../../redux/reducers/authReducer';
import { withRouter} from "react-router-dom";



class AddReview extends Component {
    constructor () {
        super();
        this.state = {
            category_name: "",
            brand:"",
            product: "",
            content: ""
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
      }
    
    handleAddReview = () => {
        const { category_name, brand, product, content } = this.state;
    
        const { addReview } = this.props;
    
        addReview({ category_name, brand, product, content })
       
      }


render() {
    return (
        <div>
            <h1> Add a Product Review </h1>
            <input name="category_name" placeholder="Category" value={this.state.category_name} onChange={this.handleChange}/>
            <input name="brand" placeholder="Brand" value={this.state.brand} onChange={this.handleChange}/>
            <input name="product" placeholder="Product" value={this.state.product} onChange={this.handleChange}/>
            <input name="content" placeholder="Content" value={this.state.content} onChange={this.handleChange}/>
            <button onClick={this.handleAddReview}>Add</button>
            
        </div>
    )
}
}

const mapStateToProps = reduxState => {
    return {
      user_id: reduxState.authReducer.user_id
    }
  }
  
  export default withRouter(connect(mapStateToProps, {
    addReview,
    getSession
  })(AddReview))