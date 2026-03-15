import mongoose from "mongoose";
const{Schema, model} = mongoose;

const studentschema = new Schema({
    name:String,
    password:String,
})

const student = model('student', studentschema);
export default student;