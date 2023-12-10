require("dotenv").config()

const express=require("express");
const mongoose=require("mongoose");
const mongoString=process.env.DATABASE_URL;//my database link that i'm going to connect

mongoose.connect(mongoString);
const database=mongoose.connection;

database.on("error",(error)=>{
    console.log();
});

database.once("connected",()=>{
    console.log("Database connected");
})

const app=express();
app.use(express.json);
app.use(express.urlencoded({extended:false}));



app.listen(3200,()=>{
    console.log(`server started at port number ${3200}`);
});





