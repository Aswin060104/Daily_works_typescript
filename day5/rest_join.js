var join_values;
join_values = function () {
    var v = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        v[_i] = arguments[_i];
    }
    var all_names = "";
    var tot = 0;
    for (var _a = 0, v_1 = v; _a < v_1.length; _a++) {
        var i = v_1[_a];
        if (typeof i == 'number')
            tot += i;
        else {
            all_names += i;
            all_names += " ";
        }
    }
    return [all_names, tot];
};
console.log(join_values("aswin", "arul", 5, 10));
