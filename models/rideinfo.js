const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rideinfoschema = new Schema({
  
     name:{
       type: String,
       required:true
      },
     source:{
        type: String,
        required:true
      },
     destination:{
        type: String,
        required:true
      },
     members:{
        type: Number,
        required:true
      },
     mobile:{
        type: Number,
        required:true
      }
     
    });

module.exports = mongoose.model('rideinfo',rideinfoschema); 