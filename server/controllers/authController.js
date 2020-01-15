const bcrypt = require("bcryptjs")

async function user(req, res) {
  if (req.session.user) {
    res.status(200).json(req.session.user)
  }
}

//register user 
async function registerUser(req, res) {
    const { username, password, first_name } = req.body;
    const db = req.app.get("db");
  
    // check for the username
    const foundUser = await db.auth.checkForUsername(username)
  
    //if user is found, send a message
    if (foundUser[0]) {
      res.status(401).json("Username is already taken.")
// hash the password and store the new user into db
    } else {
      // salt
      const salt = await bcrypt.genSaltSync(10);
      // hash
      const hash = await bcrypt.hashSync(password, salt)
      // store the new user into the database
      const newUser = await db.auth.registerUser([
        username,
        hash,
        first_name
      ])
  
      // store the new user on session
      req.session.user = {
        user_id: newUser[0].user_id,
        username: newUser[0].username,
        first_name: newUser[0].first_name
      }
      console.log(req.session.user);
      res.status(200).json(req.session.user)
    }
  }


  //login user 
  async function loginUser (req, res){
      const { username, password } = req.body;
        const db = req.app.get("db");

        //check to see if username exists
        const foundUser = await db.auth.checkForUsername(username)
        //if not found, send back incorrect username/password
        if(!foundUser[0]){
            res.status(400).json("Username or password is not correct.");
        } else {
            const isAuthenticated = bcrypt.compareSync(password, foundUser[0].hash)
            if (!isAuthenticated) {
                res.status(403).json("Password is not correct.")
            } else {
                req.session.user = {
                    user_id: foundUser[0].user_id,
                    username: foundUser[0].username
                }
            }
            console.log(req.session.user);
            //send an ok with the user on session
            res.status(200).json(req.session.user)
        }
    }

    //logout your user
    async function logout (req, res){
        req.session.destroy;
        res.sendStatus(200);

    }


module.exports = {
    user,
    registerUser,
    loginUser,
    logout
}

