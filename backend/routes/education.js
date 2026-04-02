const express = require("express");
const z = require("zod");
const Class = require("../model/jswm/class.js")
const Teachers = require("../model/jswm/teachers.js")
const Students = require("../model/jswm/students.js")
const Lectures = require("../model/jswm/lectures.js")
const Exam = require("../model/jswm/exam.js")
const authMiddleware = require("../middleware/authMiddleware.js")
const connectDB = require("../config/db.js")
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json()
const ratelimiter = require("express-rate-limit")
const helmet = require("helmet")
require("dotenv").config();
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
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

// UAS for Teachers and students

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


const create = z.object({
    classname:z.string(),
    semister:z.string(),
    students:z.string(),
})

// class 


router.post("/class/create",jsonParser,authMiddleware,async(req,res) => {
    
    const {success} =  create.safeParse(req.body);


    if(!success){
        res.json({
            message:"Input is not valid"
        })
    }

    const present = await Class.findOne({Classname:req.body.classname,user_id:req.userId});
    
    if(present){
        res.json({
            message:"class already created"
        })
    }else{

    const Classes = Class.create({
    Classname:req.body.classname,
    Semister:req.body.semister,
    Studentscount:req.body.students,
    user_id:req.userId
    })

    res.json({
    message:"class created successfully"
    })
}

});


const docInput = z.object({
     name: z.string()
})

router.put("/class/update/:name",jsonParser,authMiddleware,async(req,res) => {
    
    const result =  create.safeParse(req.body);
    const paramValidation = docInput.safeParse(req.params);

    if(!result.success){
        res.json({
            message:"Input is not valid"
        })
    }

    const present = await Class.findOne({Classname:req.body.classname,user_id:req.userId});
    
    if(present){
        res.json({
            message:"classname already present"
        })
    }else{

        
    const filter = {user_id:req.userId,Classname:req.params.name}
    
    const arr = {
        $set:{
    Classname:req.body.classname,
    Semister:req.body.semister,
    Studentscount:req.body.students,
        }
    }

    const habitupdate = await Class.updateMany(filter,arr)

    res.json({
        message:"habit updated successfully"
    })
}
});

router.delete("/class/delete/:name",jsonParser,authMiddleware,async(req,res) => {

       const paramValidation = docInput.safeParse(req.params);

    if(!paramValidation.success){
        res.json({
            message:"Input is invalid"
        })
    }
        
    const filter = {user_id:req.userId,Classname:req.params.name}

    const taskdelete = await Class.deleteMany(filter)

    if (taskdelete){
    res.json({
        message:"class deleted successfully"
    })
}
})


router.get("/class/read",jsonParser,authMiddleware,async(req,res) => {

    try{
    const gotit = await Class.find({user_id:req.userId});
    res.send(gotit);
    }catch(err){
        console.log(err);
        res.status(500).send("error retrieving data");
    }
})

// Class schedule

const check = z.object({
    timingfrom:z.string(),
    timingto:z.string(),
    classname:z.string(),
    breakfrom:z.string(),
    breakto:z.string(),
    date:z.string(),
})

router.post("/class/schedule/create",jsonParser,authMiddleware,async(req,res) => {
    
    const {success} =  check.safeParse(req.body);

    if(!success){
        res.json({
            message:"Input is not valid"
        })
    }

    const present = await Lectures.findOne({Classname:req.body.classname});
    
    if(present){
        res.json({
            message:"class schedule already created"
        })
    }else{

    const Classes = Lectures.create({
    Timingfrom:req.body.timingfrom,
    Timingto:req.body.timingto,
    Classname:req.body.classname,
    Breakfrom:req.body.breakfrom,
    Breakto:req.body.breakto,
    Date:req.body.date,
    user_id:req.userId
    })

    res.json({
    message:"class schedule created successfully"
    })
}

});

router.post("/class/schedule/update/:name",jsonParser,authMiddleware,async(req,res) => {
    
    const {success} =  check.safeParse(req.body);

    if(!success){
        res.json({
            message:"Input is not valid"
        })
    }

    const present = await Lectures.findOne({Classname:req.body.classname,user_id:req.userId});
    
    if(present){
        res.json({
            message:"class schedule already created"
        })
    }else{

    const filter = {user_id:req.userId,Classname:req.params.name}
    
    const Classes = {
        $set:{
    Timingfrom:req.body.timingfrom,
    Timingto:req.body.timingto,
    Classname:req.body.classname,
    Breakfrom:req.body.breakfrom,
    Breakto:req.body.breakto,
    Date:req.body.date,
    }
}

const atoupdate = await Lectures.updateMany(filter,Classes)

    res.json({
    message:"class schedule updated successfully"
    })
}

});

router.delete("/class/schedule/delete/:name",jsonParser,authMiddleware,async(req,res) => {

    const paramValidation = docInput.safeParse(req.params);

    if(!paramValidation.success){
        res.json({
            message:"Input is invalid"
        })
    }
        
    const filter = {user_id:req.userId,Classname:req.params.name}

    const taskdelete = await Lectures.deleteMany(filter)

    if (taskdelete){
    res.json({
        message:"class schedule deleted successfully"
    })
}
})

router.get("/class/schedule/read",jsonParser,authMiddleware,async(req,res) => {

    try{
    const gotit = await Lectures.find({user_id:req.userId});
    res.send(gotit);
    }catch(err){
        console.log(err);
        res.status(500).send("error retrieving data");
    }
})

//  Exam Timetable


const verify = z.object({
    semister:z.string(),
    dates:z.string(),
    exam:z.string(),
    fromtime:z.string(),
    totime:z.string(),
})

router.post("/class/exam/create",jsonParser,authMiddleware,async(req,res) => {
    
    const {success} =  verify.safeParse(req.body);

    if(!success){
        res.json({
            message:"Input is not valid"
        })
    }

    const present = await Exam.findOne({Semister:req.body.semister});
    
    if(present){
        res.json({
            message:"class schedule already created"
        })
    }else{

    const Classes = Exam.create({
    Semister:req.body.semister,
    Dates:req.body.dates,
    Exam:req.body.exam,
    Fromtime:req.body.fromtime,
    Breakto:req.body.totime,
    User_id:req.userId
    })

    res.json({
    message:"Exam schedule created successfully"
    })
}

});


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