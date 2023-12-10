const express =require('express');
const route=express.Router();
const verfiy = require('./verfiy');
const { updateUser, getUser, getOneUser, deletUser, DeleteOneUser } = require('../controller/user');
 
   

route.put('/updateUser/:id', verfiy.verfiyUser,updateUser);
route.get('/getUser',verfiy.verfiyAdmin,getUser);
route.get('/getUser/:id',verfiy.verfiyUser,getOneUser);
route.delete('/deleteUser',verfiy.verfiyAdmin ,deletUser);
route.delete('/deleteUser/:id',verfiy.verfiyUser,DeleteOneUser);


module.exports=route