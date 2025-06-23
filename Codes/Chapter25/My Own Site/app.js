const express = require('express')
const bodyParser = require('body-parser')
const request=require("request")
const app = express()
const port = 3000;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  
  // Send a simple HTML response with the user's full name
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Result</title>
    </head>
    <body>
      <h1>Hello, ${firstName} ${lastName}!</h1>
      <p>Welcome to our site!</p>
    </body>
    </html>
  `);
});
app.listen(port, function(req,res){
    console.log("3000!")
})