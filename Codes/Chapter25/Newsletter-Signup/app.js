const express= require("express");
const bodyParser=require("body-parser");
const request=require("request");
const https= require("https");
const app= express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/",function(req,res){

    res.sendFile(__dirname+"/signup.html");

});
app.post("/",function(req,res){
   var firstName= req.body.fName
   var lastName= req.body.lName
   var e = req.body.email
   console.log(firstName+lastName+e)

});
app.listen(3000,function(){
    console.log("listen to 3000");});