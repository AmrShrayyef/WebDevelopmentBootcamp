const express= require("express");
const bodyParser= require("body-parser");

const app=express();
let items = [
  { text: "buy food", done: false },
  { text: "cook food", done: false },
  { text: "eat food", done: false }
]; //cause it can not be defined inside a post request
app.set('view engine', 'ejs'); /// adding ejs template to our website which work with express https://github.com/mde/ejs/wiki/Using-EJS-with-Express
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res){
   let today=new Date();

   /*
   let curretDay=today.getDay();
   let day="";  
 
    switch (curretDay) {
        case 0:
            day="saturday"
            break;
      case 1:
            day="sunday"
            break;
      case 2:
            day="monday"
            break;
      case 3:
            day="tuesday"
            break;
      case 4:
            day="wenesday"
            break;
      case 5:
            day="thrusday"
            break;
      case 6:
            day="friday"
            break;
    }
            */

    var options={
      weekday: "long",
      day: "numeric",
      month: "long"
    };

    var day =today.toLocaleDateString("en-us",options); ///here is the magic 
    res.render("list", {thisday: day, newListItem: items});
});
app.post("/", function(req, res) {
  const item = req.body.newItem;
  if (item && item.trim() !== "") {
    items.push({ text: item.trim(), done: false });
  }
  res.redirect("/");
});
app.post("/toggle", function(req, res) {
  const index = parseInt(req.body.itemIndex);
  if (!isNaN(index) && items[index]) {
    items[index].done = !items[index].done;
  }
  res.redirect("/");
});
app.listen(3000, function(){
    console.log("3000");
})