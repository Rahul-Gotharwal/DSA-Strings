// var titleToNumber = function(columnTitle) {
//     let result = 0;
//     for(let i = 0; i < columnTitle.length; i++) {
//         result *= 26; // added 1 in the beloow line not here 
//         result += (columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1);
//         // columnTitle.charCodeAt(i) return the ascii of A that is 65
//         //'A'.charCodeAt(0) return the ascii of 'A' that is also 65
//     }
//     return result;
// };

// let columnTitle = 'AA';
// let result = titleToNumber(columnTitle);
// console.log(result);  // Should output 28
/**
 * For columnTitle = 'AB':

Initial State:

result = 0
columnTitle = 'AB'
First Iteration (i = 0):

columnTitle[0] = 'A'
result *= 26 ⟶ result = 0 * 26 = 0
result += ('A'.charCodeAt(0) - 'A'.charCodeAt(0) + 1) ⟶ result += (65 - 65 + 1) = 1
result = 1
Second Iteration (i = 1):

columnTitle[1] = 'B'
result *= 26 ⟶ result = 1 * 26 = 26
result += ('B'.charCodeAt(0) - 'A'.charCodeAt(0) + 1) ⟶ result += (66 - 65 + 1) = 2
result = 26 + 2 = 28
End of Loop:

The loop ends as all characters in columnTitle have been processed.
Return Result:

The final value of result is 28.
 */

//-------------copy's soluton--------------------//
// var titleToNumber = function(columnTitle) {
//     let result = 0;
//     for (let i = 0; i < columnTitle.length; i++) {
//         result =result * 26 + (columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1);
//         // 1st iteration => result*26+(1)+1 => 2 => 2 stores in result 
//         // 2nd iteration => result*26+(1)+1 => 2*26+2 => 54
//     }
//     return result;
// };

// let columnTitle = 'BB';
// let result = titleToNumber(columnTitle);
// console.log(result);  // Should output 28

//---------------------Recursive Apparoch (Try To Make it Simple BY Gpt)------------------//

// var titleToNumber = function(columnTitle) {
//     if (columnTitle.length === 0) return 0;
//     return titleToNumber(columnTitle.slice(0, -1)) * 26 + (columnTitle.charCodeAt(columnTitle.length - 1) - 'A'.charCodeAt(0) + 1);
//     // by the help of .slice(0, -1 ) we call the function recursively
// };

// let columnTitle = 'AB';
// let result = titleToNumber(columnTitle);
// console.log(result);  // Should output 28
/**
 * Dry Run for 'AB'
Initial Call:

columnTitle = 'AB'
titleToNumber('A') * 26 + (66 - 65 + 1)
Recursive Call 1:

columnTitle = 'A'
titleToNumber('') * 26 + (65 - 65 + 1)
Base Case:

columnTitle = ''
Return 0
Backtrack:

titleToNumber('') * 26 + 1 = 0 * 26 + 1 = 1
titleToNumber('A') * 26 + 2 = 1 * 26 + 2 = 28
 */
//---------------Using Index Array-----------------------//
var titleToNumber = function(columnTitle) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = 0;

    for (let i = 0; i < columnTitle.length; i++) {
        result = result * 26 + (alphabet.indexOf(columnTitle[i]) + 1);
       // console.log(alphabet.indexOf('G'))
    }
    return result;
};

let columnTitle = 'AB';
let result = titleToNumber(columnTitle);
console.log(result);  // Should output 28

