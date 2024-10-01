interface BasicDetails{
    name : string;
    rollNo : number;
}

interface MarkDetails{
    totalMarks : number;
    grade : string;
}
class Student1 implements BasicDetails, MarkDetails{
    name : string = "Aswin";
    rollNo: number = 102;
    totalMarks: number = 453;
    grade: string = "A+";
    getStudents() {
        return "Name : "+this.name + "\nRoll no - " + this.rollNo;
    }
}

var s = new Student1();
console.log(s.getStudents());