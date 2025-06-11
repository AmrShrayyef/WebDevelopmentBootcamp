const fs = require("fs");
/*
fs.writeFile("message.txt", "hello from node js", (err) => {
    if (err) {
        console.error("Error writing file:", err);
    } else {
        console.log("File was successfully saved!");
    }
});
*/
fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
}); 