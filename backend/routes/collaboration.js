const express = require("express");
const z = require("zod");
const Collaboration = require("../model/jswm/Collaboration.js")
const connectDB = require("../config/db.js")
const authMiddleware = require("../middleware/authMiddleware.js")
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json()
const ratelimiter = require("express-rate-limit")
const helmet = require("helmet")
const mongoose = require("mongoose");
connectDB();

const limiter = ratelimiter.rateLimit({
    windowMs: 15 * 60 * 1000,
    max:100
})

router.use(limiter)
router.use(helmet())
router.use(express.json({limit:"10kb"}))

const create = z.object({
    
    assignto: z.string().refine(
    (val) => mongoose.Types.ObjectId.isValid(val),
    {message: "Invalid ObjectId"}),

    title:z.string(),
    from:z.string(),
    to:z.string(),
    status:z.boolean(),

}).strict();

router.post("/ato",jsonParser,authMiddleware,async(req,res) => {

    const result = create.safeParse(req.body);

    if(!result.success){
        res.json({
            message:"Input is invalid"
        })
    }else{

        const present = await Collaboration.findOne({Title:req.body.title,user_id:req.userId,Assignto:req.body.assignto});

        if(present){
            res.json({
                message:"already assigned"
            })
        }else{

        const collaboration = await Collaboration.create({
            Assignto:req.body.assignto,
            Title:req.body.title,
            From:req.body.from,
            To:req.body.to,
            Status:req.body.status,
            user_id:req.userId
        })

        res.json({
            message:"task assigned successfully"
        })
        }
    }
})

router.post("/atm",jsonParser,authMiddleware,async(req,res) => {

    
})

router.get("/read",jsonParser,authMiddleware,async(req,res) => {

    try{
    const gotit = await Collaboration.find({user_id:req.userId});
    res.send(gotit);
    }catch(err){
        console.log(err);
        res.status(500).send("error retrieving data");
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