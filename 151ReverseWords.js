// // using the stack 
// var reverseWords = function(s) {
//     let stack = []; // Stack to store words
//     let word = '';  // Temporary string to hold current word

//     // Iterate through the string and split words
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] !== ' ') { // If the current character is not a space
//             word += s[i]; // Add the character to the current word
//         } else if (word.length > 0) { // If the current character is a space and word is not empty
//             stack.push(word); // Push the current word onto the stack
//             word = ''; // Reset the current word
//         }
//     }
      
//     // Push the last word if it exists
// if(word.length> 0 ){
//     stack.push(word)
// }

//     let result = ''; // String to store the final result
//     while (stack.length > 0) { // Pop words from the stack
//         result += stack.pop(); // Add the popped word to the result
//          if (stack.length > 0) {
//            result += ' '; // Add a space between words
//         }
//     }

//     return result; // Return the final result
// };

// // Test examples
// console.log(reverseWords("the sky is blue")); // Output: "blue is sky the"
   //console.log(reverseWords("  hello world  ")); // Output: "world hello"

// using the loops 
var reverseWords = function(s) {
    // Trim the input string to remove leading and trailing spaces
    let i = 0, j = s.length - 1;
    while (i <= j && s[i] === ' ') i++;   // Find the first non-space character
    while (j >= i && s[j] === ' ') j--;   // Find the last non-space character
    s = s.substring(i, j + 1);            // Extract the trimmed substring

    // Split the trimmed string into words based on spaces
    let words = s.split()    // Tokenize the string into words
     console.log(words)// split function returns the array 
    // Initialize the output string
    let out = '';
    // Iterate through the words in reverse order
    for (let k = words.length - 1; k > 0; k--) {
 
        // Append the current word and a space to the output
        out += words[k] + ' ';
    }
    // Append the first word to the output (without trailing space)
    out += words[0];
    return out;                            // Concatenate the reversed words
};

let s = "the sky is blue"
let result = reverseWords(s)
console.log(result)

/*
Step 1: Trimming the Input String
Initialize Pointers:

i = 0
j = 16 (length of the string minus 1)
Trim Leading Spaces:

The while loop while (i <= j && s[i] === ' ') i++; checks if there are leading spaces. In this case, there are none, so i remains 0.
Trim Trailing Spaces:

The while loop while (j >= i && s[j] === ' ') j--; checks if there are trailing spaces. In this case, there are none, so j remains 16.
Extract Trimmed Substring:

s = s.substring(i, j + 1);
Since i is 0 and j is 16, s remains "the sky is blue".
Step 2: Splitting the String into Words
Split the String:
let words = s.split(/\s+/);
This splits the string based on one or more spaces.
words becomes ["the", "sky", "is", "blue"].
Step 3: Reversing the Words
Initialize Output String:

let out = '';
Iterate through Words in Reverse Order:

The for loop for (let k = words.length - 1; k > 0; k--) iterates from the last word to the second word.
For k = 3: out += words[k] + ' '; → out becomes "blue ".
For k = 2: out += words[k] + ' '; → out becomes "blue is ".
For k = 1: out += words[k] + ' '; → out becomes "blue is sky ".
Append the First Word:

After the loop, out += words[0]; → out becomes "blue is sky the".
Step 4: Return the Result
Return Output:
The final output string out is "blue is sky the".
return out; returns "blue is sky the".
Final Result
The final output when calling reverseWords(s) with s = "the sky is blue" is "blue is
*/

