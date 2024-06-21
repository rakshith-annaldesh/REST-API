const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/studentsapi")
.then(()=>{
    console.log("Connection is successful");
})
.catch((err)=>{
console.log("No Connection");
})