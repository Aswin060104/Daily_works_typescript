function persons(id : number){
    return{
        id : id,
        name : "Aswin",
        age : 20
    }
}
var student = persons(1);
var showstudent_1 =  (tem:{id:number , name:string, age:number }) => {
    console.log(tem.id, tem.name, tem.age );
};

showstudent_1(student);