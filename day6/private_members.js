var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    return Employee;
}());
var e1 = new Employee();
var e2 = new Employee();
e1.name = "Aswin";
e1.setSalary(45000);
e2.name = "Arul";
e2.setSalary(52000);
console.log(e1);
console.log(e2);
