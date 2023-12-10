const mongoose=require('mongoose');
const hotelSchima= new mongoose.Schema({
    name:{type:String,required:true},
    type:{type:String,required:true},
    City:{type:String,required:true},
    Adress:{type:String,required:true},
     distance :{type:String,required:true},
     photos :{type:[String]} ,
     rating:{type:Number,min:0,max:5} , 
     rooms:{type:[String]},
     cheapestprice:{type:Number,required:true},
     featurd:{type:Boolean,default:false}
},{timestamps:true});

module.exports=mongoose.model('Hotel',hotelSchima);