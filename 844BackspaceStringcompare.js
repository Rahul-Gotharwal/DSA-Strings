//-----------------Chatgpt Solution ----------------//
// function backspaceCompare(S, T) {
//     // Helper function to get actual string after processing backspaces
//     function getActualString(str) {
//         let stack = [];
//         for (let char of str) {
//             if (char === '#') {
//                 stack.pop(); // Backspace: remove last character from stack
//             } else {
//                 stack.push(char); // Regular character: push onto stack
//             }
//         }
//         return stack.join(''); // Convert stack to string
//     }
    
//     // Get actual strings for S and T
//     let actualS = getActualString(S);
//     let actualT = getActualString(T);
    
//     // Compare the actual strings
//     return actualS === actualT;
// }

// // Example usage:
// let S = "ab#c";
// let T = "ad#c";
// console.log(backspaceCompare(S, T)); // Output: true

// S = "ab##";
// T = "c#d#";
// console.log(backspaceCompare(S, T)); // Output: true

// S = "a##c";
// T = "#a#c";
// console.log(backspaceCompare(S, T)); // Output: true

// S = "a#c";
// T = "b";
// console.log(backspaceCompare(S, T)); // Output: false


//------------------using hashcount----------------//
function backspaceCompare(S, T) {
    // Helper function to get actual string after processing backspaces
    function getActualString(str) {
        let actualStr = '';
        let hashCount = 0;
        
        for (let i = str.length - 1; i >= 0; i--) {
            if (str[i] === '#') {
                hashCount++;
            } else {
                if (hashCount > 0) {
                    hashCount--;
                } else {
                    actualStr = str[i] + actualStr;
                }
            }
        }
        
        return actualStr;
    }
    
    // Get actual strings for S and T
    let actualS = getActualString(S);
    let actualT = getActualString(T);
    
    // Compare the actual strings
    return actualS === actualT;
}
let S = "ab#c";
let T = "ad#c";
console.log(backspaceCompare(S, T)); // Output: true