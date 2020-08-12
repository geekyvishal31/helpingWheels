const express = require('express');
const router = express.Router();
const rides = require('../models/rideinfo');

router.get('/',function(req,res){
    res.render('find');
});

router.post('/',(req,res)=>{
    let errors = [];
      if(!req.body.name){
          errors.push({message:'please add a full name'});
          console.log('full name error');
        }
      if(!req.body.source){
        errors.push({message:'please add a source'});
        console.log('source error');
      }
      if(!req.body.destination){
        errors.push({message:'please add a destination'});
        console.log('destination error');
      }
      if(!req.body.members){
        errors.push({message:'please add a number of members'});
        console.log('mobile number error');
      }
      if(!req.body.mobile){
        errors.push({message:'please add a mobile number'});
        console.log('mobile number error');
      }
      
  
    if (errors.length > 0) {
       console.log(errors);
       console.log("something went rong");
       
      res.render('find', {
  
          errors: errors,
          name: req.body.name,
      });
    } else {
     
            const newride = new rides({
  
                name: req.body.name,
                source: req.body.source,
                destination:req.body.destination,
                members: req.body.members,
                mobile: req.body.mobile,
            });
            
            newride.save().then(savedRide=>{

                // req.flash('success_message','you are registered and can login now');
                res.render('proceed',{
                  id:newride.id,
                });
                console.log('saved');
            });
        }

    });      

module.exports = router;




