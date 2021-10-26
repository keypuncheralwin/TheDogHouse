const express = require("express");
const formidable = require('formidable');

const dotenv = require('dotenv')
dotenv.config();

const router = express.Router();

console.log(process.env.API_SECRET)



var cloudinary = require('cloudinary').v2;
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});

router.get("/", (req, res) => {
    
      res.json({'message': 'Basic page working'});
    
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