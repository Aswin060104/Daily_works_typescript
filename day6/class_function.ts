class person{
    static _name : string[] = [];
    static rollNo : number[] = [];
    static i : number = 0;

    constructor(name : string, rollNo : number){
        person._name[person.i] = name;
        person.rollNo[person.i] = rollNo;
        person.i +=1 ;
    }

    getDetails(i : number) : string{        
        for(var index = 0; index < i; index++){
            if(person.rollNo[index] == i)
                return "Name : "+person._name[index]+" Roll No : "+person.rollNo[index];
        }
        return "Roll not found";
    }
}

type Person = {
    name : string,
    rollNo : number
}

var person1 : Person = {
    name : "Aswin",
    rollNo : 102
}

var person2 : Person = {
    name : "Arul",
    rollNo : 109
}

var person3 : Person = {
    name : "Sugu",
    rollNo : 117
}

var person4 : Person = {
    name : "Rahul",
    rollNo : 19
}
var p = new person(person1.name, person1.rollNo);
var p = new person(person2.name, person2.rollNo);
var p = new person(person3.name, person3.rollNo);
var p = new person(person4.name, person4.rollNo);

console.log(p.getDetails(102));