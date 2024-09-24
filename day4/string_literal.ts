// To define a type that accepts only one specified string literal

import * as readline from 'readline';
let s : 'submit' | 'turn in' | 'sent';
const r = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

r.question('Enter string', (input : string) => {
    s = 'submit';
    r.close();
});
function validateInput(input : s) : string {
    return "valid Input";
}
