import { log } from 'console';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter something: ', (input: string) => {
    console.log(`You entered: ${input}`);
    console.log("Hello");
    
    rl.close();
});