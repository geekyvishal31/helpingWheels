const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const socket = require('socket.io');
const webpush = require('web-push');

const publicVapidKey='BBNKHEprAZJiogNxP0omFGhLCjTZkX0zFn09US5ZRK9AHVVMXlRge1e2Ki4Pjvwxv0_7xyWqESUqu8H3lsnjIxQ';
const privateVapidKey='I3yd9K8g8pCVzquh3pU5KJhufE-aGLbxXiDC0EmYHAY';

//mongoose connectivity
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/helpingwheel').then(db=>{
  console.log('Mongo Connected');
}).catch(error=> console.log("could not connect"+ error));

//bodyparser middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

//web push setup
webpush.setVapidDetails('mailto:vardhaanrajsingh@gmail.com',publicVapidKey,privateVapidKey);

//Subscribe Route
app.post('/subscribe',(req,res)=>{
   //Get push subscription object
   const subscription = req.body;

   //Send 201 - resource created
   res.status(201).json({});

   //create payload
   const payload = JSON.stringify({ title: 'Helping Wheels'});

   //Pass object into sendnotification
   webpush.sendNotification(subscription,payload).catch(err => console.error(err));
});

//using passport modules
app.use(passport.initialize());
app.use(passport.session());



//middleware
app.use(express.static(path.join(__dirname,'public')));

//testing
//let home = require('./routes/dummy');
//app.use('/',home);

//route path for home page
 let home = require('./routes/home');
 app.use('/',home);

//route path for offer a ride page
let offerride = require('./routes/offer');
app.use('/offer',offerride);

//route path for find a ride page
let findride = require('./routes/find');
app.use('/find',findride);

//route path for signup page
let signin = require('./routes/signup');
app.use('/signup',signin);

//route path for join us page
let join = require('./routes/joinus');
app.use('/joinus',join);

//route path for login page
let login = require('./routes/login');
app.use('/login',login);

//route path for offerbook page
let offbook = require('./routes/offerbook');
app.use('/offerbook',offbook);

//route path for customer-id page
let cid = require('./routes/customer-id');
app.use('/customer-id',cid);

//route path for verifymember page
let vid = require('./routes/verifymember');
app.use('/verifymember',vid);

//route path for confirmride page
let cnfride = require('./routes/confirmride');
app.use('/confirmride',cnfride);

//route path for availablerides page
let avride = require('./routes/availablerides');
app.use('/availablerides',avride);



app.set('views',path.join(__dirname,'views'));
app.engine('handlebars',exphbs({"defaultLayout":"layout"}));
app.set('view engine','handlebars');
app.locals.sTitle = 'Helping Wheels'; //to have something on all the routes



const port=5500;
var Server = app.listen(port,(req,res)=>{
    console.log(`listening to port ${port}` );
});

//socket setup
// var io = socket(Server);
// io.on('connection',function(socket){
//   console.log('made socket connection',socket.id);
//   socket.on('chat',function(data){
//      io.sockets.emit('chat',data);
//   });
// });
