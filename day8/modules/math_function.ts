interface math {
    add:(a : number, b : number)=> number;  
    sub:(a : number, b : number)=> number;  
}

export var maths : math = {
    add : (a,b) => a+b,
    sub : (a,b) => a-b
}