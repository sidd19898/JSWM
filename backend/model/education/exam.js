import mongoose from "mongoose";
const{Schema, model} = mongoose;

const examschema = new Schema({
    semister:String,
    dates:String,
    exam:String,
    fromtime:String,
    totime:String,
})

const exam = model('exam', examschema);
export default exam;