import mongoose from "mongoose";
const{Schema, model} = mongoose;

const announcementschema = new Schema({
    title:String,
    description:String,
})

const announcement = model('announcement', announcementschema);
export default announcement;