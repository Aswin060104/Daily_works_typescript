"use strict";
/*Input a string of alphabets. Find out the number of occurrence of all alphabets in that string.
Find out the alphabet with maximum occurrence.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter a String : ', function (s) {
    alphabetCount(s);
    rl.close();
});
function alphabetCount(s) {
    var found = 0;
    var ar = [];
    var count;
    (function (count) {
        count[count["a"] = 0] = "a";
        count[count["b"] = 1] = "b";
        count[count["c"] = 2] = "c";
        count[count["d"] = 3] = "d";
        count[count["e"] = 4] = "e";
        count[count["f"] = 5] = "f";
        count[count["g"] = 6] = "g";
        count[count["h"] = 7] = "h";
        count[count["i"] = 8] = "i";
        count[count["j"] = 9] = "j";
        count[count["k"] = 10] = "k";
        count[count["l"] = 11] = "l";
        count[count["m"] = 12] = "m";
        count[count["n"] = 13] = "n";
        count[count["o"] = 14] = "o";
        count[count["p"] = 15] = "p";
        count[count["q"] = 16] = "q";
        count[count["r"] = 17] = "r";
        count[count["s"] = 18] = "s";
        count[count["t"] = 19] = "t";
        count[count["u"] = 20] = "u";
        count[count["v"] = 21] = "v";
        count[count["w"] = 22] = "w";
        count[count["x"] = 23] = "x";
        count[count["y"] = 24] = "y";
        count[count["z"] = 25] = "z";
    })(count || (count = {}));
    var l = s.length;
    for (var i = 0; i < l; i++) {
        if (ar[count[s[i]]] == undefined) {
            ar[count[s[i]]] = 1;
        }
        else
            ar[count[s[i]]] += 1;
    }
    var ch = " ";
    var filtered_ar = ar.filter(function (e) { return !isNaN(e); });
    var max = Math.max.apply(Math, filtered_ar);
    for (var i = 0; i < 26; i++) {
        if (ar[i] == max) {
            console.log("Maximun occured character : ", count[i], "and its count is", max);
        }
    }
}
/*
Inoput 1:
Enter a String : raja aswin

*/ 
