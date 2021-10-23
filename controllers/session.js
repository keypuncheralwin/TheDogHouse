const express = require("express");

// const Users = require("../models/users")

const router = express.Router();

router.post('/', (req, res) => {
    res.json({'message': 'Session Palceholder'});
    
    
});



module.exports = router;