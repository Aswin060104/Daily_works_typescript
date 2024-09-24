function person(id) {
    return {
        id: id,
        name: "Aswin",
        age: 20
    };
}
var student = person(1);
var showstudent_1 = function (tem) {
    console.log(tem.id, tem.name, tem.age);
};
showstudent_1(student);
