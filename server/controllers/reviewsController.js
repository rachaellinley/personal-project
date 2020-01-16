// const bcrypt = require("bcryptjs")

async function addReview (req, res){
    const { category_name, brand, product, content} = req.body;
    const user_id = req.session.user.user_id;
  
    const db = req.app.get("db");
  
    const addedReview = await db.reviews.addReview([category_name, brand, product, content, user_id]);
    console.log(addedReview)
    res.status(200).json(addedReview);
}
async function allReviews(req, res){
    const db = req.app.get("db");
    const reviews = await db.reviews.allReviews();

    res.status(200).json(reviews);
}

async function deleteReview(req, res) {
   
    const db = req.app.get("db");
    const {review_id} = req.params;
  
    const deleteReview = await db.reviews.deleteReview(review_id)
    res.status(200).json(deleteReview);
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
    const userReviews = await req.app.get('db').reviews.userReviews([req.session.user.user_id]);
    return res.status(200).send(userReviews);
}

 

module.exports = {
    addReview,
    allReviews,
    deleteReview,
    editReview,
    userReviews

}