var company = /** @class */ (function () {
    function company(name) {
        this.employeeName = name;
        company._name[company.employeeCount] = name;
        company._id[company.employeeCount] = company.employeeCount;
        company.employeeCount++;
    }
    company.prototype.getEmployeeCount = function () {
        return company.employeeCount;
    };
    company.prototype.getEmployeeName = function (_id) {
        return company._name[_id - 1];
    };
    company.getAllEmployee = function () {
        return company._name;
    };
    company.prototype.getName = function () {
        return this.employeeName;
    };
    company.employeeCount = 0;
    company._name = [];
    company._id = [];
    return company;
}());
var c = new company("Aswin");
var c1 = new company("Arul");
var c = new company("Sugu");
var c = new company("Rahul");
console.log(c.getName());
console.log(c1.getName());
console.log(c.getEmployeeCount());
console.log(company.getAllEmployee().join(" "));
