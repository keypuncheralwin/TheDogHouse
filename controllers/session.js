const express = require("express");
const users = require("../models/users");

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
