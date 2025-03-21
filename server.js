console.log("Hello World");

var slugify = require('slugify');

// Creates a slug with default '-' separator
let a = slugify('some string'); // Output: 'some-string'
console.log(a);

// Creates a slug with '_' as separator
const b = slugify('some string', '_');  // Output: 'some_string'
console.log(b);

console.log("Server is running...");
