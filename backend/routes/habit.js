const express = require("express");
const z = require("zod");
const Habit = require("../model/jswm/habitTracker.js")
const connectDB = require("../config/db.js")
const authMiddleware = require("../middleware/authMiddleware.js")
const router = express.Router();
const bodyParser = require("body-parser");
const {Temporal} = require("@js-temporal/polyfill");
const jsonParser = bodyParser.json()
connectDB();

const create = z.object({
    title:z.string(),
    from:z.string(),
    to:z.string(),
    status:z.boolean(),
})

router.post("/create",jsonParser,authMiddleware,async(req,res) => {

    const {success} = create.safeParse(req.body);

    if(!success){
        res.json({
            message:"Input is invalid"
        })
    }

    const present = await Habit.findOne({Title:req.body.title});

    if(present){
        res.json({
            message:"Habit is already created"
        })
    }else{
       
const start = Temporal.PlainDate.from(req.body.from);
const end = Temporal.PlainDate.from(req.body.to);
const duration = end.since(start); 
const days = duration.days;


    }

})

module.exports = router;