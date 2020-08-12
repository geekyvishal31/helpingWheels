const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const customers = require('../models/customer');

router.post('/',(req,res)=>{
  let errors = [];
    if(!req.body.memberId){
      errors.push({message:'please enter your member ID'});
      console.log('member ID error');
      }
    
    if(!req.body.mobile){
      errors.push({message:'please enter a mobile number'});
      console.log('mobile number error');
    }

    if (errors.length > 0) {
     res.render('offerbook')

   } else {
     customers.findOne({customerId:req.body.memberId},function(err,obj){
       var name = obj.fullName;
       res.render('successoffer',{
         membername:name
       });
       console.log(name);
     });
    }
  });         
        
module.exports = router;

