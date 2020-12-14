
const mongoose =require("mongoose");
const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Name is required"],
        minlength:[2,"Name must be 2 characters at least"]
    },
    cuisine:{
        type: String,
        required: [true,"cuisine is required"],
        minlength:[5,"cuisine must be 5 characters at least"]
    },
    yearOpened: {
        type: Number,
        required: [true,"Establish year is required"],
        min:[1900,"The restaurant is too old!"],
        max:[new Date().getFullYear()+1,"The restaurant is too old!"]
    },
    description:{
        type: String,
        required: [true,"Description is required"],
        minlength:[5,"Description must be 5 characters at least"]
    },
    reviews: []
},{timestamps:true});

module.exports =  mongoose.model("restaurants",restaurantSchema);
