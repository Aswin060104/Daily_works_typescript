/* Note 1 : All the variabe in ts are converted to var because
    let and const are only availabel from 2015 version
    
    Note 2: If two let variables have same name then
    it will be converted as a and a_1                       */

    
var a = 10;
var y = 1;
// const c : number = 5;
if (a > 5) {
    var y_1 = 100;
}
console.log("After 1st if", y);
if (a > 1) {
    var y_2 = 1000;
}
console.log("After 2nd if", y);
