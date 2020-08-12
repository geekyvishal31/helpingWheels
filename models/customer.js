const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerschema = new Schema({
  
     fullName:{
       type: String,
       required:true
      },
     mobile:{
        type: Number,
        required:true
      },
     email:{
        type: String,
        required:true
      },
     aadhar:{
        type: Number,
        required:true
      },
     password:{
        type: String,
        required:true
      },
     customerId:{
      type: String,
      required:true,
      default:1
    },
    

});

module.exports = mongoose.model('customer',customerschema); 