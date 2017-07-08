var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hi, there, welcome to my routing node assignment!');
});

app.get('/speak/:animal', function(req, res){
    
    var animal = req.params.animal;
    var sound = "";
    if(animal === "pig"){
        sound = "oink";
    } else if(animal === "cow"){
        sound = "mooo";
    }
    
    res.send("The " + animal + " says " + sound);
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Now serving your app!");
});

