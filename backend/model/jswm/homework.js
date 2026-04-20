// models/File.js
const mongoose = require("mongoose");
const{Schema, model} = mongoose;

const fileSchema = new Schema({

  Title:String,
  Description:String,
  Lastdate:String,
  User_id:String,

  filename: String,
  contentType: String,
  data: Buffer,
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});

const Homework = model('homework', fileSchema);
module.exports = Homework;