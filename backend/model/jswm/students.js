const mongoose = require("mongoose");
const{Schema, model} = mongoose;

const studentschema = new Schema({
    Name:String,
    Password:String,
})

const Students = model('student', studentschema);
module.exports = Students;