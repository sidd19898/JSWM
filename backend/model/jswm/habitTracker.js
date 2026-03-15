import mongoose from "mongoose";
const{Schema, model} = mongoose;

const habitschema = new Schema({
    Title:String,
    From:String,
    To:String,
})

const Habit = model('Habit', habitschema);
export default Habit;
