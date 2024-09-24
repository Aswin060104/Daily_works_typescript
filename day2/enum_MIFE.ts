enum subjects {
    tamil,
    english,
    maths,
    science,
    social
}
var checkSubject = (check : subjects) => {
    console.log(check[1]);
    if(check == subjects.tamil || check == subjects.english)
        return "Languages";
    else
        return "Not a language";  
};

console.log(checkSubject(subjects.maths));


