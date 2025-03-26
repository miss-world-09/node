// Node.js ka path module file aur directory ke paths ko handle karne ke liye use hota hai. Yeh alag-alag operating systems (Windows, Linux, Mac) ke file paths ke saath work karne me madad karta hai.

// path.basename(filePath) → Iska use sirf filename extract karne ke liye hota hai.
// Yahaan "C:\temp\myfile.html" me se sirf "myfile.html" niklega.
const path = require('node:path');

const a1=path.basename('C:\\temp\\myfile.html');
const a2=path.dirname('C:\\temp\\myfile.html');
console.log(a1);
console.log(a2);
const a3=path.extname(__filename)
console.log(__filename,a3);
// The path.isAbsolute() method determines if the literal path is absolute.
const a4=path.isAbsolute('C:\\temp\\myfile.html');
console.log(a4);
// The path.normalize() method normalizes the given path, resolving '..' and '.' segments.
const a5=path.normalize('C:\\temp\\myfile.html');
console.log(a5);
// The path.parse() method returns an object whose properties represent significant elements of the path.
const a6=path.parse('C:\\temp\\myfile.html');
console.log(a6);
// The path.resolve() method resolves a sequence of paths or path segments into an absolute path.
const a7=path.resolve('C:\\temp\\myfile.html');
console.log(a7);