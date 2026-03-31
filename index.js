const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello Backend");
});

app.get("/about", (req,res)=>{
    res.json({
        name : "My backend app",
        version: "1.0"
    });
});

app.listen(3000,()=>{
    console.log("Server running on 3000");
})