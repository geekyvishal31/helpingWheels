const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const customers = require('../models/customer');


router.get('/',function(req,res){
  res.render('login');
});

passport.use(new LocalStrategy({usernameField:'customerId'},(customerId,password,done)=>{   //by default the passport verifies the username and we need to verify the email
  //so we need to overwrite certain code to make it authenticate using email
         console.log('inside findOne ');
         customers.findOne({customerId:customerId}).then(user=>{
               console.log(user.fullName);
               if(!user)return done(null,false);
                   console.log('before compare')
               bcrypt.compare(password,user.password,(err,matched)=>{
                   if(err) return err;
                   if(matched){
                      console.log('logged in');
                      return done(null,user);
                    }else{
                      console.log('incorrect password');
                      return done(null,false);
                    }
                });
           });
 })) ;
    passport.serializeUser(function(user,done){
        done(null,user.id);
   });
    passport.deserializeUser(function(id,done){
       customers.findById(id,function(err,user){
done(err,user);
     });
 });
router.post('/',
passport.authenticate('local'),
function (req,res){  
  var customerId = req.body.customerId;
  customers.findOne({customerId:customerId}, function(err,obj) { 
  res.render( 'successlogin',{
     aName:obj.fullName,
     oid:obj._id
  });
});

   });//(req,res,next)



module.exports = router;