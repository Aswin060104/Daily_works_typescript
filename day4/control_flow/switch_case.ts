import { log } from "console";

var n : number = 3;

enum month {
    jan, feb, mar, april, may, june, july, august, sep, oct, nov, dec
}
switch (n) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("This month have 31 days");
        console.log(month[n-1]);
        break;
    case 2:
        console.log("This month have 28 days");
        console.log(month[n-1]);
        break;
    default:
        console.log(month[n-1]);
        console.log("This month have 30 days");       
}