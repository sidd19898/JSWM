const express = require("express");
const z = require("zod");
const user = require('../model/jswm/user.js');
const connectDB = require("../config/db.js");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const router = express.Router()
var jsonParser = bodyParser.json()
connectDB();


// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// here comes the middleware


const Use = z.object({
    firstname: z.string(),
    lastname: z.string(),
    email: z.string().email(),
    password: z.string(),
})


router.post("/signup", jsonParser,async(req,res)=>{

 
  
    const {success} = Use.safeParse(req.body);
    if (!success){
        res.json({
            message:"input is invalid"
        })
    }
    
    const present = await user.findOne({email:req.body.email})

    if(present){
        res.json({
            message:"email already exists"
        })
    }

    const newUser = new user({
    firstname : req.body.firstname,
    lastname : req.body.lastname,                   
    email : req.body.email,
    password : req.body.password,
    });

    const role = await newUser.save()
                                                                
    const userId = role._id;
    console.log(userId);
    const Token = jwt.sign({userId},JWT_SECRET);

    res.json({
        message:"user created successfully",
        Token:Token
    })

    
})

const case2 = z.object({
    email:z.string().email(),
    password:z.string(),
})

router.post("/signin",jsonParser,async(req,res)=>{
   

   
    const {success} = case2.safeParse(req.body);
    if(!success){
         return res.json({
            message:"input is invalid"
        })
    }

    const validity = await user.findOne({email:req.body.email,password:req.body.password})

    if(validity){
        
        const token = jwt.sign(
            {userId:validity._id},
            JWT_SECRET);

        res.json({
            token:token
        })
        
    }else{

    res.status(411).json({
        message:"Error while logging in"
    })
   }

   
})


router.get("/", (req,res)=>{
    res.send("homepage")
})


module.exports = router;