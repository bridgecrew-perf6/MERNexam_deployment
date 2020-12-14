
const mongoose =require("mongoose");
const projectSchema = new mongoose.Schema({
    project: {
        type: String,
        required: [true,"Project is required"],
        minlength:[3,"Project must be 3 characters at least"]
    },
    due: {
        type:  Date,
        required: [true,"Due date is required"],
    },
    status:String
},{timestamps:true});
module.exports =  mongoose.model("projects",projectSchema);
