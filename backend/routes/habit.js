const express = require("express");
const z = require("zod");
const Habit = require("../model/jswm/habitTracker.js")
const connectDB = require("../config/db.js")
const authMiddleware = require("../middleware/authMiddleware.js")
const router = express.Router();
const bodyParser = require("body-parser");
const {Temporal} = require("@js-temporal/polyfill");
const jsonParser = bodyParser.json()
const ratelimiter = require("express-rate-limit")
const helmet = require("helmet")
connectDB();

const limiter = ratelimiter.rateLimit({
    windowMs: 15 * 60 * 1000,
    max:100
})

router.use(limiter)
router.use(helmet())
router.use(express.json({limit:"10kb"}))

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

for (let i = 0; i < days; i++){
const date = Temporal.PlainDate.from(req.body.from);
const iter = date.add({days:i});
const ok = iter.toString();

const Habitcreate = Habit.create({
    Title:req.body.title,
    From:req.body.from,
    To:req.body.to,
    Status:req.body.status,
    Date:ok
    })
}

res.json({
    message:"Habit created successfully"
})

    }

})

const update = z.object({
    title:z.string(),
    status:z.boolean().optional(),
}).strict();


router.patch("/update/:name",jsonParser,authMiddleware,async(req,res) => {
    
    const result = update.safeParse(req.body);

    if(!result.success){
        res.json({
            message:"Input is invalid"
        })
    }

    const { title , status } = result.data 

    const present = await Habit.findOne({Title:req.params.name});

    if(present){
        res.json({
            message:"Habit already present"
        })
    }else{

    const habitupdate = await Habit.updateMany({Title:req.params.name},{Title:title,Status:status})

    res.json({
        message:"habit updated successfully"
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