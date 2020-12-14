
const mongoose =require("mongoose");
const Student = new mongoose.Schema({
    name: String,
    home_city:String,
    birthday: {
        month: Number,
        day:Number,
        year:Number
    }
    ,
    belts_earned : Number
},{timestamps:true});

const Students = mongoose.model("students",Student);
module.exports = Students;