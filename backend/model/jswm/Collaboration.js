import mongoose from "mongoose";
const{Schema, model} = mongoose;

const collaborationschema = new Schema({
    Assignto:String,
    Tasktitle:String,
    From:String,
    To:String,
})

const cschema = model('Collaboration', collaborationschema);
export default cschema;
