var ar : number[] = [1,2,3,4,2,3,1];
var c = ar.reduce((acc : Map<number, number>, v : number) => {
    var tem : number = (acc.get(v) || 0)+1;
    acc.set(v,tem);
    return acc;
}, new Map<number, number>());
console.log(c);