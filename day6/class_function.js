var person = /** @class */ (function () {
    function person(name, rollNo) {
        person._name[person.i] = name;
        person.rollNo[person.i] = rollNo;
        person.i += 1;
    }
    person.prototype.getDetails = function (i) {
        for (var index = 0; index < i; index++) {
            console.log(person.rollNo[index]);
            if (person.rollNo[index] == i)
                return "Name :" + person._name[index] + " Roll No :" + person.rollNo[index];
        }
        return "Roll not found";
    };
    person._name = [];
    person.rollNo = [];
    person.i = 0;
    return person;
}());
var person1 = {
    name: "Aswin",
    rollNo: 102
};
var person2 = {
    name: "Arul",
    rollNo: 109
};
var person3 = {
    name: "Sugu",
    rollNo: 117
};
var person4 = {
    name: "Rahul",
    rollNo: 19
};
var p = new person(person1.name, person1.rollNo);
var p = new person(person2.name, person2.rollNo);
var p = new person(person3.name, person3.rollNo);
var p = new person(person4.name, person4.rollNo);
console.log(p.getDetails(102));
