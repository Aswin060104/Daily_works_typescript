// var n : number = 100;
// var s : string = n.toString();
// console.log(s);
// var n : number = parseInt(s);
// console.log(n);
// // s.slice()
// let s =  require('prompt-sync')();
// var a = s("Enter a number : ");
// var b = s("Enter the i :")
// console.log(a);
var ar = [2, 3, 1, 3, 4, 2];
var unique = ar.filter(function (e, i) {
    return i == ar.indexOf(e);
});
console.log(unique);