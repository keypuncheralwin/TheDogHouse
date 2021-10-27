const express = require("express");
const users = require("../models/users");

const Users = require("../models/users");

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

module.exports = router;