const express=require("express");
require("./db/conn");
const Student= require("./models/students");
const router=require("./routers/student");

const app=express();
const port =process.env.PORT || 3000;


app.use(express.json());
app.use(router);



app.listen(port,()=>
{
    console.log(`connection is set up at ${port}`);
})