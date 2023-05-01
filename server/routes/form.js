const express = require('express');
const router = express.Router();
const Regform = require("../models/Regform");

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
const temp = async(name,email)=>{
    var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: 'shashanktiwari3509@gmail.com',
        pass: 'opwkndyvjzvwadhc'
    }
    }));

    var mailOptions = {
    from: 'Shashank',
    to: email, 
    subject: "Verify your email",
    html: `Hello <b>${name}</b>, <br>Thank you for registering on <b>Registratex</b>`
    };

   await transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    }); 
   // res.status(200).json({msg:"asdf"}) 
}

router.post("/reguser",
async (req,res)=>{
    try {
        const {name,dob,email,cmail,number,gender,studentno,unirollno,branch}=req.body;
        console.log(req.body);
        const form = new Regform ({
            name,dob,email,cmail,number,gender,studentno,unirollno,branch
        })
    const saveform = await form.save();
    temp(name,email);
    res.json(saveform);
   
    } catch (error) {
        console.log(error);
    }
   }

)

module.exports= router