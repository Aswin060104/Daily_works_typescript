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
var p1 = new Employee();
var p2 = new Employee();
p1.name = "Aswin";
p1.setSalary(45000);
p2.name = "Arul";
p2.setSalary(52000);
console.log(p1);
console.log(p2);
