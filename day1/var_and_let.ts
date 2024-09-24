/* Note 1 : All the variabe in ts are converted to var because 
    let and const are only availabel from 2015 version 
    
    Note 2: If two let variables have same name then 
    it will be converted as a and a_1                           */

var a: number = 10;
var y : number = 1;
// const c : number = 5;
if (a > 5) {
    let y: number = 100;
}
console.log("After 1st if", y);
if (a > 1) {
    let y: number = 1000;
}
console.log("After 2nd if", y);
