require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const app = express();
const nodemailer = require("nodemailer");
const path = require ('path');

//controllers
const ac = require("./controllers/authController");
const rc = require("./controllers/reviewsController");

//dotenv
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING, EMAIL, PASSWORD} = process.env;

//middleware
app.use(express.json());

app.use( express.static( `${__dirname}/../build` ) );
//nodemailer
var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: `${EMAIL}`,
    pass: `${PASSWORD}`
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

app.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `

  var mail = {
    from: name,
    to: 'personalprojectdm27@gmail.com',  //Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

//end nodemailer



// session
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  }))

  //db
  massive(CONNECTION_STRING).then(db => {
    app.set("db", db);
    console.log("db is connected!")
  })

//de-structured controllers
//authentication controller 
const {user, registerUser, loginUser, logout} = ac;

//reviews controller
const { addReview, allReviews, deleteReview, editReview, userReviews} = rc; 

//auth endpoints
app.get("/auth/user", user);
app.post("/auth/register", registerUser);
app.post("/auth/login", loginUser);
app.get("/auth/logout", logout);

//reviews endpoints 
app.post("/api/reviews", addReview);
app.get("/api/reviews", allReviews);
app.delete("/api/reviews/:review_id", deleteReview)
app.put("/api/reviews/:review_id", editReview)
app.get("/api/reviews/profile", userReviews)

//point your server to your front end static files 
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
});


app.listen(SERVER_PORT, () => {
    console.log(`Server Port Listening On: ${SERVER_PORT}`)
  })