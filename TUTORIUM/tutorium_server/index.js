require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const res = require("express/lib/response");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


const uri = process.env.BAGLANTI;

const Schema = mongoose.Schema;

mongoose.connect(uri,()=>{

    console.log("Connect to DB");
});

app.get("/", (req,res)=>{
    res.send("Baglanti basarili...");
})



app.listen(5000,()=>{

    console.log("Server calisiyor...");
})