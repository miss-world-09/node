// import {a, b, d} from "./mymodule.js"
// console.log(a, b, d)

/* EXPLANATION: This is an ES6 module import (commented out).
 It tries to import named exports a, b, and d from mymodule.js.
*/

// import harry from "./mymodule.js"
// console.log(harry)

// (function(exports, require, module, __filename, __dirname) {

//     // Module code actually lives here
  
//   });

/* This is a wrapper function used internally in Node.js for each module.
It provides CommonJS module variables like:
exports → To export module data.
require → To import other modules.
module → Reference to the current module.
__filename → Absolute path of the file.
__dirname → Directory name of the module file.
*/

const a = require("./mymodule2.js")

console.log(a, __dirname, __filename)

/*require("./mymodule2.js") imports everything exported from mymodule2.js.
console.log(a, __dirname, __filename);
Logs the imported value a, the current file’s directory, and the filename.
*/