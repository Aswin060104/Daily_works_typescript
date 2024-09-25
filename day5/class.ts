class Person {
    firstName : string; 
    lastName : string;
    rollNo : number;

    constructor(firstName : string, lastName : string, rollNo : number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.rollNo = rollNo;
    }

    getName() : string {
        return `${this.firstName} ${this.lastName}`;
    }
    getRollNo() : number {
        return this.rollNo;
    }
}

let person = new Person("Raja","Aswin",102);
var n : string = person.getName();
console.log(person);
console.log(n, person.getRollNo());