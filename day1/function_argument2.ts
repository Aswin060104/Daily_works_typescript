function person(id : number) : {id : number, name : string, age : number} {
    return {
        id : 2,
        name : "Aswin",
        age : 20
    }
};

var student = person(2);

//var getStudentDetails = function details({id, name, age}) 
var getStudentDetails = (tem : {id : number, name : string, age : number}) => {
    console.log(tem.id, tem.name, tem.age);
}

getStudentDetails(student);