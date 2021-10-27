const express = require("express");
const formidable = require('formidable');
const users = require("../models/users");
const dogs = require("../models/dogs");

const dotenv = require('dotenv')
dotenv.config();

const router = express.Router();

console.log(process.env.API_SECRET)



var cloudinary = require('cloudinary').v2;
const Dogs = require("../models/dogs");
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});

router.get("/", (req, res) => {
    
  console.log("retriving all the doggos");
  Dogs.getAllDogs().then((dogs) => {
    res.json(dogs);
  });
    
  });

router.post("/add", (req, res) => {
  console.log(req.body)
  const { name, breed, age, gender, state_code, description, imageUrls, price} = req.body

  if(req.session.email){
    const userEmail = req.session.email //retriving users email from session

    //retriving users id from the database
  users.findUserId(userEmail).then((response) => {
    const user_id = response[0].id

    //adding the dog into the database
    Dogs.addDog(name, breed, age, gender, state_code, description, imageUrls, price, user_id).then(() => 
    { 
      console.log('dog added')
      res.json({ message: "dog added" });
    }).catch(err=>{
      console.log('dog not added')
      return res.status(400).json({ message: 'dog not added' });
    });


  });



  }else{return res.status(403).json({ message: "Must be logged in to add a dog" });}
  
  
});



router.post("/images", (req, res,next) => {

    const form = formidable({
      multiples: true
    });
  
    form.parse(req, (err, fields, files) => {
      if(err){
        next(err)
        return
      }
      cloudinary.uploader.upload(files.images.path, {
          
          public_id: Date.now() + '_' + files.images.name
        },
        function (error, result) {
          if(error){
            next(error)
            return
          }
          res.json(result);
        });
  
      });
  
  });

module.exports = router;