const mongoose = require('mongoose');
const RoomSchima =  mongoose.Schema({
     title: { type: String, required: true, unique: true },
   number: [{ number: Number, unavilableDate:{ type:[Date] }}],
    price: { type: Number, required: true },
     maxpeople: { type: Number, required: true },
    decs: { type: String }


},{timestamps:true});
 

module.exports = mongoose.model('Room', RoomSchima)

 