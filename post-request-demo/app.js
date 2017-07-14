var express = require("express");
var app = express();

app.set("view engine" , "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/addfriend", function(req, res){
    res.send("post route");
});

app.get("/friends", function(req, res){
    var friends = ["Friend 1","Friend 2","Friend 3","Friend 4"];
    res.render("friends", {friends: friends});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started");
});


