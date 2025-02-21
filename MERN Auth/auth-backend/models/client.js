import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
})

const clientModel = mongoose.model('Client',clientSchema)
export default clientModel;