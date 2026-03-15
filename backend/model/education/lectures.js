import mongoose from "mongoose";
const{Schema, model} = mongoose;

const lectureschema = new Schema({
    timingfrom:String,
    timingto:String,
    classname:String,
    breakfrom:String,
    breakto:String,
    date:String,
})

const lecture = model('lecture', lectureschema);
export default lecture;