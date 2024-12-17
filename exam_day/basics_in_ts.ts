import { error } from "console";

interface person{
    name : string,
    age : number
}

// let employee1 : person = {
//     name : "Aswin",
//     age : 21
// }
// console.log(employee1);

class Person implements person{
    name = "Aswin";
    age = 20;

    getName() : string{
        return this.name;
    }
}
const p = new Person();
console.log(p.getName());

function add<T extends number>(a: T, b: T): T {
    return (a + b) as T;
}

console.log(add(2, 3));       // 5
//console.log(add("Hi ", "TS")); // "Hi TS"

function addition(a : number, b : number, c? : number) : number;
function addition(a: string, b : string) : string;

function addition(a : any, b : any, c? : any) : any{
    if(typeof a == 'number' && typeof b == 'number' && typeof c == "number")
        return a + b + c;
    else if(typeof a == 'string' && typeof b == 'string' && typeof c == 'undefined')
        return a + b;
    // else
    //     return throw new error("Invalid Type");
}
addition(4,3);

