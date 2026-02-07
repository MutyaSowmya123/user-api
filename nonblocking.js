const express= require("express");
const app=express();
//using set timeout
app.get("/non-block",(req,res)=>{
    setTimeout(()=>{
        res.send("This is a non-blocking response after 10 seconds");
    },10000);
});

function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}

app

app.get("/fast",(req,res)=>{
    res.send("This is a fast response");
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});