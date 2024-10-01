interface BasicDetails{
    name : string;
    rollNo : number;
}

interface MarkDetails{
    totalMarks : number;
    grade : string;
}

class Student implements BasicDetails, MarkDetails{
    name : string = "Raj";
    rollNo: number = 100;
    totalMarks: number = 453;
    grade: string = "A+";

    getStudentDetails() {
        return "Name : "+this.name + "\nRoll no - " + this.rollNo;
    }

}

var s = new Student();
console.log(s.getStudentDetails());