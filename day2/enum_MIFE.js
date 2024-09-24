var subjects;
(function (subjects) {
    subjects[subjects["tamil"] = 0] = "tamil";
    subjects[subjects["english"] = 1] = "english";
    subjects[subjects["maths"] = 2] = "maths";
    subjects[subjects["science"] = 3] = "science";
    subjects[subjects["social"] = 4] = "social";
})(subjects || (subjects = {}));
var checkSubject = function (check) {
    if (check == subjects.tamil || check == subjects.english)
        return "Languages";
    else
        return "Not a language";
};
console.log(checkSubject(subjects.maths));