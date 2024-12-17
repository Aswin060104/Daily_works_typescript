// let employee1 : person = {
//     name : "Aswin",
//     age : 21
// }
// console.log(employee1);
var Person = /** @class */ (function () {
    function Person() {
        this.name = "Aswin";
        this.age = 20;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var p = new Person();
console.log(p.getName());
function add(a, b) {
    return (a + b);
}
console.log(add(2, 3)); // 5
function addition(a, b, c) {
    if (typeof a == 'number' && typeof b == 'number' && typeof c == "number")
        return a + b + c;
    else
        return a + b + c;
}
addition(4, 3);
