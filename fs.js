let fs = require("fs");
let content = fs.readFileSync("f1.txt");
console.log("content = " + content);

fs.writeFileSync("cris.txt", 'Cristiano Ronaldo');
// console.log(cris.txt);
// console.log("content = " + content);
fs.appendFileSync("cris.txt", " Cr7 is the Best");
fs.unlinkSync("cris.txt");
console.log("file removed");
