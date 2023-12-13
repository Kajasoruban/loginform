const express=require("express");
const router1=express.Router();
const path=require("path");
const Model=require("../models/model1");
const asychandler=require("express-async-handler");


router1.get("/login",(req,res)=>{
    res.sendFile("/home/uki01/Desktop/loginform/templates/login.html");
})

router1.get("/signup",(req,res)=>{
    res.sendFile("/home/uki01/Desktop/loginform/templates/signup.html");
});

router1.get("/home",(req,res)=>{
    res.sendFile("/home/uki01/Desktop/loginform/templates/home.html");
});


router1.post("/signupsend",async(req,res)=>{
    const data = new Model({
        name: req.body.name,
        password: req.body.password
    })
    try{
        const dataToSave = await data.save();
        res.status(200)
        res.redirect("login")
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

router1.post("/login",async(req,res)=>{
    
    try{
        const pass= await Model.findOne({name:req.body.name});
        
        if(req.body.password==pass.password){
        
            res.redirect("home");
        }else{
            res.send("not matched");
        }
        
    }catch(error){
        res.status(400).json({message: error.message})
    }
})

module.exports=router1;

