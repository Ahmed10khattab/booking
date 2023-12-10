const express= require('express');
const app= express();
const mongo=require('mongoose');
const hotel = require('./routes/hotel');
const auth = require('./routes/auth');
const user =require('./routes/user');
const cookieParser=require('cookie-parser');
const room = require('./routes/room');

mongo.connect('mongodb+srv://user2:uGJJGAKglBFUuXHl@atlascluster.ytbxqwi.mongodb.net/BookingApp?retryWrites=true&w=majority')
.then(()=>{console.log('connected mongoose successfull')},)
.catch((error)=>
    console.log(error)
)



app.use(cookieParser());
 app.use(express.json());
 app.use('/hotel',hotel);
 app.use('/auth',auth);
 app.use('/user',user);
 app.use('/room',room);




app.listen(2000,()=>{
    console.log('created server successfully');
});