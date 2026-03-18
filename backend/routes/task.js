const express = require("express");
const z = require("zod");
const Task = require("../model/jswm/task.js");
const connectDB = require("../config/db.js")
const authMiddleware = require("../middleware/authMiddleware.js")
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

const create = z.object({
    title:z.string(),
    from:z.string(),
    to:z.string(),
    date:z.string(),
    status:z.boolean(),
})

router.post("/create",jsonParser,authMiddleware,async(req,res) => {
    
    const {success} =  create.safeParse(req.body);


    if(!success){
        res.json({
            message:"Input is not valid"
        })
    }

    const present = await Task.findOne({Title:req.body.title});
    
    if(present){
        res.json({
            message:"Task already created"
        })
    }else{

    const Tasker = Task.create({
    Title:req.body.title,
    From:req.body.from,
    To:req.body.to,
    Date:req.body.date,
    Status:req.body.status,
    user_id:req.userId
    })

    res.json({
    message:"task created successfully"
    })
}

});

const update = z.object({
    title:z.string(),
    from:z.string(),
    to:z.string(),
    date:z.string(),
    status:z.boolean(),
})

const docInput = z.object({
     id: z.string().refine(
    (val) => mongoose.Types.ObjectId.isValid(val),
    {message: "Invalid ObjectId"}
)
})


router.put("/update/:id",jsonParser,authMiddleware,async(req,res) => {

    const bodyValidation =  update.safeParse(req.body);
    const paramValidation = docInput.safeParse(req.params);

    if(!bodyValidation.success || !paramValidation.success){
        res.json({
            message:"input is not valid"
        })
    }else{

    const id = req.params.id;
    const updater = await Task.findByIdAndUpdate(
        id,
    {
    Title:req.body.title,
    From:req.body.from,
    To:req.body.to,
    Date:req.body.date,
    Status:req.body.status
    });

    res.json({
        message:"task updated successfully!"
    })
}
});

router.delete("/delete/:id",jsonParser,authMiddleware,async(req,res) => {

    const paramValidation = docInput.safeParse(req.params);

    if(!paramValidation.success){
        res.json({
            message:"Input is not valid"
        })
    }else{
    const id = req.params.id;
    const present = await Task.findByIdAndDelete(id);

    res.json({
    message:"task deleted successfully"
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
