interface maths {
    (a : number, b : number) : string;
}

var sub : maths;
var add : maths = function  ( a, b ) {
    return `Addition of ${a} and ${b} is ${a+b}`;
}

var mul : maths =  (a, b) => {
    return `Multiplication of ${a} and ${b} is ${a*b}`;
}

sub = (a, b) => {
    return `Subtraction of ${a} and ${b} is ${Math.abs(a-b)}`;
}

console.log(add(5,2));
console.log(sub(5,2));
console.log(mul(5,2));