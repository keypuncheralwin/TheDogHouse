const express = require("express");


const router = express.Router();

router.get("/", (req, res) => {
    
      res.json({'message': 'Basic page working'});
    
  });

module.exports = router;