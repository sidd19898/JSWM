import mongoose from "mongoose";
const{Schema, model} = mongoose;

const homeworkschema = new Schema({
    title:String,
    description:String,
    lastdate:String,
    attachfile:String,
})

const homework = model('homework', homeworkschema);
export default homework;