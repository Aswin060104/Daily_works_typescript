var department = /** @class */ (function () {
    function department(departmentName, changingCount) {
        this.name = "CSE";
        this.studentCount = 120;
        console.log("Before Changing department : ", this.name, this.studentCount);
        this.studentCount = changingCount;
        this.name = departmentName;
        console.log("After Changing department : ", this.name, this.studentCount);
    }
    return department;
}());
var c = new department("AD", 60);
var c = new department("ECE", 53);
