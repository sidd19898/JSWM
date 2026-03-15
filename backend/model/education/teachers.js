import mongoose from "mongoose";
const{Schema, model} = mongoose;

const teacherschema = new Schema({
    name:String,
    password:String,
})

const teachers = model('teacher', teacherschema);
export default teachers;