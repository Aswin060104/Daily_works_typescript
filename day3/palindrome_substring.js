"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var s;
rl.question('Enter String : ', function (s) {
    var ar = s.split(" ");
    var len = ar.length;
    var i = 0;
    while (i < len) {
        var tem = ar[i];
        var start = 0;
        var end = tem.length - 1;
        var found = 0;
        while (start <= end) {
            if (tem[start] != tem[end]) {
                found = 1;
                break;
            }
            found = 0;
            start++;
            end--;
        }
        if (found == 0 && tem.length != 1) {
            var changed = [];
            for (var x = 0; x < tem.length; x++)
                changed.push("*");
            ar[i] = changed.join("");
        }
        i++;
    }
    console.log(ar.join(" "));
    rl.close();
});
/*

Input 1 :
Enter String : bob has a radar plane

Output:
*** has a ***** plane

Input 2:
Enter String : malayalam is a language

Output:
********* is a language
*/
