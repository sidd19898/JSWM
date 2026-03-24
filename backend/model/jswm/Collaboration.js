const mongoose = require("mongoose");
const{Schema, model} = mongoose;

const collaborationschema = new Schema({
    Assignto:String,
    Title:String,
    From:String,
    To:String,
    Status:Boolean,
    user_id:String,
})

const Collaboration = model('Collaboration', collaborationschema);
module.exports = Collaboration;
