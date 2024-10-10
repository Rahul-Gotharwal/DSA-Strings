//----------------------Copy's solution------------------//
// function restoreIpAddresses(s) {
//     const result = [];
//     backtrack(s, 0, [], result);
//     return result;
// }

// function backtrack(s, start, parts, result) {
//     if (parts.length === 4 && start === s.length) {
//         result.push(parts.join('.'));
//         return;
//     }

//     if (parts.length === 4 || start === s.length) {
//         return;
//     }

//     for (let len = 1; len <= 3; len++) {
//         if (start + len > s.length) {
//             break;
//         }

//         const part = s.substring(start, start + len);
//         if (isValid(part)) {
//             parts.push(part);
//             backtrack(s, start + len, parts, result);
//             parts.pop();
//         }
//     }
// }

// function isValid(s) {
//     if (s.length > 1 && s[0] === '0') {
//         return false;
//     }
//     const num = parseInt(s);
//     return num >= 0 && num <= 255;
// }

// // Example usage:
// const input = "25525511135";
// const validIpAddresses = restoreIpAddresses(input);
// console.log(validIpAddresses); // Output: [ '255.255.11.135', '255.255.111.35' ]


//------------------Leetcode Solution-------------------//
