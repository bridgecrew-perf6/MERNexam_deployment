
const mongoose =require("mongoose");
const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Name is required"],
        minlength:[2,"Name must be 2 characters at least"]
    },
    rating: {
        type: Number,
        required: [true,"Rating is required"],
        min:[1,"Rating Shoud be at least 1"],
        max:[5,"Rating Shoud not be greater than 5"]
    },
    content:{
        type: String,
        required: [true,"Content is required"],
        minlength:[5,"Content must be 5 characters at least"]
    }
},{timestamps:true});

module.exports =  mongoose.model("reviews",reviewSchema);
