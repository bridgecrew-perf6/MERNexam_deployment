const mongoose =require("mongoose");
mongoose.connect("mongodb://localhost/Jokes",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then( () => console.log("Successfully connected to Students db"))
.catch(err => console.error("somthing went wrong", err));
