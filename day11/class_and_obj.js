var person = {
    name: "Aswin",
    getStudentName: function () {
        return this.name;
    }
};
var student = /** @class */ (function () {
    function student() {
    }
    student.prototype.getStudentName = function () {
        return student._name;
    };
    return student;
}());
console.log(person.name);
person.name = "Arul";
var a = new student();
student._name = "1";
var b = new student();
student._name = "2";
console.log(a.getStudentName());
