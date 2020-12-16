var express = require('express');
var app=express();

app.locals.property=require("./Expenditure-report-data.json");

app.set("view engine","ejs");
app.use(express.static('public'));

app.get("/",function(req,res){
    res.render("index");
});

app.listen(process.env.PORT||3000,function(){
    console.log('Server Started');
});