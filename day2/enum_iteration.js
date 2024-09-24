var grade;
(function (grade) {
    grade[grade["A"] = 0] = "A";
    grade[grade["B"] = 1] = "B";
    grade[grade["C"] = 2] = "C";
    grade[grade["D"] = 3] = "D";
})(grade || (grade = {}));


for (var i in grade) {
    if (!isNaN(Number(i)))
        console.log(i);
}
