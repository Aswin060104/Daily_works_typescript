interface Maths {
    (a : number, b : number) : number;
}

var add : Maths = (a, b) => {
    return a+b;
}

var mul : Maths = (a, b) => {
    return a*b;
}

console.log("Addition : " + add(5,2));
console.log("Multiplication :" + mul(5,2));