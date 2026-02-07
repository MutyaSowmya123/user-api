const express= require("express");
const app=express();

function blockingTask(){
    const start=Date.now();
    while(Date.now()-start<10000){
        //blocking for 10 seconds (busy wait for 10 seconds)
    }   
}

app.get("/block", (req,res)=>{
    blockingTask();
    res.send("completed the blocking task");
});

app.get("/fast", (req,res)=>{
    res.send("this is a fast response");
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});