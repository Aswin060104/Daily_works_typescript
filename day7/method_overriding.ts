class Company {
    companyName :string = "Chainsys";
    employee : number = 450;

    getTotalEmployee() : string{
        return this.employee +" is total Employees count";
    }
}

class angularDepartment extends Company{
    employee: number = 120;

    getTotalEmployee(): string {
        return this.employee + " is Angular Department count";
    }
}

var _company = new Company();
var _angularDepartment = new angularDepartment();
console.log(_angularDepartment.getTotalEmployee()); // 120
console.log(_company.getTotalEmployee()); // 450