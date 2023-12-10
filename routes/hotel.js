const express =require('express');
const route=express.Router();
const hotel=require('../models/hotel');
const { verfiyAdmin, verfiyUser } = require('./verfiy');
const { addhotel, updatehotel, getHotels, getHotelByCityWithLimit, SearchHotelByMaxMInPrice, getHotelById, deleteById, deletehotel, getCountHotel, getCountHoteltype } = require('../controller/hotel');


route.post('/addHotel',verfiyAdmin,addhotel);
route.put('/updateHotel/:id',verfiyAdmin,updatehotel);
route.get('/getHotel/',verfiyUser,getHotels);
route.get('/getHotelByCityWithLimit/',verfiyUser,getHotelByCityWithLimit );
route.get('/SearchHotelByMaxMInPrice/',verfiyUser,SearchHotelByMaxMInPrice );
route.get('/getHotel/:id',verfiyUser,getHotelById );
route.delete('/deleteHotel',verfiyAdmin,deletehotel);
route.delete('/deleteHotel/:id',verfiyAdmin, deleteById);
route.get('/getCountHotel',verfiyAdmin,getCountHotel );
route.get('/getCountHoteltype',verfiyAdmin,getCountHoteltype);
module.exports=route