const express = require("express");
const z = require("zod");
const user = require('../model/jswm/user.js');
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const router = express.Router()
var jsonParser = bodyParser.json()


// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// here comes the middleware


const Use = z.object({
    firstname: z.string()
    .min(2)
    .max(30)
    .regex(/^[a-zA-Z\s]+$/, "Only alphabets allowed"),
    lastname: z.string()
    .min(2)
    .max(30)
    .regex(/^[a-zA-Z\s]+$/, "Only alphabets allowed"),
    email: z.string().email(),
    password: z.string(),
})


router.post("/signup", jsonParser,async(req,res)=>{

 
  
    const {success} = Use.safeParse(req.body);
    if (!success){
        return res.json({
            message:"input is invalid"
        })
    }
    
    const present = await user.findOne({email:req.body.email})

    if(present){
        return res.json({
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
         return res.status(400).json({
            message:"input is invalid"
        })
    }

    const validity = await user.findOne({email:req.body.email,password:req.body.password})

    if(validity){
        
        const token = jwt.sign(
            {userId:validity._id},
            JWT_SECRET);

        res.json({
            message:"user logging in",
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

router.use((err, req, res, next) => {
    console.error("Error:", err.message)

    res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self'"
    );

    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({
            message: "Invalid JSON format"
        })
    }

    res.status(500).json({
        message: "Internal server error"
    })
})

module.exports = router;