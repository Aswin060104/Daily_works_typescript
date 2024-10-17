interface person {
    _name: String;
    getName(salary: number): number;
}
const n: person = {
    _name: "Aswin",
    getName(salary: number) {
        return 5;
    },
}
var ar: number[] = [7, 2, 3, 4, 5, 6, 7, 1, 1];
var stack: number[] = [];
for (let i: number = 0; i < ar.length; i++) {
    if (stack.length == 0 || ar[stack[stack.length - 1]] > ar[i])
        stack.push(i);
}
console.log(stack);

var maxWidth: number = 0;

for (var j = ar.length - 1; j > -1; j--) {
    if (ar[j] >= ar[stack[stack.length - 1]]) {
        console.log(ar[j], j, ar[stack[stack.length - 1]], stack[stack.length - 1]);

        if (maxWidth < j - stack[stack.length - 1]) {
            maxWidth = j - stack[stack.length - 1];
        }
        stack.pop();
    }
}
console.log(maxWidth);

function add( a : number ){
    return a;
}