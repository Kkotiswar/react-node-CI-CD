const express = require("express");

const app = express();

app.get("/names",(req,res)=>{
    res.send("Kotiswar");
});

app.listen(5500,(req,res)=>{
    console.log("server is running at 5500");
})