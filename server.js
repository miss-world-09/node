console.log("Hello World");

var slugify = require('slugify');

// slugify is used to convert a string into a URL-friendly format.


// Creates a slug with default '-' separator
let a = slugify('some string'); // Output: 'some-string'
console.log(a);

// Creates a slug with '_' as separator
const b = slugify('some string', '_');  // Output: 'some_string'
console.log(b);

// console.log("Server is running...");
// const os = require('os');
// console.log("Free Memory:", os.freemem());
// const os = require('os');
setTimeout(() => {
    console.log("Exiting program...");
    process.exit(0);
}, 5000); // Exit after 5 seconds


