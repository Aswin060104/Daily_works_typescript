"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var n = 3;
var month;
(function (month) {
    month[month["jan"] = 0] = "jan";
    month[month["feb"] = 1] = "feb";
    month[month["mar"] = 2] = "mar";
    month[month["april"] = 3] = "april";
    month[month["may"] = 4] = "may";
    month[month["june"] = 5] = "june";
    month[month["july"] = 6] = "july";
    month[month["august"] = 7] = "august";
    month[month["sep"] = 8] = "sep";
    month[month["oct"] = 9] = "oct";
    month[month["nov"] = 10] = "nov";
    month[month["dec"] = 11] = "dec";
})(month || (month = {}));
switch (n) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("This month have 31 days");
        console.log(month[n - 1]);
        break;
    case 2:
        console.log("This month have 28 days");
        console.log(month[n - 1]);
        break;
    default:
        console.log(month[n - 1]);
        console.log("This month have 30 days");
}