class Department{
    collegeName :string = "KCET";
    departmentName :string = "CSE";

    static count : number = 0;
    static studentsDetails : { name : string, rollNo : number }[] = []; 

    constructor( name : string, rollNo : number){
        Department.studentsDetails[Department.count++] = {name, rollNo};
    }
    
}

class Student extends Department{
    studentName : string ;
    studentRollNo : number ;

    constructor(studentName : string, studentRollNo : number){
        super(studentName, studentRollNo);
        this.studentName = studentName;
        this.studentRollNo = studentRollNo;
    }

    getLastStudent() : string{
        return this.studentName + this.studentRollNo;
    }
}

var student = new Student("Arul",109);
var student = new Student("Aswin",102);