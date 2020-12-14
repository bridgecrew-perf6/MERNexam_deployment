
const mongoose =require("mongoose");
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true,"Title is required"],
        minlength:[2,"Title must be 2 characters at least"]
    },
    price:{
        type: Number ,
        required: [true,"Price is required"],
        min:[0,"Price must be greater than 0.000"]
    },
    description:{
        type: String,
        required: [true,"Description is required"],
        minlength:[5,"Description must be 5 characters at least"]
    },
    review: []
},{timestamps:true});

module.exports =  mongoose.model("products",productSchema);
