const mongoose =require("mongoose");
mongoose.connect("mongodb://localhost/restaurants",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then( () => console.log("Successfully connected to restaurants db"))
.catch(err => console.error("somthing went wrong", err));
