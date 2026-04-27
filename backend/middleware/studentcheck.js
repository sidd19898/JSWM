const Requests = require("../model/jswm/requests.js")

const studentCheck = async (req,res,next) => {
    try{

        const user = await Requests.findOne({User_id:req.userId})
        if (user.Status == true){
            req.teacherId = user.Teacher_id
                next();
        }else{
            res.json({
                message:"make sure your req is accepted"
            })
        }
    }catch(err){
        next(err);
    }
}

module.exports = studentCheck;