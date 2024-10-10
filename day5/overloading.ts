function add ( a : number, b : number) : number;
function add ( a : number, b : number, c: number) : number;
function add ( a : string, b : string) : string;



function add( a: any, b : any, c? : number){
    if( typeof a === 'number' && typeof b === 'number')
        return a+b;
    else if(typeof a == "string" && typeof b === "string")
        return a+b;
}

console.log(add(6,2));
console.log(add("Raja ","Aswin"));