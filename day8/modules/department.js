"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.department = void 0;
var department = /** @class */ (function () {
    function department() {
        this.departmentName = "Computer Science";
        this.departmentCount = 126;
    }
    department.prototype.getDepartmentName = function () {
        return this.departmentName;
    };
    department.prototype.getDepartmentDetails = function () {
        return "Student count = " + this.departmentCount + "\n Department Name = " + this.departmentName;
    };
    return department;
}());
exports.department = department;
var dpt = new department();
console.log(dpt.getDepartmentName());
