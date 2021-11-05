const express = require("express");
const users = require("../models/users");
const validator = require("email-validator") //used to validate email addresses

const router = express.Router();


router.post("/", (req, res) => {
    const { name, email, state_code, fact, password, passwordConfirm} = req.body

    console.log(req.body)

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
  } else if (password !== passwordConfirm) {
    return res.status(400).json({ message: "Passwords do not match" });
  } else if (!validator.validate(email)) {
    return res.status(400).json({ message: "Please enter a valid email address" });
  } else if (name.length < 17) {
    users
      .insertUser(name, email, state_code, fact, password)
      .then(() => {
        res.json({ message: "added user to database" });
      }).catch(err=>{
        return res.status(400).json({ message: "failed to add user to database" });

      });
  }
});

router.get("/:id", (req, res) => {
  const userId = req.params.id
    users.findUserById(userId).then((userDetails)=>{
      console.log(userDetails)
       res.json(userDetails)
    })
  
});

router.post("/editInfo", (req, res) => {
  const { name, email, state_code, fact, id} = req.body
  console.log(name)
  console.log(email)
  console.log(id)
  console.log(state_code)
  console.log(fact)
  console.log(name.length)

  console.log(req.body)

if (name.length > 70) {
  return res.status(400).json({ message: "name is too long" });
} else if (name === "" || name === undefined) {
  return res.status(400).json({ message: "requires a name" });
} else if (email === "" || email === undefined) {
  return res.status(400).json({ message: "requires a email" });
} else if (state_code === "" || state_code === undefined) {
  return res.status(400).json({ message: "requires a state" });
} else if (!validator.validate(email)) {
  return res.status(400).json({ message: "Please enter a valid email address" });
} else{
    users.updatUserInformation(name, email,state_code,fact,id).then(() => {
      console.log("updated")
      res.json({ message: "User's information has been updated" });
    }).catch(err=>{
      return res.status(400).json({ message: "failed to add user to database" });

    });
}
});

module.exports = router;
