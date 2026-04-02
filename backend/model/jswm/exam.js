const mongoose = require("mongoose");
const{Schema, model} = mongoose;

const examschema = new Schema({
    Semister:String,
    Dates:String,
    Exam:String,
    Fromtime:String,
    Totime:String,
    User_id:String,
})

const Exam = model('exam', examschema);
module.exports = Exam;