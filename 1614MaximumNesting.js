//------------Leetcode Apparoches -1 ------------------//
// function maxDepth(s) {
//     let count = 0;
//     let max = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === '(') {
//             count++;
//         }
//         // max holds the value which is greater count , max
//         // at the end count will become 1 and max holds the maximum number that is 3
//         max = Math.max(count, max);
//         if (s[i] === ')') {
//             count--;
//         }
//     }
//     return max;
// }

// let   s = "(1+(2*3)+((8)/4))+1"
// console.log(maxDepth(s))
//------------Leetcode Apparoches -2 ------------------//

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var maxDepth = function(s) {
//     let depth = 0;
//     let open = 0;

//     for (let i = 0; i < s.length; i++) {
//         const ch = s[i];
//         if (ch === '(') {
//             open++;
//         } else if (ch === ')') {
//             open--;
//         }
//         depth = Math.max(open, depth);
//     }

//     return depth;
// };
// let   s = "(1+(2*3)+((8)/4))+1"
// console.log(maxDepth(s))

//----------------ChatGpt solution-1 ----------------------//
// function maxDepth(s) {
//     let currentDepth = 0;
//     let maxDepth = 0;

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === '(') {
//             currentDepth++;
//             if (currentDepth > maxDepth) {
//                 maxDepth = currentDepth;
//             }
//         } else if (s[i] === ')') {
//             currentDepth--;
//         }
//     }

//     return maxDepth;
// }

// // Examples
// let s1 = "(1+(2*3)+((8)/4))+1";
// console.log(maxDepth(s1)); // Output: 3

// ---------------------Using Stack -------------------------//

function maxDepth(s) {
    let stack = [];
    let maxDepth = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i]);
            if (stack.length > maxDepth) {
                maxDepth = stack.length;
            }
        } else if (s[i] === ')') {
            stack.pop();
        }
    }

    return maxDepth;
}

// Examples
let s1 = "(1+(2*3)+((8)/4))+1";
console.log(maxDepth(s1)); // Output: 3

let s2 = "(1)+((2))+(((3)))";
console.log(maxDepth(s2)); // Output: 3

let s3 = "()(())((()()))";
console.log(maxDepth(s3)); // Output: 3
