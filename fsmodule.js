const fs=require('fs');

// fs.readFile('file.txt','utf8',(err,data)=>{
//     console.log(err,data)
// })
// console.log("just finished reading this file")

const a=fs.readFileSync('file.txt')
console.log(a.tostring())
console.log("finished reading this file")