class Employee1{
    private name : string;
    private salary : number;

    constructor(name : string, salary : number){
        this.name = name;
        this.salary = salary;
    }
    
    getEmployeeDetails() : string{
        return this.name +" "+ this.salary;
    }
}

var e1 = new Employee1("Aswin",42000);
var e2 = new Employee1("Arul Kumaran",45000);
console.log(e1.getEmployeeDetails());
console.log(e2.getEmployeeDetails());