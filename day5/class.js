var Person = /** @class */ (function () {
    function Person(firstName, lastName, rollNo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.rollNo = rollNo;
    }
    Person.prototype.getName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Person.prototype.getRollNo = function () {
        return this.rollNo;
    };
    return Person;
}());
var person = new Person("Raja", "Aswin", 102);
var n = person.getName();
console.log(person);
console.log(n, person.getRollNo());
