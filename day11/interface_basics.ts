interface Person {
    _name : string;
    phoneNo : number;
    age : number;
    getDetails() : string;
}

var person1 : Person = {
    _name : "Ram",
    phoneNo :9865548933,
     age : 35,
     getDetails(){
        return this._name +" " +this.phoneNo +" "+ this.age;
     }
}

// var person2 : Person = {
//     _name : "Raj",
//     phoneNo : 6748397483,
//     age : 34
// }
console.log(person1);
console.log(person1.getDetails());
