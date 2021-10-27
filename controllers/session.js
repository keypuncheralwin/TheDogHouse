const express = require("express");
const users = require("../models/users");

const router = express.Router();

router.post("/", (req, res) => {
  const { email, password} = req.body
  // Get user's name from request, look up in the database, check the password etc.
  users.checkUser(email, password).then((response) => {
    if (response) {
      req.session.email = email;
      console.log("logged in successfully")
      res.json({ message: "logged in successfully" });
      
    }else{
    
      console.log("incorrect login details")
      return res.status(400).json({ message: "incorrect login details" });
    }
  });
});


router.get("/", (req, res) => {
  // Put this in one of the /api/challenges routes.
  if (!req.session.email) {
    // 403 means "forbidden"
    res.status(400).json({ message: "Not logged in" });
  } else {
    // res.json({ username: req.session.email });
    users.getUserByEmail(req.session.email).then((user)=>{
       res.json(user)
    })
  }
});

router.delete("/", (req, res) => {
    req.session.destroy();
    res.json({message: "You have logged out"})
});


module.exports = router;

