const express=require("express");
const router= new express.Router();
const Student=require("../models/students");

router.post("/students",async(req,res)=>
    {
        console.log(req.body)
        const user=new Student(req.body);
    
        try{
           const data= await user.save();
           res.send(user);
        }
    
        catch(e){
            res.send(e);
        }
    
    
    })
    
    router.get("/students",async(req,res)=>{
      try{
          const studentdata=await Student.find();
          res.send(studentdata);
      }
      catch(e){
    
        res.send(e);
    
      }
    })
    
    
    router.get("/students/:id",async(req,res)=>{
        try{
            const _id=req.params.id;
            const stuData=await Student.findById({_id});
            console.log(stuData)
            res.send(stuData);
        }
        catch(e){
      
          res.send(e);
      
        }
      })
    
      router.patch("/students/:id",async(req,res)=>{
          try{
               const _id = req.params.id;
               const stdData = await Student.findByIdAndUpdate(_id,{$set:req.body});
               console.log(2);
               res.send(stdData);
          }
    
          catch(e){
                res.status(404).send(e)
          }
      })



module.exports=router;