var express = require("express");
var app = express();

app.get("/", function(rer, res){
   res.send("Welcome to the home page!"); 
});

app.listening(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening...");
});


