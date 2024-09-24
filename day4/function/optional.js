var a = 5;
var b = 7;
console.log(add(a));
function add(x, y) {
    if (y === void 0) { y = 10; }
    if (y != undefined)
        return x + y;
    return x;
}
