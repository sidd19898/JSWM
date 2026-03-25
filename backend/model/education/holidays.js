const mongoose = require("mongoose");
const{Schema, model} = mongoose;

const holidayschema = new Schema({
    from:String,
    to:String,
    reason:String,
})

const Holiday = model('holiday', holidayschema);
module.exports = Holiday;