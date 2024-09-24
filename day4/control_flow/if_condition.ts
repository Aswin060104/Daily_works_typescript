import * as readline from 'readline';
var r = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

r.question('Enter Number: ', (input : string)=>{
    var n : number = Number(input);
    validateAge(n);
    r.close();
});

function validateAge(n : number) : void{
    if(n > 18)
        console.log("Can Vote");
    else
        console.log("Can't Vote");
        
        
}