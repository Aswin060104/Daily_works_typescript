var getDetails;
getDetails = function () {
    var name_age = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        name_age[_i] = arguments[_i];
    }
    for (var _a = 0, name_age_1 = name_age; _a < name_age_1.length; _a++) {
        var j = name_age_1[_a];
        console.log(j);
    }
};
getDetails("aswin", 20, "arul", 34);
