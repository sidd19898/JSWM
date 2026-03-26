const mongoose = require("mongoose");
const{Schema, model} = mongoose;

const lectureschema = new Schema({
    Timingfrom:String,
    Timingto:String,
    Classname:String,
    Breakfrom:String,
    Breakto:String,
    Date:String,
    user_id:String,
})

const Lecture = model('lecture', lectureschema);
module.exports = Lecture;