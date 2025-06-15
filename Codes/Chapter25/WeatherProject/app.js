const express= require("express");
const app= express();
const bodyParser=require("body-parser");
const https= require("https");
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){

    res.sendFile(__dirname+"/index.html");





    /*const city="Paris";
    const apiKey="9738954d78830158ce8d3c76a59c7b7b";
    const unit="metric";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units="+unit+"&appid="+apiKey;
    https.get(url,function(response){
        console.log(response.statusCode);  // 200 is good 
        response.on("data",function(data){
            // console.log(data); //we need to transfer the code we get from hex to normal so we use
            const weatherData=JSON.parse(data);
            // console.log(weatherData);
            const temp=weatherData.main.temp_max; // here we choose the main part of the weather data and select the higherst temp to review it
            // console.log(temp);
            const desc=weatherData.weather[0].description; ///cause it is an array
            // console.log(desc);
            // res.send("<h1>tempt is "+ temp +" </h1><br> the weather is"+ desc); //// this way or the way down
            const icon=weatherData.weather[0].icon;
            const imgURL="https://openweathermap.org/img/wn/"+icon+"@2x.png"
            res.write("<p>the weather is currently "+desc+ "</p>");
            res.write("the temprature is "+temp);
            res.write("<img src=" +imgURL+">");
            res.send(); /// it will take all the res.write and show it this way
            
        });
    })
        */
});
app.post("/",function(req,res){
    //console.log(req.body.cityName); 
    const city=req.body.cityName;
    const apiKey="9738954d78830158ce8d3c76a59c7b7b";
    const unit="metric";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units="+unit+"&appid="+apiKey;
    https.get(url,function(response){
        console.log(response.statusCode);  // 200 is good 
        response.on("data",function(data){
            // console.log(data); //we need to transfer the code we get from hex to normal so we use
            const weatherData=JSON.parse(data);
            // console.log(weatherData);
            const temp=weatherData.main.temp_max; // here we choose the main part of the weather data and select the higherst temp to review it
            // console.log(temp);
            const desc=weatherData.weather[0].description; ///cause it is an array
            // console.log(desc);
            // res.send("<h1>tempt is "+ temp +" </h1><br> the weather is"+ desc); //// this way or the way down
            const icon=weatherData.weather[0].icon;
            const imgURL="https://openweathermap.org/img/wn/"+icon+"@2x.png"
            res.write("<p>the weather is "+city+ " currently "+desc+ "</p>");
            res.write("the temprature is "+temp);
            res.write("<img src=" +imgURL+">");
            res.send(); /// it will take all the res.write and show it this way
            
        });
    })
    
});
app.listen(3000,function(){
    console.log("listen to 3000")
});