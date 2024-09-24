class department{
    readonly name : string = "CSE";
    studentCount : number = 120;

    constructor(departmentName : string, changingCount : number){
        console.log("Before Changing department : ", this.name, this.studentCount);

        this.name = departmentName;        
        this.studentCount = changingCount;

        console.log("After Changing department : ", this.name, this.studentCount);
    }

}

var c = new department("AD", 60);
var c = new department("ECE", 53);
