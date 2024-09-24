class Employee{
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

var e1 = new Employee("Aswin",42000);
var e2 = new Employee("Arul Kumaran",45000);
console.log(e1.getEmployeeDetails());
console.log(e2.getEmployeeDetails());

