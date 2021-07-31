let fs = require("fs");
let path = require("path");


let inputArr = process.argv.slice(2);
// [ ' Web Dev', 'JavaScript', 'Browser', 'React' ]
console.log(inputArr);
let mainDir = inputArr[0];
console.log("MainDir = " + mainDir);

let topicFromInput = inputArr.slice(1, 4);
console.log("topicFromInput", topicFromInput);

// let firstModule = inputArr[1];
// let secondModule = inputArr[2];
// let thirdModule = inputArr[3];

let currentPath = process.cwd();
// let mainDirPath = path.join(currentPath, mainDir);
// let firstModulePath = path.join(currentPath, mainDir, firstModule);
// let secondModulePath = path.join(currentPath, mainDir, secondModule);
// let thirdModulePath = path.join(currentPath, mainDir, thirdModule);

// console.log("currentPath = " + currentPath);
// console.log("Original MainDirPath = " + mainDirPath);
// console.log("firstModulePath = " + firstModulePath);
// console.log("secondModulePath = " + secondModulePath);
// console.log("thirdModulePath = " + thirdModulePath);

let mainDirPath = path.join(currentPath, mainDir);
let isMainModulePresent = fs.existsSync(mainDirPath);

if( isMainModulePresent ){
    console.log( "Directory already created 😜" );
    return;
} else { 
    console.log( "Main Directiory created 😎");
    fs.mkdirSync(mainDirPath);
    let topicFromInput = inputArr.slice(1, 4);
    for(let i=0; i < topicFromInput.length; i++){
        let ctopicPath = path.join(mainDirPath, topicFromInput[i]);
        console.log(topicFromInput[i], "created...yahooo😃");
        fs.mkdirSync(ctopicPath);
        for(let j=1; j <= 5; j++){
            let modulePath = path.join(ctopicPath, "Module" + j);
            console.log("Module" + j , "created inside", ctopicPath);
            fs.mkdirSync(modulePath);
            // funwithfs/web dev/javascript/module1
            let filePath = path.join(modulePath, "content.md");
            fs.writeFileSync(filePath, "# Hello ");
        }
    }
}
