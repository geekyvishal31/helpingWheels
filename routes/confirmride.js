const express = require('express');
const router = express.Router();
const ridedetail = require('../models/rideinfo');




router.get('/',function(req,res){
    var rideid = req.query.id;
    console.log(rideid);
    ridedetail.findById(rideid,function(err,ride){
      res.render('confirmride',{
         pName:ride.name,
         src:ride.source,
         dest:ride.destination,
         member:ride.members,
         number:ride.mobile,
         id:rideid
      });
    });

    
});


module.exports = router;

