export class department{
    departmentName : string = "Computer Science";
    departmentCount : number = 126;

    getDepartmentName(){
        return this.departmentName;
    }

    getDepartmentDetails(){
        return "Student count = " + this.departmentCount+"\nDepartment Name = "+ this.departmentName;
    }
}

var dpt = new department();
console.log(dpt.getDepartmentName());
