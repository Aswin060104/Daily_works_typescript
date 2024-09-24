var Employee1 = /** @class */ (function () {
    function Employee1(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Employee1.prototype.getEmployeeDetails = function () {
        return this.name + " " + this.salary;
    };
    return Employee1;
}());
var e1 = new Employee1("Aswin", 42000);
var e2 = new Employee1("Arul Kumaran", 45000);
console.log(e1.getEmployeeDetails());
console.log(e2.getEmployeeDetails());
