var week = {};
console.log(week);
(function (week) {
    week[week["sunday"] = 1] = "sunday";
    week[week["monday"] = 2] = "monday";
    week[week["tuesday"] = 3] = "tuesday";
    week[week["wednesday"] = 4] = "wednesday";
    week[week["thursday"] = 5] = "thursday";
    week[week["friday"] = 6] = "friday";
    week[week["saturday"] = 7] = "saturday";
})(week);
;

console.log(week);
