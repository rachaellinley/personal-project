// const bcrypt = require("bcryptjs")

async function addReview (req, res){
    const { category_name, brand, product, content} = req.body;
    const user_id = req.session.user.user_id;
  
    const db = req.app.get("db");
  
    await db.reviews.addReview([category_name, brand, product, content, user_id]);
    const userReviews = await req.app.get('db').reviews.userReviews([req.session.user.user_id]);
    // console.log(addedReview)
    res.status(200).json(userReviews);
}
async function allReviews(req, res){
    const db = req.app.get("db");
    const reviews = await db.reviews.allReviews();

    res.status(200).json(reviews);
}

async function deleteReview(req, res) {
   
    const db = req.app.get("db");
    const {review_id} = req.params;
  
    await db.reviews.deleteReview(+review_id)
    const userReviews = await req.app.get('db').reviews.userReviews([req.session.user.user_id]);
    console.log(userReviews);
    res.status(200).json(userReviews);
  }

  async function editReview(req, res) {
    const { brand, product, content } = req.body;
    const review_id = +req.params.review_id;
    const user_id = req.session.user.user_id;
    console.log(user_id);
    console.log(typeof user_id)
  
    const db = req.app.get("db");
  
    const editedReview = await db.reviews.editReview([
      brand,
      product,
      content,
      review_id,
      user_id
    ])
    console.log(editedReview)
    res.status(200).json(editedReview);
  }

async function userReviews (req, res){
  console.log("hit");
  if(req.session.user) {
    const userReviews = await req.app.get('db').reviews.userReviews([req.session.user.user_id]);
    console.log(userReviews);
    if(userReviews){
      res.status(200).send(userReviews);
    }else{
      res.sendStatus(404)
    }
  } else {
    res.sendStatus(500);
  }
}

 

module.exports = {
    addReview,
    allReviews,
    deleteReview,
    editReview,
    userReviews

}