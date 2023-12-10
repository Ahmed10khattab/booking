const Room=require('../models/room');
const hotel = require('../models/hotel');
 



const Addroom=async(req,res,next)=>{
    const hotelId=req.params.hotelid;
    const newRoom=new Room(req.body) ;
    try {
        const SavedRoom=await newRoom.save();
        try {
            await hotel.findByIdAndUpdate(hotelId,{$push:{rooms: SavedRoom._id}}) ;
               

        } catch (error) {
            next(error);
        }
        res.status(200).json(SavedRoom);


    } catch (error) {
        next(error);

       es.status(500).json("error in add room");
        
    }
}
const getrooms=async(req,res,next)=>{
  
    try {
      const rooms=await Room.find();
      res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json(error);

    }
}
const getOneRoomInHotel=async(req,res)=>{
    const hotelId=req.params.hotelid;
    const roomid=req.params.id;
    try {
        const hotel1= await hotel.findById(hotelId);
    
        try {
            const Room=await Room.findById({ _id: roomid});
             
            res.status(200).json(Room);
        } catch (error) {
            return res.status(404).json("not found room");
        }
        

    } catch (error) {
        return res.status(404).json("not found hotel");
    }
}

const getroombyId=async(req,res,next)=>{
    
    next()
    try {
      const Oneroom=await Room.findById(req.params.id);
      res.status(200).json(Oneroom);
    } catch (error) {
        res.status(500).json(error);

    }
}

const deleterooms=async(req,res)=>{
    try {
      const rooms=await Room.deleteMany();
      res.status(200).json('all room deleted success');
    } catch (error) {
        res.status(500).json(error);

    }
}

const deletOneRoom=async(req,res)=>{
    const hotelId=req.params.hotelid;

    try {
      const Oneroom=await Room.findByIdAndDelete (req.params.id);
     
      try {
        await hotel.findByIdAndUpdate(hotelId,{$pull:{rooms:req.params.id }}) ;
           

    } catch (error) {
        next(error);
    }
    res.status(200).json("room deleted success");

    } catch (error) {
        res.status(500).json(error);

    }
}

const updateRoom=async(req,res)=>{
    try {
      const updatehotel=await Room.updateOne({"number._id":req.params.id},{$push:{"number.$.unavilableDate":req.body.dates}})
         
      res.status(200).json({msg:"update success",updatehotel});
    } catch (error) {
        res.status(500).json(error);

    }
}

module.exports={getOneRoomInHotel,getroombyId,getrooms,Addroom,updateRoom,deletOneRoom,deleterooms}