// //Brute Force: Checks all substrings and verifies if they are palindromes.
// function longestPalindromicSubstringBruteForce(s) {
//     function isPalindrome(sub) {
//         // for string babad
//         //b is true 
//         // ba is false bcz ba === ab , means it is not equal to the reverse of the string
//         return sub === sub.split('').reverse().join('');
//     }

//     let n = s.length;
//     if (n === 0) return "";

//     let longest = "";
//     // it will generate all the substrings
//     for (let i = 0; i < n; i++) {
//         for (let j = i; j < n; j++) {
//             let substring = s.substring(i, j + 1);
//             if (isPalindrome(substring) && substring.length > longest.length) {
//                 longest = substring;
//             }
//         }
//     }
//     return longest;
// }
// console.log(longestPalindromicSubstringBruteForce("babad")); // Output: "bab" or "aba"
// console.log(longestPalindromicSubstringBruteForce("cbbd"));  // Output: "bb"

/**
 * Dry Run for Input "babad"
Initialization
n = 5
longest = ""
Iterations
Outer Loop (i = 0):

Inner Loop (j = 0):
Substring = "b"
Check if palindrome: true
Update longest to "b"
Inner Loop (j = 1):
Substring = "ba"
Check if palindrome: false
Inner Loop (j = 2):
Substring = "bab"
Check if palindrome: true
Update longest to "bab"
Inner Loop (j = 3):
Substring = "baba"
Check if palindrome: false
Inner Loop (j = 4):
Substring = "babad"
Check if palindrome: false
Outer Loop (i = 1):

Inner Loop (j = 1):
Substring = "a"
Check if palindrome: true
Inner Loop (j = 2):
Substring = "ab"
Check if palindrome: false
Inner Loop (j = 3):
Substring = "aba"
Check if palindrome: true
longest remains "bab" as it's already the same length
Inner Loop (j = 4):
Substring = "abad"
Check if palindrome: false
Outer Loop (i = 2):

Inner Loop (j = 2):
Substring = "b"
Check if palindrome: true
Inner Loop (j = 3):
Substring = "ba"
Check if palindrome: false
Inner Loop (j = 4):
Substring = "bad"
Check if palindrome: false
Outer Loop (i = 3):

Inner Loop (j = 3):
Substring = "a"
Check if palindrome: true
Inner Loop (j = 4):
Substring = "ad"
Check if palindrome: false
Outer Loop (i = 4):

Inner Loop (j = 4):
Substring = "d"
Check if palindrome: true
Result
The longest palindromic substring found is "bab".
 */

//Dynamic Programming Approach (O(n²) Time Complexity)

// function longestPalindromicSubstringDP(s) {
//     let n = s.length;
//     if (n === 0) return "";

//     let dp = Array.from({ length: n }, () => Array(n).fill(0));
//     let longest = "";

//     for (let len = 1; len <= n; len++) {
//         for (let i = 0; i <= n - len; i++) {
//             let j = i + len - 1;
//             if (s[i] === s[j] && (len <= 2 || dp[i + 1][j - 1])) {
//                 dp[i][j] = 1;
//                 // if (len > longest.length) {
//                 //     longest = s.substring(i, j + 1);
//                 // }

//                 //NO need to check the if , put direct values
//                 longest = s.substring(i,j+1)

//             }
//         }
//     }
//     return longest;
// }

// console.log(longestPalindromicSubstringDP("babad")); // Output: "bab" or "aba"
// console.log(longestPalindromicSubstringDP("cbbd"));  // Output: "bb"

/**
 * Sure, let's dry run the `longestPalindromicSubstringDP` function with the input `"babad"`.

### Function Initialization
1. **Input:** `s = "babad"`
2. **Length of the string:** `n = 5`
3. **Dynamic programming table `dp`:** A 5x5 matrix initialized to `0`.
4. **Longest palindromic substring `longest`:** `""`

### Step-by-Step Execution

#### Outer Loop for Length (len)
The outer loop iterates over possible lengths of substrings, from `1` to `n`.

**Iteration for `len = 1`:**
- Every single character is a palindrome.

**Inner Loop for Starting Index (i)**
The inner loop iterates over possible starting indices of substrings.

- For `i = 0`, `j = 0`: `s[0] = "b"`
  - `s[0] === s[0]` is `true`.
  - `dp[0][0] = 1`.
  - Update `longest = "b"` (substring `"b"`).

- For `i = 1`, `j = 1`: `s[1] = "a"`
  - `s[1] === s[1]` is `true`.
  - `dp[1][1] = 1`.
  - `longest` remains `"b"` (no need to update).

- For `i = 2`, `j = 2`: `s[2] = "b"`
  - `s[2] === s[2]` is `true`.
  - `dp[2][2] = 1`.
  - `longest` remains `"b"` (no need to update).

- For `i = 3`, `j = 3`: `s[3] = "a"`
  - `s[3] === s[3]` is `true`.
  - `dp[3][3] = 1`.
  - `longest` remains `"b"` (no need to update).

- For `i = 4`, `j = 4`: `s[4] = "d"`
  - `s[4] === s[4]` is `true`.
  - `dp[4][4] = 1`.
  - `longest` remains `"b"` (no need to update).

**Iteration for `len = 2`:**
- Check for two-character palindromes.

- For `i = 0`, `j = 1`: `s[0] = "b"`, `s[1] = "a"`
  - `s[0] === s[1]` is `false`.
  - `dp[0][1] = 0`.

- For `i = 1`, `j = 2`: `s[1] = "a"`, `s[2] = "b"`
  - `s[1] === s[2]` is `false`.
  - `dp[1][2] = 0`.

- For `i = 2`, `j = 3`: `s[2] = "b"`, `s[3] = "a"`
  - `s[2] === s[3]` is `false`.
  - `dp[2][3] = 0`.

- For `i = 3`, `j = 4`: `s[3] = "a"`, `s[4] = "d"`
  - `s[3] === s[4]` is `false`.
  - `dp[3][4] = 0`.

**Iteration for `len = 3`:**
- Check for three-character palindromes.

- For `i = 0`, `j = 2`: `s[0] = "b"`, `s[2] = "b"`
  - `s[0] === s[2]` is `true`.
  - `dp[1][1] = 1` (substring `"a"` is a palindrome).
  - `dp[0][2] = 1`.
  - Update `longest = "bab"` (substring `"bab"`).

- For `i = 1`, `j = 3`: `s[1] = "a"`, `s[3] = "a"`
  - `s[1] === s[3]` is `true`.
  - `dp[2][2] = 1` (substring `"b"` is a palindrome).
  - `dp[1][3] = 1`.
  - `longest` remains `"bab"` (substring `"aba"` is same length as `"bab"`).

- For `i = 2`, `j = 4`: `s[2] = "b"`, `s[4] = "d"`
  - `s[2] === s[4]` is `false`.
  - `dp[2][4] = 0`.

**Iteration for `len = 4`:**
- Check for four-character palindromes.

- For `i = 0`, `j = 3`: `s[0] = "b"`, `s[3] = "a"`
  - `s[0] === s[3]` is `false`.
  - `dp[0][3] = 0`.

- For `i = 1`, `j = 4`: `s[1] = "a"`, `s[4] = "d"`
  - `s[1] === s[4]` is `false`.
  - `dp[1][4] = 0`.

**Iteration for `len = 5`:**
- Check for five-character palindromes.

- For `i = 0`, `j = 4`: `s[0] = "b"`, `s[4] = "d"`
  - `s[0] === s[4]` is `false`.
  - `dp[0][4] = 0`.

### Final Values
- `dp` table:

```
[
 [1, 0, 1, 0, 0],
 [0, 1, 0, 1, 0],
 [0, 0, 1, 0, 0],
 [0, 0, 0, 1, 0],
 [0, 0, 0, 0, 1]
]
```

- `longest = "bab"`

### Return Value
- The function returns `"bab"`.

### Summary

The dynamic programming table `dp` is used to store whether substrings `s[i...j]` are palindromic. The longest palindromic substring found for the input `"babad"` is `"bab"` (though `"aba"` is also a correct answer due to the same length).
 */
//------------Two-Pointer Technique (O(n²) Time Complexity)---------------//

function longestPalindromicSubstringTwoPointers(s) {
    let n = s.length;
    if (n === 0) return "";

    let longest = "";

    function expandAroundCenter(left, right) {
        // while loop run again and again till the condtion not false
        while (left >= 0 && right < n && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.substring(left + 1, right);
    }

    for (let i = 0; i < n; i++) {
        let oddPalindrome = expandAroundCenter(i, i);
        let evenPalindrome = expandAroundCenter(i, i + 1);

        if (oddPalindrome.length > longest.length) {
            longest = oddPalindrome;
        }
        if (evenPalindrome.length > longest.length) {
            longest = evenPalindrome;
        }
    }
    return longest;
}
let s = 'babad'
// let j = s.substring(0,2)
// console.log(j)
let result = longestPalindromicSubstringTwoPointers(s)
console.log(result)


//while loop understanding how it is track the values like 'aba'
/**
 * Continuing from the While Loop Expansion
Initial Setup
Input: left = 1, right = 1
String: "babad"
While Loop Execution
Initial State:

left = 1, right = 1
Characters: s[left] = 'a', s[right] = 'a'
Condition: left >= 0 && right < n && s[left] === s[right]
True, because 1 >= 0, 1 < 5, and 'a' === 'a'.
First Iteration:

Expand:
left--: Decrement left from 1 to 0.
right++: Increment right from 1 to 2.
New State:
left = 0, right = 2
Characters: s[left] = 'b', s[right] = 'b'
Condition: left >= 0 && right < n && s[left] === s[right]
True, because 0 >= 0, 2 < 5, and 'b' === 'b'.
Second Iteration:

Expand:
left--: Decrement left from 0 to -1.
right++: Increment right from 2 to 3.
New State:
left = -1, right = 3
Out of bounds (left is less than 0), so the loop exits.
Substring Extraction
After exiting the loop:
left + 1 = 0 + 1 = 1
right = 3
s.substring(1, 3) yields "aba"
 */
/**
 * Helper Function expandAroundCenter
The expandAroundCenter function expands outwards from given indices left and right as long as the characters at those indices are the same and within bounds.

Main Loop
Outer Loop (i = 0):
Odd Length Palindrome: expandAroundCenter(0, 0)
left = 0, right = 0
Expand: s[0] === s[0] ("b" === "b"), left = -1, right = 1
Substring: "b"
Update longest = "b"
Even Length Palindrome: expandAroundCenter(0, 1)
left = 0, right = 1
Expand: s[0] === s[1] ("b" === "a")
Since they are not the same, exit loop.
Outer Loop (i = 1):
Odd Length Palindrome: expandAroundCenter(1, 1)
left = 1, right = 1
Expand: s[1] === s[1] ("a" === "a"), left = 0, right = 2
Substring: "aba"
Update longest = "aba"
Even Length Palindrome: expandAroundCenter(1, 2)
left = 1, right = 2
Expand: s[1] === s[2] ("a" === "b")
Since they are not the same, exit loop.
Outer Loop (i = 2):
Odd Length Palindrome: expandAroundCenter(2, 2)
left = 2, right = 2
Expand: s[2] === s[2] ("b" === "b"), left = 1, right = 3
Substring: "b"
Even Length Palindrome: expandAroundCenter(2, 3)
left = 2, right = 3
Expand: s[2] === s[3] ("b" === "a")
Since they are not the same, exit loop.
Outer Loop (i = 3):
Odd Length Palindrome: expandAroundCenter(3, 3)
left = 3, right = 3
Expand: s[3] === s[3] ("a" === "a"), left = 2, right = 4
Substring: "aba"
Update longest = "aba"
Even Length Palindrome: expandAroundCenter(3, 4)
left = 3, right = 4
Expand: s[3] === s[4] ("a" === "d")
Since they are not the same, exit loop.
Outer Loop (i = 4):
Odd Length Palindrome: expandAroundCenter(4, 4)
left = 4, right = 4
Expand: s[4] === s[4] ("d" === "d"), left = 3, right = 5
Substring: "d"
Even Length Palindrome: expandAroundCenter(4, 5)
left = 4, right = 5
Expand: s[4] === s[5] (Out of bounds, since right = 5 exceeds n - 1)
Final Result
The longest palindromic substring found is "aba".
 */

// leetcode solution 
/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function(s) {
//     if (!s) {
//         return "";
//     }

//     function expandAroundCenter(s, left, right) {
//         while (left >= 0 && right < s.length && s[left] === s[right]) {
//             left--;
//             right++;
//         }
//         return right - left - 1;
//     }

//     let start = 0;
//     let end = 0;

//     for (let i = 0; i < s.length; i++) {
//         const odd = expandAroundCenter(s, i, i);
//         const even = expandAroundCenter(s, i, i + 1);
//         const max_len = Math.max(odd, even);

//         if (max_len > end - start) {
//             start = i - Math.floor((max_len - 1) / 2);
//             end = i + Math.floor(max_len / 2);
//         }
//     }

//     return s.substring(start, end + 1);    
// };

// let s = 'bbabcbcab';
// let result = console.log(longestPalindrome(s))