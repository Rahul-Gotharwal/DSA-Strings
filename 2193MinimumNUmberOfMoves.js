// //Using the dynamic programming or tabulation approach 
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

//     // Return the length of the LCS
//     return dp[n][m];
// }
// function longestPalindromeSubsequence(s) {
//     // Create a copy of the input string and reverse it
//     const t = s.split('').reverse().join('');

//     // Find the LCS between the original and reversed strings
//     return lcs(s, t);
// }

// function minInsertion(s){
//     const n = s.length;
//     const k = longestPalindromeSubsequence(s)
//     return n-k ; 
// }
// function main() {
//     const s = "abcaa";

//     // Call the minInsertion function and print the result
//     console.log("The Minimum insertions required to make the string palindrome: " + minInsertion(s));
// }

// // Call the main function to start the program
// main();

// Space Optimization Approach => 1143's 2nd code 

// function lcs(text1, text2) {
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

//     return dp[m][n];
// }

// // Function to find the length of the Longest Palindromic Subsequence of a string
// function longestPalindromeSubsequence(s) {
//     // Create a copy of the input string and reverse it
//     const t = s.split('').reverse().join('');

//     // Find the LCS between the original and reversed strings
//     return lcs(s, t);
// }

// // Function to find the minimum insertions required to make a string palindrome
// function minInsertion(s) {
//     const n = s.length;
//     const k = longestPalindromeSubsequence(s);

//     // The minimum insertions required is equal to the length of the string minus the length of its Longest Palindromic Subsequence
//     return n - k;
// }

// // Main function
// function main() {
//     const s = "abcaa";

//     // Call the minInsertion function and print the result
//     console.log("The Minimum insertions required to make the string palindrome: " + minInsertion(s));
// }

// // Call the main function to start the program
// main();

//-------------------------Above Code  are not the solution of the problem bcz it not pass the 2nd text case 
function minSwapsToMakePalindrome(s) {
    const n = s.length;
    let charArray = s.split('');
    let totalSwaps = 0;

    // Two pointers approach
    for (let left = 0, right = n - 1; left < right; ) {
        if (charArray[left] === charArray[right]) {
            left++;
            right--;
            //NOTE - dry run is in the copy
        } // NOTE - Else is till the end , it is not end at the whilr loop 
        else {
            // Look for a match for charArray[left] from the right side
            let k = right;
            while (k > left && charArray[k] !== charArray[left]) {
                k--;
            }
            if (k === left) {
                // No matching character found, it means it's a unique middle character in odd-length palindrome
                [charArray[left], charArray[left + 1]] = [charArray[left + 1], charArray[left]];
                totalSwaps++;
            } else {
                // Swap to bring the matching character to the correct position
                for (let i = k; i < right; i++) {
                    [charArray[i], charArray[i + 1]] = [charArray[i + 1], charArray[i]];
                    totalSwaps++;
                }
                left++;
                right--;
            }
        }
    }
    return totalSwaps;
}

// Main function to test the code
function main() {
    const s1 = "aabb";
    const s2 = "letelt";

    console.log("Minimum moves to make 'aabb' a palindrome: " + minSwapsToMakePalindrome(s1));
    console.log("Minimum moves to make 'letelt' a palindrome: " + minSwapsToMakePalindrome(s2));
}

// Call the main function to start the program
main();
/**
 * Initialization
Input: s = "letelt"
n = s.length = 6
charArray = ['l', 'e', 't', 'e', 'l', 't']
totalSwaps = 0
left = 0, right = 5
Dry Run
First Iteration:

left = 0, right = 5
charArray[left] = 'l', charArray[right] = 't'
Characters do not match.
Find the matching character for charArray[left] ('l') from the right side.
k = 5, charArray[k] = 't' (no match)
k = 4, charArray[k] = 'l' (match found)
Swap characters to bring 'l' to the correct position:
Swap charArray[4] and charArray[5]: ['l', 'e', 't', 'e', 't', 'l']
totalSwaps = 1
Increment left and decrement right: left = 1, right = 4
Second Iteration:

left = 1, right = 4
charArray[left] = 'e', charArray[right] = 't'
Characters do not match.
Find the matching character for charArray[left] ('e') from the right side.
k = 4, charArray[k] = 't' (no match)
k = 3, charArray[k] = 'e' (match found)
Swap characters to bring 'e' to the correct position:
Swap charArray[3] and charArray[4]: ['l', 'e', 't', 't', 'e', 'l']
totalSwaps = 2
Increment left and decrement right: left = 2, right = 3
Third Iteration:

left = 2, right = 3
charArray[left] = 't', charArray[right] = 't'
Characters match.
Increment left and decrement right: left = 3, right = 2
Conclusion
The loop ends since left is not less than right.
The string charArray is now ['l', 'e', 't', 't', 'e', 'l'], which is a palindrome.
totalSwaps = 2
 */