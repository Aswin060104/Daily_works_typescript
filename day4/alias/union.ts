type rollNo = string | number;

var student : {
    name : string,
    rollNo : rollNo
}

student = {
    name : "Aswin",
    rollNo : "21ucs102"
}

console.log(student);

student.rollNo = 102;

console.log(student);