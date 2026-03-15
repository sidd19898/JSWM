const mongoose = require("mongoose");
const {Schema,model} = mongoose;

const userSchema = new Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String,
});

const user = model('user', userSchema);
module.exports = user;

