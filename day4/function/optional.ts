var a : number = 5;
var b : number = 7;
console.log(add(a));

function add( x : number, y? : number) : number {
    if (y != undefined)
        return x+y;
    return x;
}