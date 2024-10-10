// //----------------Brute Force Approach---------------------//
// /**
//  * Generate all possible subsequences for both strings.
// Compare all pairs of subsequences to find the common subsequences.
// Determine the longest common subsequence among them.
//  it can be quite inefficient for longer strings due to the exponential number of subsequences generated
//  */

// const generateSubsecquence = (s) => {
//   const subsequences = [];
//   const n = s.length;
//   const generate = (current, index) => {
//     // this is called at the last when we reach till the end of the string , and answer is push to the subsecquences array
//     if (index === n) {
//       if (current.length > 0) {
//         subsequences.push(current);
//       }
//       return subsequences.push(current)
//     }
//     // at first iteration the ("a" and 0 comes) and added  then index becomes 1 by index+1
//     generate(current + s[index], index + 1); // recusrive call to generate the substrings //// Include current character
//     generate(current, index + 1); // exclude current character
//     //Note - in the both generate funntion when limit reach to the end of the string , we add the string to the array like "ab" ,"a"
//   };
//   //the "" string is current and 0 is index we added the current+s[index] like ""+a[0] means "a"
//   generate("", 0); // calling of functions start from here , start with empty string and with 0 ("", 0) ,
//   //Current subsequence: ""
//   //Characters left: "abc"

//   return subsequences;
// };
// // Function to find the longest common subsequence
// const longestCommonSubsecquence = (text1, text2) => {
//   const subsequences1 = generateSubsecquence(text1);
//   const subsequences2 = generateSubsecquence(text2);
//   let longestCommon = 0;
//   // Convert one array to a set for faster lookup

//   const set2 = new Set(subsequences2);
//   for (const subseq of subsequences1) {
//     if (set2.has(subseq) && subseq.length > longestCommon) {
//       longestCommon = subseq.length;
//     }
//   }
//   return longestCommon;
// };
// console.log(longestCommonSubsecquence("abcde", "ace")); // Output: 3
// console.log(longestCommonSubsecquence("abc", "abc")); // Output: 3
// console.log(longestCommonSubsecquence("abc", "def")); // Output: 0
// /**
//  * Note- Recursuin tree is the best => check the end of the copy's page
//  * // two condtins one is include and other  is exclude
//  * // note - this tree is only for exmaple 'ab' which is not present here , it  just the working with anoter example
//  *                               generate("", 0)
//                             /                 \
//                generate("a", 1)             generate("", 1)
//               /           \                  /           \
//      generate("ab", 2)  generate("a", 2)   generate("b", 2)  generate("", 2)
//          |                 |                  |                  |
//     Add "ab"             Add "a"             Add "b"             (do nothing)

//  */
// /**
//  * Step 1: Generate All Subsequences
// For text1 = "abcde":

// All subsequences generated:
// css
// Copy code
// ["a", "ab", "abc", "abcd", "abcde", "abce", "abd", "abde", "abe", "ac", "acd", "acde", "ace", "ad", "ade", "ae", "b", "bc", "bcd", "bcde", "bce", "bd", "bde", "be", "c", "cd", "cde", "ce", "d", "de", "e"]
// For text2 = "ace":

// All subsequences generated:
// css
// Copy code
// ["a", "ac", "ace", "ae", "c", "ce", "e"]
// Step 2: Find Common Subsequences and Longest Common Subsequence
// Convert text2 subsequences to a set for quick lookup:

// javascript
// Copy code
// Set: {"a", "ac", "ace", "ae", "c", "ce", "e"}
// Iterate through each subsequence of text1 and check if it is in the set of subsequences of text2. Update the longest common subsequence length accordingly.

// Dry Run with Detailed Explanation:
// Iteration 1:

// Subsequence of text1: "a"
// Present in the set? Yes
// Update longestCommon: 1
// Iteration 2:

// Subsequence of text1: "ab"
// Present in the set? No
// longestCommon: 1 (no change)
// Iteration 3:

// Subsequence of text1: "abc"
// Present in the set? No
// longestCommon: 1 (no change)
// Iteration 4:

// Subsequence of text1: "abcd"
// Present in the set? No
// longestCommon: 1 (no change)
// Iteration 5:

// Subsequence of text1: "abcde"
// Present in the set? No
// longestCommon: 1 (no change)
// Iteration 6:

// Subsequence of text1: "abce"
// Present in the set? No
// longestCommon: 1 (no change)
// Iteration 7:

// Subsequence of text1: "abd"
// Present in the set? No
// longestCommon: 1 (no change)
// Iteration 8:

// Subsequence of text1: "abde"
// Present in the set? No
// longestCommon: 1 (no change)
// Iteration 9:

// Subsequence of text1: "abe"
// Present in the set? No
// longestCommon: 1 (no change)
// Iteration 10:

// Subsequence of text1: "ac"
// Present in the set? Yes
// Update longestCommon: 2
// Iteration 11:

// Subsequence of text1: "acd"
// Present in the set? No
// longestCommon: 2 (no change)
// Iteration 12:

// Subsequence of text1: "acde"
// Present in the set? No
// longestCommon: 2 (no change)
// Iteration 13:

// Subsequence of text1: "ace"
// Present in the set? Yes
// Update longestCommon: 3
// Iteration 14:

// Subsequence of text1: "ad"
// Present in the set? No
// longestCommon: 3 (no change)
// Iteration 15:

// Subsequence of text1: "ade"
// Present in the set? No
// longestCommon: 3 (no change)
// Iteration 16:

// Subsequence of text1: "ae"
// Present in the set? Yes
// longestCommon: 3 (no change)
// ... (Continue checking all remaining subsequences of text1 similarly)
//  */

//-------------Dynamic programming Appracoach or Tabulation bottom up approach chatgpt code----------------------//

// function longestCommonSubsequence(text1, text2) {
//     const m = text1.length;
//     const n = text2.length;

//     // Initialize a 2D array with 0s
//     // this is how the 2d array is created
//     const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

//     // Fill the dp array
//     // According to the copy's solution the j for loop is start from the end
//     for (let i = 1; i <= m; i++) {
//         for (let j = 1; j <= n; j++) {
//             if (text1[i - 1] === text2[j - 1]) {
//                 dp[i][j] = 1 + dp[i - 1][j - 1];
//             } else {
//                 dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
//             }
//         }
//     }

//     // The value at dp[m][n] is the length of the LCS
//     // m's index is 5 and n's index is 3 the value at dp[m][n] is 5
//     return dp[m][n];
// }

// // Example usage
// const text1 = "abcde";
// const text2 = "ace";
// console.log(longestCommonSubsequence(text1, text2));  // Output: 3

// const text1_2 = "abc";
// const text2_2 = "abc";
// console.log(longestCommonSubsequence(text1_2, text2_2));  // Output: 3

// const text1_3 = "abc";
// const text2_3 = "def";
// console.log(longestCommonSubsequence(text1_3, text2_3));  // Output: 0

/**
 * Dry Run:
For text1 = "abcde" and text2 = "ace":

Initialize dp table:

css
Copy code
dp = [[0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]]
Fill the table:

i = 1, j = 1: match (a), dp[1][1] = 1 + dp[0][0] = 1
i = 1, j = 2: no match, dp[1][2] = max(dp[0][2], dp[1][1]) = 1
i = 1, j = 3: no match, dp[1][3] = max(dp[0][3], dp[1][2]) = 1
i = 2, j = 1: no match, dp[2][1] = max(dp[1][1], dp[2][0]) = 1
i = 2, j = 2: no match, dp[2][2] = max(dp[1][2], dp[2][1]) = 1
i = 2, j = 3: no match, dp[2][3] = max(dp[1][3], dp[2][2]) = 1
i = 3, j = 1: no match, dp[3][1] = max(dp[2][1], dp[3][0]) = 1
i = 3, j = 2: match (c), dp[3][2] = 1 + dp[2][1] = 2
i = 3, j = 3: no match, dp[3][3] = max(dp[2][3], dp[3][2]) = 2
i = 4, j = 1: no match, dp[4][1] = max(dp[3][1], dp[4][0]) = 1
i = 4, j = 2: no match, dp[4][2] = max(dp[3][2], dp[4][1]) = 2
i = 4, j = 3: no match, dp[4][3] = max(dp[3][3], dp[4][2]) = 2
i = 5, j = 1: no match, dp[5][1] = max(dp[4][1], dp[5][0]) = 1
i = 5, j = 2: no match, dp[5][2] = max(dp[4][2], dp[5][1]) = 2
i = 5, j = 3: match (e), dp[5][3] = 1 + dp[4][2] = 3
Final dp table:

css
Copy code
dp = [[0, 0, 0, 0],
      [0, 1, 1, 1],
      [0, 1, 1, 1],
      [0, 1, 2, 2],
      [0, 1, 2, 2],
      [0, 1, 2, 3]]
The length of the longest common subsequence is dp[5][3] = 3.
 */

// ---------------------Using thr memoization and also with recursion---------------------//

// function lcs(s1, s2) {
//     const n = s1.length;
//     const m = s2.length;

//     // Create a 2D array 'dp' to store dynamic programming results, initialized with -1
//     const dp = Array.from({ length: n }, () => Array(m).fill(-1));

//     // Define a recursive utility function to calculate the LCS length
//     function lcsUtil(ind1, ind2) {
//         // Base case: If either string has reached the end, the LCS length is 0
//         if (ind1 < 0 || ind2 < 0) {
//             return 0;
//         }

//         // If the result for this combination of indices has already been calculated, return it
//         // we filled the array by -1 initially , if after the result is store at the place of -1 the calculated result will return no need to calculate again and again for same values
//         if (dp[ind1][ind2] !== -1) {
//             return dp[ind1][ind2];
//         }

//         // If the characters match, increase the LCS length and move both indices
//         if (s1[ind1] === s2[ind2]) {
//             return (dp[ind1][ind2] = 1 + lcsUtil(ind1 - 1, ind2 - 1));
//         } else {
//             // If the characters don't match, consider two options: moving one index in either string
//             return (dp[ind1][ind2] = Math.max(
//                 lcsUtil(ind1, ind2 - 1),
//                 lcsUtil(ind1 - 1, ind2)
//             ));
//         }
//     }

//     // Call the recursive utility function to calculate the LCS length
//     // result is recursively store at this place of  lcsutil ,
//     // check the tree of recursion for this
//     return lcsUtil(n - 1, m - 1);
// }

// // Main function
// function main() {
//     const s1 = "acd";
//     const s2 = "ced";

//     // Call the lcs function and print the result
//     console.log("The Length of Longest Common Subsequence is " + lcs(s1, s2));
// }

// // Call the main function to start the program
// main();

/**
 * dp = [  [-1,  0, -1],
  [ 1,  1, -1],
  [-1, -1,  2]
]

 */

//-----------------------Bottom Up appraoch  -----------------------//
//Note- same as above chat gpt code that is dynamic programming code 
function lcs(s1, s2) {
    const n = s1.length;
    const m = s2.length;

    // Create a 2D array 'dp' to store dynamic programming results, initialized with -1
    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(-1));

    // Initialize the base conditions for empty substrings
    for (let i = 0; i <= n; i++) {
        dp[i][0] = 0;
    }
    for (let i = 0; i <= m; i++) {
        dp[0][i] = 0;
    }

    // Populating the 'dp' array using nested loops
    for (let ind1 = 1; ind1 <= n; ind1++) {
        for (let ind2 = 1; ind2 <= m; ind2++) {
            if (s1[ind1 - 1] === s2[ind2 - 1]) {
                dp[ind1][ind2] = 1 + dp[ind1 - 1][ind2 - 1];
            } else {
                dp[ind1][ind2] = Math.max(dp[ind1 - 1][ind2], dp[ind1][ind2 - 1]);
            }
        }
    }

    // The result is stored in the bottom-right cell of the 'dp' array
    return dp[n][m];
}

// Main function
function main() {
    const s1 = "acd";
    const s2 = "ced";

    // Call the lcs function and print the result
    console.log("The Length of Longest Common Subsequence is " + lcs(s1, s2));
}

// Call the main function to start the program
main();
