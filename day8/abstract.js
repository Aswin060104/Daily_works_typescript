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
var company = /** @class */ (function () {
    function company(name) {
        this.companyName = "Chainsys";
        this.totalCount = 450;
        company.names[company.count++] = name;
    }
    company.prototype.getCompanyDetails = function () {
        return this.companyName + " " + this.totalCount;
    };
    company.count = 0;
    company.names = [];
    return company;
}());
var employee = /** @class */ (function (_super) {
    __extends(employee, _super);
    function employee(name, salary) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.salary = salary;
        return _this;
    }
    employee.prototype.getSalary = function () {
        return this.name + "'s " + this.salary;
    };
    return employee;
}(company));
var manager = /** @class */ (function (_super) {
    __extends(manager, _super);
    function manager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Arul";
        _this.salary = 30000;
        return _this;
    }
    manager.prototype.getSalary = function () {
        return this.name + "'s " + this.salary;
    };
    return manager;
}(company));
var aswin = new employee("Raja Aswin", 42000);
var Arul = new manager("Arul Kumaran");
console.log(aswin.getCompanyDetails());
console.log(Arul.getCompanyDetails());
console.log(aswin.getSalary());
console.log(Arul.getSalary());
