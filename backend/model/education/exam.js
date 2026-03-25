const mongoose = require("mongoose");
const{Schema, model} = mongoose;

const examschema = new Schema({
    semister:String,
    dates:String,
    exam:String,
    fromtime:String,
    totime:String,
})

const Exam = model('exam', examschema);
module.exports = Exam;