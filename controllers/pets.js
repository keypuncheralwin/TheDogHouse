const express = require("express");
const formidable = require('formidable');
const users = require("../models/users");
const dogs = require("../models/dogs");
const favourites = require("../models/favourites");
const dotenv = require('dotenv')
dotenv.config();
const router = express.Router();
console.log(process.env.API_SECRET)
var cloudinary = require('cloudinary').v2;
const Dogs = require("../models/dogs");
const Favourites = require("../models/favourites");
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});

//getting all dogs
router.get("/", (req, res) => {
    
  console.log("retriving all the doggos");
  Dogs.getAllDogs().then((dogs) => {
    res.json(dogs);
  });
    
  });

//getting one dog by id
router.get("/:id", (req, res) => {

  const dogId = req.params.id;  
  console.log("retriving all the doggos");
  Dogs.getDogById(dogId).then((dog) => {
    res.json(dog);
  });
      
});



router.post("/add", (req, res) => {
  console.log(req.body)
  const { name, breed, age, gender, state_code, description, imageUrls, price} = req.body
  if(req.session.email){
    const userEmail = req.session.email //retriving users email from session
    //retriving users id from the database
    const user_id = req.session.user_id
    //adding the favourites into the database
    Dogs.addDog(name, breed, age, gender, state_code, description, imageUrls, price, user_id).then(() => 
    { 
      console.log('dog added')
      res.json({ message: "dog added" });
    }).catch(err=>{
      console.log('dog not added')
      return res.status(400).json({ message: 'dog not added' });
    });
  }else{return res.status(403).json({ message: "Must be logged in to add a dog" });}
  
  
});

router.get("/favourites", (req,res) => {
  if (req.session.user_id){
    const userId = req.session.user_id
    Favourites.getFavIDByUserID(userId).then ((favs) => {
      
      res.json(favs);
    }).catch(err=>{
      console.log(err)
      console.log("couldn't retrive favs" )
      return res.status(403).json({ message: "couldn't retrive favs" });
    });
  }else{
    return res.status(403).json({ message: 'User not logged in' });
  }
})
router.post("/favourites/:id", (req, res) => {
  const dogId = req.params.id;
  const userId = req.session.user_id
  Favourites.addFav(userId,dogId).then(() => 
  { 
    console.log('favourite added')
    return res.status(200).json({ message: 'favourite added' });
  }).catch(err=>{
    console.log(err)
    console.log('favourite not added')
    return res.status(403).json({ message: 'favourite not added' });
  });
})

router.delete("/favourites/:id", (req, res) => {
  const dogId = req.params.id;
  Favourites.deleteFavByUserID(dogId).then(() => 
  { 
    console.log('favourite removed')
    return res.status(200).json({ message: 'favourite removed' });
  }).catch(err=>{
    console.log(err)
    console.log('favourite not removed')
    return res.status(403).json({ message: 'favourite not removed' });
  });
})

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


router.get("/user/dogs", (req,res)=>{
  const user_id = req.session.user_id
  console.log(user_id)
  dogs.getDogThatUserHasAdded(user_id).then((dogs)=>{
    res.json(dogs);

  })
})

router.get("/user/dogs/:dogid", (req,res)=>{
  const dog_id = req.params.dogid
  dogs.getDogAndPoster(dog_id).then((dogs_and_user)=>{
    console.log(dogs_and_user)
    console.log(dogs_and_user[0].user_id)
    console.log(req.session.user_id)
    if(dogs_and_user[0].user_id===req.session.user_id){
      
      return res.status(400).json({ message: "You can't message yourself lol" });

    }else{
      res.json(dogs_and_user);
    }
    

  })
})


router.get("/favourites/dogs", (req, res) => {
  if(req.session.user_id){
    const user_id = req.session.user_id
    Favourites.getFaveDogById(user_id).then((faveDogs)=>{
    console.log(faveDogs)
   res.json(faveDogs)
  
    })
    
  }else{

    res.status(400).json({ message: "User is not logged in" });

  }
 

  });

module.exports = router;