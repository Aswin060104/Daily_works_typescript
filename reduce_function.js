var ar = [1, 2, 3, 4, 2, 3, 1];
var c = ar.reduce(function (acc, v) {
    var tem = (acc.get(v) || 0) + 1;
    acc.set(v, tem);
    return acc;
}, new Map());
console.log(c);
