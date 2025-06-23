const express= require("express");
const bodyParser= require("body-parser");

const app=express();
app.set('view engine', 'ejs'); /// adding ejs template to our website which work with express https://github.com/mde/ejs/wiki/Using-EJS-with-Express
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); // to use css in our website ,we need to create a folder called public and add css folder inside and here we put style.css
app.get("/", function(req,res){

        //   1   /// res.send("hi");   ///send a responce to the browser and only one

        //   2   ///////////$$$$$$$$$$$$$$$$$$$$$$$$////
        // res.write("<h1>1</h1>"); //// we can use write to send multiple things  
        // res.write("<h2>2</h2>");
        // res.write("<h3>3</h3>"); /// it will send 1 and 2 and 3
        // res.send();
        // this is not the way as it will get reptetive so instead of sending line by line we can send a whole html page 

        //   3   ////////////////$$$$$$$$$$$$$$$$$$$$$$$$////
        ///res.sendFile(__dirname +"/index.html") //// this way we send a whole page instead of sending one by one
        /// this also is repetitve ,have to make many html pages for example success.html ,
        ///  failure.html etc.html in case of using if and else to send different results
        ////////////////////////$$$$$$$$$$$$$$$$$$$$$$$$////

        //   4   /////using templates is the way ///
        ///create a folder callled views and put list.ejs it and then call it res.render("list", {example: something});///
        /// example should be in the list.ejs inside <h1><%=something %></h1> used inside html tags something is the value that we will pass to the list.ejs//

        /// 5 ///// using <% scriptlet tag should be used i list.ejs in non html elements tag for example <% if(something) so it is used for control flow javascript

        /// 6 //// app.post("/" ,function(req,res){var item=req.body.newItem}) // newItem is the value we send user input in our webpage to our server
        /// 7 //// res.redirect("/")
    });
app.listen(3000, function(){
    console.log("3000");
})