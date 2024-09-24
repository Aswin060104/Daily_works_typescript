var Employee = /** @class */ (function () {
    function Employee(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.getEmployeeDetails = function () {
        return this.name + " " + this.salary;
    };
    return Employee;
}());
var e1 = new Employee("Aswin", 42000);
var e2 = new Employee("Arul Kumaran", 45000);
console.log(e1.getEmployeeDetails());
console.log(e2.getEmployeeDetails());
