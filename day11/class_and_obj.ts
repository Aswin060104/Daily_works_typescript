var person = {
    name : "Aswin",
    getStudentName(){
        return this.name;
    }
}

class student {
    name : string;
    getStudentName(){
        return this.name;
    }
}

console.log(person.name);
person.name = "Arul";

var a = new student();
a.name = "1";
var b = new student();
b.name = "2";

console.log(a.getStudentName());
