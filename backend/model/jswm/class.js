const mongoose = require("mongoose");
const{Schema, model} = mongoose;

const classschema = new Schema({
    Classname:String,
    Semister:String,
    Studentscount:String,
    user_id:String,
})

const Class = model('Class', classschema);
module.exports = Class;