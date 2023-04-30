const express = require('express');
const router = express.Router();
const Regform = require("../models/Regform");

router.post("/reguser",
async (req,res)=>{
    try {
        const {name,dob,email,cmail,number,gender,studentno,unirollno,branch}=req.body;
        console.log(name);
    } catch (error) {
        console.log("Some error occured");
    }
   }

)

module.exports= router