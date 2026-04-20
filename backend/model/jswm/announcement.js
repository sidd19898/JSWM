const mongoose = require("mongoose");
const{Schema, model} = mongoose;

const announcementschema = new Schema({
    title:String,
    description:String,
})

const Announcement = model('announcement', announcementschema);
module.exports = Announcement;