const express = require('express');
const router = express.Router();

router.get('/dummy',function(req,res){
    res.render('dummy');

});

module.exports = router;



// //web push setup
// webpush.setVapidDetails('mailto:vardhaanrajsingh@gmail.com',publicVapidKey,privateVapidKey);

// //Subscribe Route
// app.post('/subscribe',(req,res)=>{
//    //Get push subscription object
//    //const subscription = req.body;

//    //Send 201 - resource created
//    res.status(201).json({});

//    //create payload
//    const payload = JSON.stringify({ title: 'Helping Wheels'});

//    //Pass object into sendnotification
//    webpush.sendNotification("subscription",payload).catch(err => console.error(err));
// });


// console.log('Service worker loaded');


// self.addEventListener('push', e => {
//   const data = e.data.json();
//   console.log('push Received...');
//   self.registration.showNotification(data.title,{
//     body: 'Notified by helping wheels',

//   });
// });