const hotel=require('../models/hotel');

const addhotel=async(req,res)=>{
    const addhotel=new hotel(req.body);
    try {
   const savedHotel =await addhotel.save();
   res.status(200).json(savedHotel);
    } catch (error) {
        res.status(500).json(error);

    } 
}


const updatehotel =async(req,res)=>{
    try {
      const updatehotel=await hotel.findByIdAndUpdate(req.params.id,
        {$set:req.body},
        {new:true});
      res.status(200).json({msg:"update success",updatehotel});
    } catch (error) {
        res.status(500).json(error);

    }
}


const deletehotel=async(req,res)=>{
    try {
      const hotels=await hotel.deleteMany();
      res.status(200).json('all hotel deleted success');
    } catch (error) {
        res.status(500).json(error);

    }
}



const deleteById=async(req,res)=>{
    try {
      const Onehotel=await hotel.findByIdAndDelete (req.params.id);
      res.status(200).json("hotel deleted success");
    } catch (error) {
        res.status(500).json(error);

    }
};



const getHotels=async(req,res,next)=>{
   
    try {
      const hotels=await hotel.find();
      res.status(200).json(hotels);
    } catch (error) {
        res.status(500).json(error);

    }
}



const getHotelByCityWithLimit=async(req,res,next)=>{
    const limit=req.query.limit; 
    const cities1=req.query.cities;   
      try {
        const hotels=await hotel.find({City:cities1}).limit(limit);
        res.status(200).json(hotels);
      } catch (error) {
          res.status(500).json(error);
  
      }
  }



  const SearchHotelByMaxMInPrice=async(req,res,next)=>{
    // endPoint
      //http://localhost:2000/hotel/SearchHotelByMaxMInPrice?featurd=true&min=10&max=1500&limit=1
    
      const{max,min,limit,...other}=req.query;
      
      try {
        const hotels=await hotel.find({...other,cheapestprice:{$gt:min||1,$lt:max||1000 }}).limit(limit);
        res.status(200).json(hotels);
      } catch (error) {
          res.status(500).json(error);
    
      }
    }


    const getHotelById=async(req,res,next)=>{
    
        try {
          const Onehotel=await hotel.findById(req.params.id);
          res.status(200).json(Onehotel);
        } catch (error) {
            res.status(500).json(error);
    
        }
    }



  const getCountHotel =async(req,res,next)=>{
        const cities1=req.query.cities.split(',');
        try {
         //var  hotels= await hotel.find({City:cities1})
      
           const resortcount=await  Promise.all(cities1.map(city=>{return hotel.countDocuments({City:city})} ));
          res.status(200).json(resortcount);
         } catch (error) {
            res.status(500).json(error);
      
        }
      }

      

   const getCountHoteltype  = async(req,res,next)=>{
  
        try {
          const resortcount=await hotel.countDocuments({type:"resort"});
          const villacount=await hotel.countDocuments({type:"villa"});
          const cabincount=await hotel.countDocuments({type:"cabin"});
          res.status(200).json([{type:"resort",count:resortcount},
          {type:"villa",count:villacount},
          {type:"cabin",count:cabincount}]);
          
        } catch (error) {
            res.status(500).json(error);
      
        }
      }
      module.exports={addhotel,getCountHotel,getCountHoteltype,getHotelByCityWithLimit,getHotelById,getHotels,deletehotel,deleteById,updatehotel,SearchHotelByMaxMInPrice}