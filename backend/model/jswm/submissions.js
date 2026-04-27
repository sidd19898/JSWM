const mongoose = require("mongoose");
const{Schema, model} = mongoose;

const submissionSchema = new Schema({
    From:String,
    Rollno:String,
    Description:String,
    Dos:String,
    User_id:String,
    Teacher_id:String,
  filename: String,
  contentType: String,
  data: Buffer,
  uploadedAt: {
    type: Date,
    default: Date.now
  }
})

const Submission = model('submission', submissionSchema);
module.exports = Submission;
