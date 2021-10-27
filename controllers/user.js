const express = require("express");
const users = require("../models/users");

const router = express.Router();


router.post("/", (req, res) => {
    const { name, email, state_code, fact, password, passwordConfrim} = req.body
    console.log(name)
    console.log(email)
    console.log(state_code)
    console.log(fact)
    console.log(password)
    console.log(passwordConfrim)

  if (name.length > 45) {
    return res.status(400).json({ message: "name is too long" });
  } else if (name === "" || name === undefined) {
    return res.status(400).json({ message: "requires a name" });
  } else if (email === "" || email === undefined) {
    return res.status(400).json({ message: "requires a email" });
  } else if (password === "" || password === undefined) {
    return res.status(400).json({ message: "requires a password" });
  } else if (state_code === "" || state_code === undefined) {
    return res.status(400).json({ message: "requires a state" });
  } else if (password !== passwordConfrim) {
    return res.status(400).json({ message: "Passwords do not match" });
  } else if (name.length < 17) {
    users
      .insertUser(name, email, state_code, fact, password)
      .then(() => {
        res.json({ message: "all good" });
      }).catch(err=>{
        return res.status(400).json({ message: "Email is not unique" });

      });
  }
});

module.exports = router;
