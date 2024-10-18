var a = [11];
var b = [5, 4, 3];
var c = a.concat.apply(a, b);
console.log(c.sort());
var d = c.sort(function (a, b) { return a - b; });
console.log(d);
