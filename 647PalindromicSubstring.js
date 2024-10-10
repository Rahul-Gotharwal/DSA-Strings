// //-------------------Brute Force APproach-----------//
// // generate all psosible substring and match by helper function 
// const countSubstrings = (s) => {
//     const n = s.length;
//     let count = 0;

//     // Helper function to check if a substring is a palindrome for all the strings
//     const isPalindrome = (start, end) => {
//         // return true statement is outside the while loop if strings are palindrome it will return directly the true , bcz at (0,0) => a strings must be a palindrome
//         // in while loop we only check when strings are not palindrome
//         // we should only enter when start<end  bcz atthe same index it is compulsary that we have palindrome string (0,0) => a
//         // now at (0,1) first iteration of while loop start
//         while (start < end) {
//             if (s[start] !== s[end]) {
//                 return false;
//                 // value of start and end remain same when condtion false
//             }
//               // Move towards the center
//               start++;
//               end--;
//         }
//         return true; // It's a palindrome
//     };

//     // Loop through each possible substring and count palindromic substrings
//     for (let i = 0; i < n; i++) {
//         for (let j = i; j < n; j++) {
//             if (isPalindrome(i, j)) {
//                 count++;
//             }
//         }
//     }

//     return count;
// };

// // Example usage:
// const result = countSubstrings("abc");
// console.log(result); // Output should be 3, as there are 3 palindromic substrings: "a", "b", "c"
// // explanation of start and end 
// /**
//  * Sure, let's focus specifically on the values of `start` and `end` for the call `isPalindrome(0, 1)`:

// 1. **Initial call:** `isPalindrome(0, 1)`
//    - **Initial values:** `start = 0`, `end = 1`

// 2. **First iteration of the while loop:**
//    - Compare `s[start]` with `s[end]`:
//      - `s[0]` (`"a"`) and `s[1]` (`"b"`)
//    - They are not equal, so the function returns `false`.

// The value of `start` remains `0` and the value of `end` remains `1` throughout this single iteration because the function exits immediately after finding the mismatch.

// So, the values of `start` and `end` during this call are:
// - **Start:** `0`
// - **End:** `1`

// And after comparing `s[0]` with `s[1]`, the function returns `false` since `"ab"` is not a palindrome.
//  */
// /**
//  * i = 0

// Inner Loop (j from 0 to 2):
// j = 0
// isPalindrome(0, 0)
// Substring: "a"
// Compare s[0] ("a") with s[0] ("a"): They are equal.
// Substring "a" is a palindrome.
// Increment count by 1 (count = 1)
// j = 1
// isPalindrome(0, 1)
// Substring: "ab"
// Compare s[0] ("a") with s[1] ("b"): They are not equal.
// Substring "ab" is not a palindrome.
// j = 2
// isPalindrome(0, 2)
// Substring: "abc"
// Compare s[0] ("a") with s[2] ("c"): They are not equal.
// Substring "abc" is not a palindrome.
// i = 1

// Inner Loop (j from 1 to 2):
// j = 1
// isPalindrome(1, 1)
// Substring: "b"
// Compare s[1] ("b") with s[1] ("b"): They are equal.
// Substring "b" is a palindrome.
// Increment count by 1 (count = 2)
// j = 2
// isPalindrome(1, 2)
// Substring: "bc"
// Compare s[1] ("b") with s[2] ("c"): They are not equal.
// Substring "bc" is not a palindrome.
// i = 2

// Inner Loop (j from 2 to 2):
// j = 2
// isPalindrome(2, 2)
// Substring: "c"
// Compare s[2] ("c") with s[2] ("c"): They are equal.
// Substring "c" is a palindrome.
// Increment count by 1 (count = 3)
// Final Count
// The total number of palindromic substrings in "abc" is 3 (namely: "a", "b", and "c").
//  */

//------------------OPtimal Appraoch---------------------//
//-----------------Expand Around Center----------------//
const countSubstrings = (s) => {
    const n = s.length;
    let count = 0;

    // Helper function to expand around center and count palindromes
    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < n && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
    };

    // Loop through each character and consider it as the center of a palindrome
    // in first iteration it is go to the odd length becuase a is 1 like 'a' so it is odd
    for (let i = 0; i < n; i++) {
        //Note - Both the functions are call one after another means in a single for loop run the both function are called
        // Expand around the center for odd-length palindromes (single character center)
        // in second iteration i become 1 so peramters are (1,1)
        expandAroundCenter(i, i);

        // Expand around the center for even-length palindromes (two character center)
      // in second itertaion it become even because a is 2 like 'aa'
        expandAroundCenter(i, i + 1);
    }

    return count;
};

// Example usage:
console.log(countSubstrings("abc")); // Output: 3
console.log(countSubstrings("abba")); // Output: 6

/**
 * Sure, let's dry run the code with an emphasis on understanding how the `while` loop works within the `expandAroundCenter` function. We will use the string `"aaa"` as our example, particularly focusing on even-length palindromes
```
### Dry Run with "aaa":

#### Initial State:
- `s = "aaa"`
- `n = 3`
- `count = 0`

#### Main Loop:
1. **First Iteration (`i = 0`):**
    - **Odd-length palindrome (`expandAroundCenter(0, 0)`):**
        - Initial `left = 0`, `right = 0`
        - `s[0]` is `"a"` and `s[0]` is `"a"` (same characters)
        - Increment `count` to `1`
        - Move `left` to `-1`, `right` to `1`
        - Exit loop (left < 0)
    - **Even-length palindrome (`expandAroundCenter(0, 1)`):**
        - Initial `left = 0`, `right = 1`
        - `s[0]` is `"a"` and `s[1]` is `"a"` (same characters)
        - Increment `count` to `2`
        - Move `left` to `-1`, `right` to `2`
        - Exit loop (left < 0)

2. **Second Iteration (`i = 1`):**
    - **Odd-length palindrome (`expandAroundCenter(1, 1)`):**
        - Initial `left = 1`, `right = 1`
        - `s[1]` is `"a"` and `s[1]` is `"a"` (same characters)
        - Increment `count` to `3`
        - Move `left` to `0`, `right` to `2`
        - `s[0]` is `"a"` and `s[2]` is `"a"` (same characters)
        - Increment `count` to `4`
        - Move `left` to `-1`, `right` to `3`
        - Exit loop (left < 0)
    - **Even-length palindrome (`expandAroundCenter(1, 2)`):**
        - Initial `left = 1`, `right = 2`
        - `s[1]` is `"a"` and `s[2]` is `"a"` (same characters)
        - Increment `count` to `5`
        - Move `left` to `0`, `right` to `3`
        - Exit loop (right >= n)

3. **Third Iteration (`i = 2`):**
    - **Odd-length palindrome (`expandAroundCenter(2, 2)`):**
        - Initial `left = 2`, `right = 2`
        - `s[2]` is `"a"` and `s[2]` is `"a"` (same characters)
        - Increment `count` to `6`
        - Move `left` to `1`, `right` to `3`
        - Exit loop (right >= n)
    - **Even-length palindrome (`expandAroundCenter(2, 3)`):**
        - Initial `left = 2`, `right = 3`
        - Exit loop (right >= n)

### Explanation of `while` Loop:

The `while` loop in the `expandAroundCenter` function expands the window centered at the given `left` and `right` indices, checking for palindromic substrings.

1. **Condition Checks:**
    - `left >= 0`: Ensure the left index is within bounds.
    - `right < n`: Ensure the right index is within bounds.
    - `s[left] === s[right]`: Check if characters at `left` and `right` are the same.

2. **Expansion:**
    - If all conditions are satisfied, it means the current substring `s[left:right+1]` is a palindrome.
    - Increment the `count` of palindromic substrings.
    - Expand the window by decrementing `left` and incrementing `right`.

3. **Termination:**
    - The loop exits when any of the conditions fail, ensuring all possible palindromic substrings centered at `left` and `right` are counted.

### Final Count:

After processing all possible centers (both single and double), the total count of palindromic substrings for the string `"aaa"` is `6`. This includes the palindromes: `"a"`, `"a"`, `"a"`, `"aa"`, `"aa"`, `"aaa"`.
 */