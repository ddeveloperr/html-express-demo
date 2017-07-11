//console.log("Logging with my node app!");

var express = require("express");
var app = express();

// routes
app.get("/", function(req, res){
    res.send("Hello there!");
});

app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

app.get("/dog", function(req, res){
    res.send("wow!");
});

// Listen for request

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});


