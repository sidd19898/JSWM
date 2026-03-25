const mongoose = require("mongoose");
const{Schema, model} = mongoose;

const homeworkschema = new Schema({
    title:String,
    description:String,
    lastdate:String,
    attachfile:String,
})

const Homework = model('homework', homeworkschema);
module.exports = Homework;