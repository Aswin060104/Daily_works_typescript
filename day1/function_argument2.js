function person(id) {
    return {
        id: 2,
        name: "Aswin",
        age: 20
    };
}
;
var student = person(2);
var getStudentDetails = function (_a) {
    var id = _a.id, name = _a.name, age = _a.age;
    console.log(id, name, age);
};
getStudentDetails(student);
