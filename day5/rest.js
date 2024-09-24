var getNames;
getNames = function () {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    console.log(names);
    for (var _a = 0, names_1 = names; _a < names_1.length; _a++) {
        var i = names_1[_a];
        console.log(i);
    }
};
getNames("Aswin", "Arul", "Sugu", "Manoj");
