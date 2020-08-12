const express = require('express');
const router = express.Router();
const customers = require('../models/customer');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


router.get('/',function(req,res){
  res.render('signup');
});


router.post('/',(req,res)=>{
  let errors = [];
    if(!req.body.fullName){
        errors.push({message:'please add a full name'});
        console.log('full name error');
      }
    if(!req.body.email){
      errors.push({message:'please add a email'});
      console.log('email error');
    }
    if(!req.body.mobile){
      errors.push({message:'please add a mobile number'});
      console.log('mobile number error');
    }
    if(!req.body.aadhar){
      errors.push({message:'please add a aadhar card number'});
      console.log('aadhar number error');
    }
    if (!req.body.password) {
      errors.push({message: 'please add a password'});
      console.log('password error');
  }
  if (!req.body.passwordConfirm) {
     errors.push({message: 'please confirm the password'});
     console.log('confirm password error');
  }
  if (req.body.password !== req.body.passwordConfirm) {
    errors.push({message: 'password field don`t match'});
    console.log('confirm password error');
  }

  if (errors.length > 0) {
     console.log(errors);
    res.render('signup', {

        errors: errors,
        fullName: req.body.fullName,
        email: req.body.email,
    });
  } else {
    customers.findOne({email:req.body.aadhar}).then(customer=>{
      if(!customer){

          const newcustomer = new customers({

              fullName: req.body.fullName,
              mobile: req.body.mobile,
              aadhar:req.body.aadhar,
              email: req.body.email,
              password: req.body.password,
          });

          bcrypt.genSalt(10, (err, salt)=>{

              bcrypt.hash(newcustomer.password,salt,(err,hash)=>{  //this newUser.password is coming from the form  ie req.body.password and we are hashing it.

                  newcustomer.password = hash;     //converting the property value that is password into hash password

                  newcustomer.save().then(savedCustomer=>{

                      // req.flash('success_message','you are registered and can login now');
                      res.render('getcustomer-id',{
                        id:newcustomer.id,
                      });
                      console.log('saved');
                  });

              });

          });
      }
  });

  }

});
module.exports = router;







