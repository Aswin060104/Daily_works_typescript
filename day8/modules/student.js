"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var department_1 = require("./department");
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    student.prototype.getDepartmentName = function () {
        return "Department of " + this.studentName + " is " + _super.prototype.getDepartmentName.call(this);
    };
    return student;
}(department_1.department));
var st = new student();
st.studentName = "Aswin";
console.log(st.getDepartmentName());
console.log(st.getDepartmentDetails());
