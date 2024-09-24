/*Input a string of alphabets. Find out the number of occurrence of all alphabets in that string. 
Find out the alphabet with maximum occurrence.
*/

import { read } from 'fs';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

rl.question('Enter a String : ', (s: string): void => {
    alphabetCount(s);
    rl.close();
});

function alphabetCount(s : string) {
    var found = 0;
    var ar: number[] = []
    enum count {
        a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z
    }
    var l = s.length;

    for (let i = 0; i < l; i++) {
        if (ar[count[s[i]]] == undefined) {
            ar[count[s[i]]] = 1;
        }
        else
            ar[count[s[i]]] += 1;
    }
    var ch: string = " ";
    var filtered_ar: number[] = ar.filter(e => !isNaN(e));
    var max: number = Math.max(...filtered_ar);

    for (let i = 0; i < 26; i++) {
        if (ar[i] == max) {
            console.log("Maximun occured character : ", count[i], "and its count is", max);
        }
    }
}

/*
Test Case 1: 

Input:
Enter a String : raja aswin

Output:
Maximun occured character :  a and its count is 3

Test Case 2:

Input:
Enter a String : defined

Output:
Maximun occured character :  d and its count is 2
Maximun occured character :  e and its count is 2
*/