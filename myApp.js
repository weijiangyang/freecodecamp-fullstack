var express = require('express');
var app = express();
console.log("Hello World");
app.get("/", (req,res) => {
    res.send({message:"okay"})
})




































 module.exports = app;
