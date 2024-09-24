var separate_values;
separate_values = function () {
    var v = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        v[_i] = arguments[_i];
    }
    var names = [];
    var age = [];
    v.forEach(function (element, index) {
        if (typeof element == 'number')
            age.push(element);
        else
            names.push(element);
    });
    return [names, age];
};
console.log(separate_values("Aswin", 20, 10, "Arul", 30));
