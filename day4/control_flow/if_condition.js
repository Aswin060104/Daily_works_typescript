"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r.question('Enter Number: ', function (input) {
    var n = Number(input);
    validateAge(n);
    r.close();
});
function validateAge(n) {
    if (n > 18)
        console.log("Can Vote");
    else
        console.log("Can't Vote");
}
