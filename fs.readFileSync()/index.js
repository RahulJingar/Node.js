const fs = require("fs");
let text = fs.readFileSync("dele.txt","utf-8");
text = text.replace("writing","chup");
console.log(text)

console.log("rohan.text",text)