const express = require("express");
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello Backend");
});

app.get("/about", (req,res)=>{
    res.json({
        name : "My backend app",
        version: "1.0"
    });
});

let notes = [];

app.post("/notes", (req, res) => {
  const note = {
    id: notes.length + 1,
    text: req.body.text
  };

  notes.push(note);

  res.json(note);
});

app.listen(3000,()=>{
    console.log("Server running on 3000");
})