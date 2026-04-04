const mongoose = require("mongoose");
const{Schema, model} = mongoose;

const holidayschema = new Schema({
    From:String,
    To:String,
    Reason:String,
    User_id:String,
})

const Holiday = model('Holiday', holidayschema);
module.exports = Holiday;