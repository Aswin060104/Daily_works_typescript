class Employee{
    name : string;
    private salary : number;

    setSalary(salary : number) : void{
        this.salary = salary;
    }

    getSalary() : number{
        return this.salary;
    }
}

var e1 = new Employee();
var e2 = new Employee();
e1.name = "Aswin";      e1.setSalary(45000);
e2.name = "Arul";       e2.setSalary(52000);

console.log(e1);
console.log(e2);




