const express = require('express');
const router = express.Router();
const rides = require('../models/rideinfo');

router.get('/',function(req,res){
  rides.find({},function(err,obj){
    var myrides=[];
    for(var i=0;i<obj.length;i++){
      myrides.push(obj[i]);
    }
    res.render('availablerides',{
               avrides:myrides
    });
  });
});


module.exports = router;

