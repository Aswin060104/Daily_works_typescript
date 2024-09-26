import {department} from './department';

class student extends department{
    studentName: string ; 
    studentRollNo : number;

    getDepartmentName(): string {
        return "Department of "+ this.studentName+" is "+super.getDepartmentName();
    }
}

var st = new student();
st.studentName = "Aswin";
console.log(st.getDepartmentName());
console.log(st.getDepartmentDetails());
