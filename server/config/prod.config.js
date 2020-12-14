const mongoose =require("mongoose");
mongoose.connect("mongodb://localhost/products",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then( () => console.log("Successfully connected to products db"))
.catch(err => console.error("somthing went wrong", err));
