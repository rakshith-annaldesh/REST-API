const mongoose = require("mongoose");
const validator= require("validator");

const studentSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email id is present"],
        validate(value){
            if(!validator.isEmail(value))
                {
                    throw new error("Invalid Email");
                }
        }
    },
    phone:{
        type:Number,
        min:10,
        required:true,
        unique:[true,"Phone number is already registered"]
    },
    address:{
        type:String,
        required:true
    }
})

const Student = new mongoose.model("Student",studentSchema);
module.exports=Student;