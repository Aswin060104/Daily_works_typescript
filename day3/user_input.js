
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Please enter something: ', function (input) {
    console.log("You entered: ".concat(input));
    console.log("Hello");
    rl.close();
});
