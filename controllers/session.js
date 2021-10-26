const express = require("express");
const users = require("../models/users");

const Users = require("../models/users");

const router = express.Router();

router.post("/", (req, res) => {
  const{email, password} =req.body

  if (email === "" || email === undefined) {
    return res.status(400).json({ message: "Please enter your email" });
  } else if (password === "" || password === undefined) {
    return res.status(400).json({ message: "Please enter your password" });
  }else{
  users.checkUser(req.body.email, req.body.password).then((isUserValid) => {
    if (isUserValid) {
      console.log(isUserValid)
      req.session.email = req.body.email;
      res.json({ message: "logged in successfully" });
    }else{
        res.status(400).json({ message: "incorrect login details" });
    }
  });
}
});

module.exports = router;
