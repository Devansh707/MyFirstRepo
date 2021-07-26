let path = require('path');
let fs = require('fs');

//input
let inputArr = process.argv.slice(2);
console.log(inputArr);
let filename = inputArr[0];
let content = inputArr[1];

console.log("filename = " + filename);
console.log("content = " + content);

//current path of directory
let currentPath = process.cwd();
console.log("currentPath = " + currentPath);

//paths->path->platform independent
let joinedPath = path.join(currentPath,"abc", "def", "ghi" );
console.log("joinedPath = " + joinedPath);
let filePath = path.join(currentPath, "dir1", filename);
console.log("filePath = " + filePath);
fs.writeFileSync(filename, content + " Will be the best Software Programmer in the World");
fs.appendFileSync(filename, "Devansh");
// fs.unlinkSync(filename);