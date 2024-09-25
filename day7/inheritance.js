var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(name, rollNo) {
        this.collegeName = "KCET";
        this.departmentName = "CSE";
        Department.studentsDetails[Department.count++] = { name: name, rollNo: rollNo };
    }
    Department.count = 0;
    Department.studentsDetails = [];
    return Department;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(studentName, studentRollNo) {
        var _this = _super.call(this, studentName, studentRollNo) || this;
        _this.studentName = studentName;
        _this.studentRollNo = studentRollNo;
        return _this;
    }
    Student.prototype.getLastStudent = function () {
        return this.studentName + this.studentRollNo;
    };
    return Student;
}(Department));
var student = new Student("Arul", 109);
var student = new Student("Aswin", 102);
console.log(Department.studentsDetails);
