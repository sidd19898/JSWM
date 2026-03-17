const mongoose = require("mongoose");
const{Schema, model} = mongoose;

const habitschema = new Schema({
    Title:String,
    From:String,
    To:String,
    Status:Boolean,
    Date:String,
})

const Habit = model('Habit', habitschema);
module.exports = Habit;
