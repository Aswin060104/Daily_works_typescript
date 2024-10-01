var Student = /** @class */ (function () {
    function Student() {
        this.name = "Raj";
        this.rollNo = 100;
        this.totalMarks = 453;
        this.grade = "A+";
    }
    Student.prototype.getStudentDetails = function () {
        return "Name : " + this.name + "\nRoll no - " + this.rollNo;
    };
    return Student;
}());
var s = new Student();
console.log(s.getStudentDetails());
