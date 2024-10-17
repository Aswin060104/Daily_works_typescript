"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ar = [1, 2, 3, 4, 5, 4, 3];
var modifiedArray = ar.filter(function (i) { return i < 5; });
// console.log(modifiedArray);
// for(var i of ar)
//     console.log(i);
var m = new Map();
ar.forEach(function (value) {
    var _a;
    var tem = (_a = m.get(value)) !== null && _a !== void 0 ? _a : 0; // ?? handling null and undefined values
    m.set(value, tem + 1);
});
//   || used to handle 0, null, undefined and ""
var name = "";
var user = name || "Guest";
console.log(user, m);
