import express from "express";
const port = 4000;

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello World");
})
app.get("/ahmet",(req,res)=>{
    res.send("Hello Ahmet");
})
app.get("*",(req,res)=>{
    res.send("Unbekannt");
})

app.listen(port);