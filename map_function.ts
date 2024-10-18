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
var ar : number [] = [2,3,1,3,4,2];
var unique : number[] = ar.filter((e,i)=>{ // e - element , i - index
    return i == ar.indexOf(e) 
    // if current index i and indexOf(e) is same then only it will push the value into unique array.
    // indexOf(e) gives the first occurence of e.
})
console.log(unique);