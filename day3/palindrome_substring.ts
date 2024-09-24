/*  
2. Input a string which contains some palindrome substrings.
Find out the position of palindrome substrings if exist and replace it by *.
(For example if input string is “bob has a radar plane” then it should convert in “*** has a ***** plane”. 
*/

import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter String : ', (s: string) => {

    var ar: string[] = s.split(" ");
    var len: number = ar.length;
    var i: number = 0;
    while (i < len) {
        var tem: string = ar[i];
        var start: number = 0;
        var end: number = tem.length - 1;
        var found: number = 0;
        while (start <= end) {
            if (tem[start] != tem[end]) {
                found = 1;
                break;
            }
            found = 0;
            start++;
            end--;
        }
        if (found == 0 && tem.length != 1) {
            var changed: string[] = [];
            for (let x: number = 0; x < tem.length; x++)
                changed.push("*");
            ar[i] = changed.join("");
        }
        i++;
    }
    console.log(ar.join(" "));
    rl.close();
});

/*

Test Case 1:

Input: 
Enter String : bob has a radar plane

Output:
*** has a ***** plane

Test case 2:
Input:
Enter String : malayalam is a language

Output:
********* is a language            

*/
