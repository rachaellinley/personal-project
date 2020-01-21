import React from "react";
import { Switch, Route } from "react-router-dom";
import GuestLanding from "./Components/GuestLanding/GuestLanding";
import AllReviews from "./Components/AllReviews/AllReviews"
import Profile from "./Components/Profile/Profile";
import AddReview from "./Components/AddReview/AddReview";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";
import EditReview from "./Components/EditReview/EditReview";
import FeaturedProduct from "./Components/FeaturedProduct/FeaturedProduct"

export default (
    <Switch>
        <Route component={GuestLanding} exact path="/" />
        <Route component= {AllReviews} exact path="/AllReviews/"/>
        <Route component={Profile } exact path="/profile/:user_id"/>
        <Route component={AddReview} exact path="/AddReview/"/>
        <Route component={Education} exact path="/Education/"/>
        <Route component={Contact} exact path ="/Contact/"/>
        <Route component={EditReview} exact path="/EditReview/:review_id" />
        <Route component={FeaturedProduct} exact path="/FeaturedProduct" />
        
        <Route render={ () => {
            return <h1>404 Page Not Found. </h1>
        }}/>
    </Switch>
)
