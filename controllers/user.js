const express = require("express");
const users = require("../models/users");

const router = express.Router();


router.post("/", (req, res) => {
    const { name, email, state_code, fact, password} = req.body
    console.log(name)
    console.log(email)
    console.log(state_code)
    console.log(fact)
    console.log(password)

  if (req.body.name.length > 45) {
    return res.status(400).json({ message: "name is too long" });
  } else if (req.body.name === "" || req.body.name === undefined) {
    return res.status(400).json({ message: "requires a name" });
  } else if (req.body.email === "" || req.body.email === undefined) {
    return res.status(400).json({ message: "requires a email" });
  } else if (req.body.password === "" || req.body.password === undefined) {
    return res.status(400).json({ message: "requires a password" });
  } else if (req.body.state_code === "" || req.body.state_code === undefined) {
    return res.status(400).json({ message: "requires a state" });
  } else if (req.body.name.length < 17) {
    users
      .insertUser(name, email, state_code, req.body.fact, req.body.password)
      .then(() => {
        res.json({ message: "all good" });
      }).catch(err=>{
        return res.status(400).json({ message: "Email is not unique" });

      });
  }
});

module.exports = router;
