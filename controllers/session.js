const express = require("express");
const users = require("../models/users");

const Users = require("../models/users");

const router = express.Router();

router.post("/", (req, res2) => {
  // Get user's name from request, look up in the database, check the password etc.
  users.checkUser(req.body.email, req.body.password).then((res) => {
    if (res) {
      req.session.email = req.body.email;
      res2.json({ message: "logged in successfully" });
    }else{
        return res2.status(400).json({ message: "incorrect login details" });
    }
  });
});

module.exports = router;
