const bcrypt = require("bcryptjs")

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
    const review_id = +req.params.review_id;
    const user_id = req.session.user.user_id;
    const db = req.app.get("db");
  
    const updatedReviews = await db.reviews.deleteReview([review_id, user_id])
  
    res.status(200).json(updatedReviews);
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

 

module.exports = {
    addReview,
    allReviews,
    deleteReview,
    editReview

}