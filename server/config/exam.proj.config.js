const mongoose =require("mongoose");
mongoose.connect("mongodb://localhost/projects",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then( () => console.log("Successfully connected to projects db"))
.catch(err => console.error("somthing went wrong", err));
