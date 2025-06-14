const express = require('express');
const bodyParser = require('body-parser'); /// so we target body of the html page
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));/// lets the server process form data from your HTML inputs.

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html"); 
});

app.get("/bmiCalculator", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html"); 
});

/////req holds information coming from the user.
////res determines how the server replies
app.post("/bmiCalculator", (req, res) => {
    let we = Number(req.body.weight); /// convert to numbers and target that html body part //// Data sent in a POST request
    let hi = Number(req.body.height); ///convert to numbers and target that html body part
    let bmiResult = we / (hi * hi);
    
    res.send(`your bmi is  ${bmiResult}`);  ////Sends text or data.
});

app.post("/", (req, res) => {
    let num1 = Number(req.body.n1); /// convert to numbers and target that html body part //// Data sent in a POST request
    let num2 = Number(req.body.n2); ///convert to numbers and target that html body part
    let result = num1 + num2;
    
    res.send(`The sum of  ${result}`);  ////Sends text or data.
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
