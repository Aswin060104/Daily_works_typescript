var Student = /** @class */ (function () {
    function Student() {
        this.name = "Aswin";
        this.marks = 550;
    }
    Student.prototype.getMark = function () {
        return this.marks;
    };
    return Student;
}());
var s = new Student();
console.log(s.name);
console.log(s.getMark());
