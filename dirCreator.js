let path = require("path");
let fs = require("fs");

let inputArr = process.argv.slice(2);
// [ ' Web Dev', 'JavaScript', 'Browser', 'React' ]
console.log(inputArr);
let mainDir = inputArr[0];
console.log("MainDir = " + mainDir);

let firstModule = inputArr[1];
let secondModule = inputArr[2];
let thirdModule = inputArr[3];

let currentPath = process.cwd();
let mainDirPath = path.join(currentPath, mainDir);
let firstModulePath = path.join(currentPath, mainDir, firstModule);
let secondModulePath = path.join(currentPath, mainDir, secondModule);
let thirdModulePath = path.join(currentPath, mainDir, thirdModule);

console.log("currentPath = " + currentPath);
console.log("Original MainDirPath = " + mainDirPath);
console.log("firstModulePath = " + firstModulePath);
console.log("secondModulePath = " + secondModulePath);
console.log("thordModulePath = " + thirdModulePath);
