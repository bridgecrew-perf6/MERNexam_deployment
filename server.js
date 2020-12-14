const cors =require("cors");
const express = require("express");
const port= 8000;
const app = express();

app.use(cors());
app.use(express.json());

require("./server/config/exam.proj.config");
require("./server/routes/exam.proj.routes")(app);

app.listen(port,()=> console.log(`listening on port : ${port}`));
