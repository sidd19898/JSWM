import mongoose from "mongoose";
const{Schema, model} = mongoose;

const classschema = new Schema({
    Classname:String,
    Semister:String,
    studentscount:String,
})

const Class = model('Class', classschema);
export default Class;