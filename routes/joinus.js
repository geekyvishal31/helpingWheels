const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
    res.render('joinus');
});

module.exports = router;