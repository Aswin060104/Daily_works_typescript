var sub;
var add = function (a, b) {
    return "Addition of ".concat(a, " and ").concat(b, " is ").concat(a + b);
};
var mul = function (a, b) {
    return "Multiplication of ".concat(a, " and ").concat(b, " is ").concat(a * b);
};
sub = function (a, b) {
    return "Subtraction of ".concat(a, " and ").concat(b, " is ").concat(Math.abs(a - b));
};
console.log(add(5, 2));
console.log(sub(5, 2));
console.log(mul(5, 2));
