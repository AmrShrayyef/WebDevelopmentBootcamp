const express= require("express");
const bodyParser= require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs'); 

const items = [];
app.get("/", function(req, res) {
    const now = new Date();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const thisday = days[now.getDay()];

    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const currentTime = `${hours}:${minutes}:${seconds}`;

    res.render("list2", {
        thisday: thisday,
        newListItem: items,
        currentTime: currentTime
    });
});


app.post("/", function(req, res) {
    const newItem = req.body.newItem;

    if (newItem && newItem.trim() !== "") {
        items.push(newItem.trim());
    }

    res.redirect("/");
});

app.post("/delete", function(req, res) {
    const index = req.body.itemIndex;
    if (index !== undefined && items[index]) {
        items.splice(index, 1);
    }
    res.redirect("/");
});
app.listen(3000, function(){
    console.log("3000");
})