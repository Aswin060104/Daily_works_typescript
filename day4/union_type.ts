type input = number | string;
type output = number | string;

const add = (a : input, b : input) : output => {
    if(typeof a == 'number' && typeof b == "number")
        return a+b;
    else if(typeof a == 'string' && typeof b == "string")
        return a.concat(" ").concat(b);
    else
        return "Invalid Input";
}

console.log(add(5,3)); // 8
console.log(add("Hello", "World")); // Helo World