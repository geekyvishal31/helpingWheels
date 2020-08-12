const express = require('express');
const router = express.Router();
const uniqid = require('uniqid');
const customers = require('../models/customer');

router.get('/',function(req,res){
  var custobjid = req.query.id;
  console.log(custobjid);
  uniquenum = uniqid();
  res.render('customer-id',{
      customerid:uniquenum,
      objid:custobjid
  });
  customers.update(
    {_id: custobjid},
    {customerId:uniquenum},
    {multi:true},
    function(err, numberAffected){
      if(err){
        throw err;
      }else{
        console.log('database updated');
      }
    });
});

module.exports = router;
