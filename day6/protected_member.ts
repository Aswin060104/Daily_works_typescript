class Student {
    name : string = "Aswin";
    protected marks : number = 550;

    getMark() {
        return this.marks;
    }
}

var s = new Student();
console.log(s.name);
console.log(s.getMark());