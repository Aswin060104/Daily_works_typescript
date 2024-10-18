var a : number[] = [11]
var b : number[] = [5,4,3]
var c : number[] = a.concat(...b);
console.log(c.sort());
var d :number [] = c.sort((a,b) => a - b);
console.log(d);