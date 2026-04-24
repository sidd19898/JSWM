// models/File.js
const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  title: String,
  description: String,
  lastdate: String,
  user_id:String,
  filename: String,
  contentType: String,
  data: Buffer,
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("homework", fileSchema);