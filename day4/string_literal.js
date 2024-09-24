"use strict";
// To define a type that accepts only one specified string literal
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r.question('Enter string', function (input) {
    validateInput(input);
    r.close();
});
function validateInput(input) {
    var s = 'submit';
    console.log(typeof s);
}
