// using the dynamic programming LCS code , we can also do it by memoization
function lcs(s1, s2) {
    // Get the lengths of the input strings
    const n = s1.length;
    const m = s2.length;

    // Initialize a 2D array with 0s
    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
    // Fill the dp array using dynamic programming
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Return the length of the LCS
    return dp[n][m];
}

// Function to find the length of the Longest Palindromic Subsequence of a string
function longestPalindromeSubsequence(s) {
    // Create a copy of the input string and reverse it
    // sbse phle toda(split) , fir ghumaya(reversse) , fir joda(join)
    const t = s.split('').reverse().join('');
    // Find the LCS between the original and reversed strings
    return lcs(s, t);
}

// Main function
function main() {
    const s = "bbabcbcab";
    // Call the longestPalindromeSubsequence function and print the result
    console.log("The Length of Longest Palindromic Subsequence is " + longestPalindromeSubsequence(s));
}

// Call the main function to start the program
main();

//----------------If we want to print the string also which is the longest-------------//
// function lcs(s1, s2) {
//     const n = s1.length;
//     const m = s2.length;

//     // Initialize a 2D array with 0s
//     const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

//     // Fill the dp array using dynamic programming
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= m; j++) {
//             if (s1[i - 1] === s2[j - 1]) {
//                 dp[i][j] = 1 + dp[i - 1][j - 1];
//             } else {
//                 dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
//             }
//         }
//     }
//      // for printing the string
//     // To find the LCS sequence, we need to backtrack from dp[n][m]
//     let lcsStr = '';
//     let i = n, j = m;
//     while (i > 0 && j > 0) {
//         if (s1[i - 1] === s2[j - 1]) {
//             lcsStr = s1[i - 1] + lcsStr;  // If characters match, include this character in the result
//             i--;
//             j--;
//         } else if (dp[i - 1][j] > dp[i][j - 1]) {
//             i--;
//         } else {
//             j--;
//         }
//     }

//     return { length: dp[n][m], sequence: lcsStr };
// }

// // Function to find the length of the Longest Palindromic Subsequence of a string
// function longestPalindromeSubsequence(s) {
//     const t = s.split('').reverse().join('');
//     const result = lcs(s, t);
//     // function returns the length and substring to result and we print the by using dot
//     return result;
// }

// // Main function
// function main() {
//     const s = "bbabcbcab";

//     // Call the longestPalindromeSubsequence function and print the result
//     const result = longestPalindromeSubsequence(s);
//     console.log("The Length of Longest Palindromic Subsequence is " + result.length);
//     console.log("The Longest Palindromic Subsequence is " + result.sequence);
// }

// // Call the main function to start the program
// main();


//---------------------ChatGpt solution  Another approach where we dont need to reverse the sring //

var longestPalindromeSubseq = function(s) {
    const n = s.length;
    
    // Initialize a 2D array dp with dimensions (n x n) filled with zeros
    const dp = Array.from({ length: n }, () => Array(n).fill(0));
    
    // Base case: All substrings of length 1 are palindromes of length 1
    for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
    }
    
    // Build the dp table
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            let j = i + len - 1;
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }
    
    // The length of the longest palindromic subsequence in the whole string
    return dp[0][n - 1];
};

let s = 'bbbab';
let result = longestPalindromeSubseq(s)
console.log(result)
