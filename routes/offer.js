const express = require('express');
const router = express.Router();
const socket = require('socket.io');
const ridedetail = require('../models/rideinfo');

router.get('/',function(req,res){
    res.render('offer');
    
});



module.exports = router;