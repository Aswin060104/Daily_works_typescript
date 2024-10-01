var Student = /** @class */ (function () {
    function Student() {
        this.name = "Aswin";
        this.rollNo = 102;
        this.totalMarks = 453;
        this.grade = "A+";
    }
    Student.prototype.getStudents = function () {
        return "Name : " + this.name + "\nRoll no - " + this.rollNo;
    };
    return Student;
}());
var s = new Student();
console.log(s.name);
console.log(s.getStudents());
