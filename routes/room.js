const express=require('express');
const route=express.Router();
const { verfiyUser, verfiyAdmin } = require('./verfiy');
 const { updateRoom, Addroom, getrooms, getroombyId, deleterooms, deletOneRoom, getOneRoomInHotel } = require('../controller/room');


route.put('/updateRoom/:id',verfiyAdmin,updateRoom);
route.post('/addRoom/:hotelid',verfiyAdmin ,Addroom)
route.get('/getroom',verfiyUser,getrooms);
route.get('/getroom/:id',verfiyUser,getroombyId);
route.delete('/deleteroom',verfiyAdmin,deleterooms );
route.delete('/deleteroom/:id/:hotelid',verfiyAdmin,deletOneRoom);
route.get('/FindRoomInHotel/:id/:hotelid',verfiyAdmin,getOneRoomInHotel);

module.exports=route