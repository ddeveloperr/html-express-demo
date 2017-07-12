var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs"); // now you can delete .ejs extension from render method!

app.get("/", function(rer, res){
   //res.send("Welcome to the home page!<br><h1>Node.js Render HTML now!</h1><p>Enjoy now</p>"); 
   res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    // res.send("You fell in love with " + thing);
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
    var posts = [
        {title:"Post 1", author:"Author 1"},
        {title:"Post 2", author:"Author 2"},
        {title:"Post 3", author:"Author 3"},
    ];
    
    res.render("posts", {posts: posts});
    
});
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening...");
});


