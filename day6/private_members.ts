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

var p1 = new Employee();
var p2 = new Employee();
p1.name = "Aswin";      p1.setSalary(45000);
p2.name = "Arul";       p2.setSalary(52000);


console.log(p1);
console.log(p2);




