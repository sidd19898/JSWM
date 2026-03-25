const mongoose = require("mongoose");
const{Schema, model} = mongoose;

const lectureschema = new Schema({
    timingfrom:String,
    timingto:String,
    classname:String,
    breakfrom:String,
    breakto:String,
    date:String,
})

const Lecture = model('lecture', lectureschema);
module.exports = Lecture;