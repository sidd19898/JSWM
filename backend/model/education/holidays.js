import mongoose from "mongoose";
const{Schema, model} = mongoose;

const holidayschema = new Schema({
    from:String,
    to:String,
    reason:String,
})

const holiday = model('holiday', holidayschema);
export default holiday;