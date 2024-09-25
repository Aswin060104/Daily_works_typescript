interface student{
    name : string ,
    rollNo : number
}

interface department extends student{
    departmentName : string,
    departmentStrength : number
}

var person1 : department = {
    name : "Aswin",
    rollNo : 102,
    departmentName : "CSE",
    departmentStrength : 63
}
var person2 : student = {
    name : "Arul",
    rollNo : 109
}

console.log(person1);
console.log(person2);