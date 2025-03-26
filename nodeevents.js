const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
/*EventEmitter ek built-in module hai jo events handle karne ke liye use hota hai.
Isko import kiya taaki hum custom events bana sakein.
Humne MyEmitter naam ki ek class banayi, jo EventEmitter ko extend karti hai.
Ab hum apni custom event create aur handle kar sakte hain.
MyEmitter ka ek object banaya jo event emit karega.
*/

// Register event listener
myEmitter.on("WaterFall", () => {
    console.log("Please turn off the motor");
    setTimeout(() => {
        console.log("It's a gentle reminder, please turn off the motor");
    }, 5000);
});

console.log("The script is running");

// Emit event
myEmitter.emit("WaterFall");

/*Jab "WaterFall" event trigger hoga, ye function chalega:
Sabse pehle: "Please turn off the motor" print karega.
5 sec baad: "It's a gentle reminder, please turn off the motor" print karega.
*/
