const mongoose = require("mongoose");
const{Schema, model} = mongoose;

const teacherschema = new Schema({
    Name:String,
    Password:String,
})

const Teachers = model('teacher', teacherschema);
module.exports = Teachers;