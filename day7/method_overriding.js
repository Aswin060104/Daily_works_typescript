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
var Company = /** @class */ (function () {
    function Company() {
        this.companyName = "Chainsys";
        this.employee = 450;
    }
    Company.prototype.getTotalEmployee = function () {
        return this.employee + " is total Employees count";
    };
    return Company;
}());
var angularDepartment = /** @class */ (function (_super) {
    __extends(angularDepartment, _super);
    function angularDepartment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.employee = 120;
        return _this;
    }
    return angularDepartment;
}(Company));
var _company = new Company();
var _angularDepartment = new angularDepartment();
console.log(_company.employee);
console.log(_angularDepartment.employee);
console.log(_angularDepartment.getTotalEmployee());
console.log(_company.getTotalEmployee());
