interface College{
    collegeName : string;
    studentCount : number;
    getCollegeDetails() : string;
}

interface Department{
    departmentName : string;
    departmentStudentCount : number;
    getDepartmentDetails() : string;
}

class kcet implements College{
    collegeName: string = "Kcet";
    studentCount: number = 1200;
    getCollegeDetails(): string {
        return "College Name : "+ this.collegeName + "\nStudent Count : "+this.studentCount;
    }
}
class cse extends kcet implements Department{
    departmentName: string = "CSE";
    departmentStudentCount: number = 126;
    
    getDepartmentDetails(): string {
        return "Department Name : " + this.departmentName +"\nStudents Count : "+this.departmentStudentCount;
    }
}