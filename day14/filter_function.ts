import { escape } from "querystring";

var ar : number[] = [1,2,3,4,5,4,3];
var modifiedArray : number[] = ar.filter(i => i < 5);
// console.log(modifiedArray);
// for(var i of ar)
//     console.log(i);
let m = new Map<number, number>();
ar.forEach(value => {
    var tem = m.get(value) ?? 0; // ?? handling null and undefined values
    m.set(value, tem + 1);
})
//   || used to handle 0, null, undefined and ""
let name = ""
var user = name || "Guest";
console.log(user, m);