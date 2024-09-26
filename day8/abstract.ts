abstract class company{
    companyName : string = "Chainsys";
    totalCount : number = 450;


    abstract name : string;
    abstract salary : number;
    abstract getSalary() : string;

    getCompanyDetails() : string{
        return this.companyName +" "+ this.totalCount;
    }


    private static count : number = 0;
    static names : string[] = [];

    constructor(name : string){
        company.names[company.count++] = name;
    }
}

class employee extends company{
    salary: number;
    name: string;

    constructor(name : string, salary : number){
        super(name);
        this.name = name;
        this.salary = salary;
    }

    getSalary(): string {
        return this.name +"'s "+this.salary; 
    }
}

class manager extends company{
    name = "Arul";
    salary = 50000;

    getSalary(): string {
        return this.name +"'s "+this.salary;
    }
}
 const aswin = new employee("Raja Aswin",42000);
 const Arul = new manager("Arul Kumaran");

 console.log(aswin.getCompanyDetails());
 console.log(Arul.getCompanyDetails());
 console.log(aswin.getSalary());
 console.log(Arul.getSalary());
 
 
 
