var person1 = {
    _name: "Ram",
    phoneNo: 9865548933,
    age: 35,
    getDetails: function () {
        return this._name + this.phoneNo + this.age;
    }
};
// var person2 : Person = {
//     _name : "Raj",
//     phoneNo : 6748397483,
//     age : 34
// }
console.log(person1);
console.log(person1.getDetails());
