class company{
    private static employeeCount : number = 0;

    static _name : string[] = [];
    static _id : number[] = [];

    constructor( name : string){
        company._name[company.employeeCount] = name;
        company._id[company.employeeCount] = company.employeeCount;

        company.employeeCount++;
    }

    getEmployeeCount() : number {
        return company.employeeCount;
    }

    getEmployeeName(_id) : string{
        return company._name[_id-1];
    }

    static getAllEmployee() : string[]{
        return company._name;
    }
}

var c = new company("Aswin");
var c = new company("Arul");
var c = new company("Sugu");
var c = new company("Rahul");

console.log(c.getEmployeeCount());
console.log(c.getEmployeeName(1));
console.log(company.getAllEmployee().join(" "));

