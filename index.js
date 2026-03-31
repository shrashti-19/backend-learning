const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello Backend");
});

app.listen(300,()=>{
    console.log("Server running on 300");
})