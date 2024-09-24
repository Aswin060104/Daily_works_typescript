var skills = [];
skills[0] = "Data Structures";
skills[1] = "Java";
console.log(skills);
skills.push.apply(skills, ["a", "b", "c"]);
console.log(skills);
