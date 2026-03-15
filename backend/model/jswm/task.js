const mongoose = require("mongoose");
const{Schema, model} = mongoose;

const taskSchema = new Schema({
    Title:String,
    From:String,
    To:String,
    Date:String,
    Status:Boolean,
})

const Task = model('Task', taskSchema);
module.exports = Task;
