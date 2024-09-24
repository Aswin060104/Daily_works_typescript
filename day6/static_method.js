var company = /** @class */ (function () {
    function company(name) {
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
    company.prototype.getAllEmployee = function () {
        return company._name;
    };
    company.employeeCount = 0;
    company._name = [];
    company._id = [];
    return company;
}());
var c = new company("Aswin");
var c = new company("Arul");
var c = new company("Sugu");
var c = new company("Rahul");
console.log(c.getEmployeeCount());
console.log(c.getEmployeeName(1));
console.log(c.getAllEmployee().join(" "));
