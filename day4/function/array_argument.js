var l = [1, 2, 3, 4, 5];
var tot = 0;
add(1, 2, 3);
function add() {
    var l = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        l[_i] = arguments[_i];
    }
    l.forEach(function (e) {
        tot += e;
    });
}
console.log(tot);
