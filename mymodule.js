// The export keyword in JavaScript is used to make variables, functions, or objects available to other files. It is a feature of ES6 Modules.

// These are named exports.
// They can be imported in another file using:

export const a = 1 // named export
export const b = 2 // named export
export const c = 3 // named export
export const d = 4 // named export
export const e = 5 // named export
 
const obj = {
    x: 5,
    y: 7
}

export default obj; // default export
// This object { x: 5, y: 7 } is exported as the default export.
