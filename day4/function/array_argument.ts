//rest parameter

var li : number[] = [1,2,3,4,5];
var tot : number = 0;
add(1,2,4,6,9,6,7);
function add(...ar : number[]){
    ar.forEach(e => {
        tot +=e;
    });
}
console.log(tot);