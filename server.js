const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const {readdirSync}=require('fs') //file system,destructure to directly import readdirSync method
require("dotenv").config();


//app
const app=express(); //express serer available in app variable

//db
mongoose.connect(process.env.MONGO_URI,{
})
.then(()=>console.log("DB CONNECTED"))
.catch(err=>console.log("DB CONNECTION ERROR",err));


//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({limit:"2mb"}));
app.use(cors());

//routes middleware
//app.use('/api',authRoutes); //prefix api to every route
readdirSync("./routes").map((r)=>app.use("/api",require("./routes/"+r))); //dynamically gets the routes from the routes directory/folder

//port
const port=process.env.PORT || 8000;
app.listen(port,()=>console.log(`Server is running on port ${port}`));