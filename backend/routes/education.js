const express = require("express");
const z = require("zod");
const Teachers = require("../model/jswm/teachers.js")
const Students = require("../model/jswm/students.js")
const connectDB = require("../config/db.js")
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json()
const ratelimiter = require("express-rate-limit")
const helmet = require("helmet")
require("dotenv").config();
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const mongoose = require("mongoose");
connectDB();

const limiter = ratelimiter.rateLimit({
    windowMs: 15 * 60 * 1000,
    max:100
})

router.use(limiter)
router.use(helmet())
router.use(express.json({limit:"10kb"}))



const Use = z.object({
    name: z.string(),
    password: z.string(),
})


router.post("/teachers/signup", jsonParser,async(req,res) => {

    const {success} = Use.safeParse(req.body);
    if (!success){
        res.json({
            message:"input is invalid"
        })
    }else{
    
    const present = await Teachers.findOne({Name:req.body.name})

    if(present){
        res.json({
            message:"username already exists"
        })
    }else{

    const newUser = new Teachers({
    Name : req.body.name,
    Password : req.body.password,
    });

    const role = await newUser.save()
                                                                
    const userId = role._id;
    console.log(userId);
    const Token = jwt.sign({userId},JWT_SECRET);

    res.json({
        message:"Teacher account created successfully",
        Token:Token
    })

}
    }
    
})

router.post("/students/signup", jsonParser,async(req,res) => {

    const {success} = Use.safeParse(req.body);
    if (!success){
        res.json({
            message:"input is invalid"
        })
    }else{
    
    const present = await Students.findOne({Name:req.body.name})

    if(present){
        res.json({
            message:"username already exists"
        })
    }else{

    const newUser = Students({
    Name : req.body.name,
    Password : req.body.password,
    });

    const role = await newUser.save()
                                                                
    const userId = role._id;
    console.log(userId);
    const Token = jwt.sign({userId},JWT_SECRET);

    res.json({
        message:"Student account created successfully",
        Token:Token
    })

}
    }
    
})

router.post("/teachers/signin",jsonParser,async(req,res)=>{
   
    const {success} = Use.safeParse(req.body);
    if(!success){
         return res.json({
            message:"input is invalid"
        })
    }

    const validity = await Teachers.findOne({Name:req.body.name,Password:req.body.password})

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


router.post("/students/signin",jsonParser,async(req,res)=>{
   
    const {success} = Use.safeParse(req.body);
    if(!success){
         return res.json({
            message:"input is invalid"
        })
    }

    const validity = await Students.findOne({Name:req.body.name,Password:req.body.password})

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






router.use((err, req, res, next) => {
    console.error("Error:", err.message)

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