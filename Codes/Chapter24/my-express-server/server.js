const express = require('express');
const app = express();
app.get("/", function(req, res){
res.send("hello");
});
app.get("/Contact", function(req, res){
res.send("Contact Me");
});
app.get("/Name", function(req, res){
res.send("Contact Me");
});
app.listen(3000,function(){
    console.log("server started on port 3000");
});
///localhost:3000