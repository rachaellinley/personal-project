import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addReview} from '../../redux/reducers/reviewsReducer';
import {getSession} from '../../redux/reducers/authReducer';
import { withRouter} from "react-router-dom";
import "./AddReview.css"



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
            <h1 id="add-review"> Add a Product Review </h1>

            <select name="category_name" placeholder="Category" onChange={this.handleChange} value={this.state.category_name}>
                
                <option value="Cleanser"> Cleanser </option>
                <option value= "Toner"> Toner </option>
                <option value="Moisturizer"> Moisturizer </option>
                <option value="Scrub"> Scrub </option>
                <option value="Treatment"> Treatment </option>
                <option value="Serum"> Serum </option>
                <option value="Lip"> Lip Treatment </option>
                <option value="Shampoo"> Shampoo </option>
                <option value="Conditioner"> Conditioner </option>
                </select>

            <input name="brand" placeholder="Brand" value={this.state.brand} onChange={this.handleChange}/>
            <input name="product" placeholder="Product" value={this.state.product} onChange={this.handleChange}/>
           <div>
            <input id="review-input" name="content" value={this.state.content} onChange={this.handleChange}/>
            </div>
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