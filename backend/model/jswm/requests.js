const mongoose = require("mongoose");
const{Schema, model} = mongoose;

const requestschema = new Schema({
    Name:String,
    Rollno:String,
    Status:Boolean,
    Teacher_id:String,
    User_id:String,
})

const Requests = model('request', requestschema);
module.exports = Requests;