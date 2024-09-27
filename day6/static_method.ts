class company{
    private static employeeCount : number = 0;

    employeeName : string;

    static _name : string[] = [];
    static _id : number[] = [];

    constructor( name : string){
        this.employeeName = name;
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

    getName(){
        return this.employeeName;
    }
}

var c = new company("Aswin");
var c1 = new company("Arul");
var c = new company("Sugu");
var c = new company("Rahul");

console.log(c.getName());
console.log(c1.getName());
console.log(c.getEmployeeCount());
console.log(company.getAllEmployee().join(" "));