const bodyParser = require("body-parser");
const express = require("express");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/",function(req,res){
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    var bmi = weight/(height*height);
    res.send(" BMI of the given inputs are:"+ bmi);
});

app.listen(3000,function(){
    console.log("Server Running");
});