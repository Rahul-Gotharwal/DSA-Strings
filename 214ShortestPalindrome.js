//Naive Algortim = > https://www.geeksforgeeks.org/naive-algorithm-for-pattern-searching/
//KMP algorithm => https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/
// Copy's solution

// function func(lps, a) {
//     let i = 0;
//     let j = 1; // Start j from 1 because we compare i with j and j moves forward

//     while (j < a.length) {
//         // thiswill only upadate i when they a[i] === a[j]
//         // means after four iteration c is equal to another c then i becomes ++ and at lps[j] means lps[4] = 1
//         if (a[i] === a[j]) {
//             i++;
//             lps[j] = i;
//             j++;
//         } else {
//             if (i === 0) {
//                 lps[j] = 0; // No match found, so lps[j] remains 0
//                 j++;
//             } else {
//i agar bdhne k baad bhi match nhi kar rha like a[i] === a[j] condion false ho rhi he or i === 0 bhi false ho rhi he to else condion run hogi or i  ko peeche kregi
//                 i = lps[i - 1]; // i is moves to the zero according to the copy
//             }
//         }
//     }
// }

// function shortestPalindrome(s) {
//     let t = s.split('').reverse().join(''); // Reverse of string s
//     let a = s + '#' + t; // Using '#' as a separator between s and its reverse
//     let lps = new Array(a.length).fill(0); // Initialize lps array with zeros

//     func(lps, a);

//     let i = lps[a.length - 1]; // Last value in lps array
//     let temp = s.substring(i); // Substring from index i to end of s
//     temp = temp.split('').reverse().join(''); // Reverse temp string
//     return temp + s;
// }

// // Example usage:
// console.log(shortestPalindrome("catacb")); // Output: "aaacecaaa"
// console.log(shortestPalindrome("abcd"));    // Output: "dcbabcd"

// // ----------------leetcode solution ------------------//
/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
    let rev = s.split("").reverse().join(""); // Step 1: Reverse the string s
    
    // Step 2: Iterate through the string to find the shortest palindrome
    for (let i = 0; i < s.length; i++) {
      // Step 3: Compare substrings of s and its reverse
      if (s.substring(0, s.length - i) === rev.substring())
        return rev.substring(0, i) + s; // Step 4: If a match is found, construct the palindrome and return it
    }
  
    return "";
  };
  
  let s = "aacecaaa";
  console.log(shortestPalindrome(s)); // Output: "aaacecaaa"
  
/**
 * Sure, let's dry run the code with the input `s = "aacecaaa"`.

### Dry Run:

**Initialization:**

- `s = "aacecaaa"`
- `rev = s.split("").reverse().join("")`
  - Split `s` into an array of characters: `["a", "a", "c", "e", "c", "a", "a", "a"]`
  - Reverse the array: `["a", "a", "a", "c", "e", "c", "a", "a"]`
  - Join the array back into a string: `rev = "aaacecaa"`

**Iteration:**

- **First iteration (`i = 0`):**
  - `s.substring(0, s.length - i)` → `s.substring(0, 8)` → `"aacecaaa"`
  - `rev.substring(i)` → `rev.substring(0)` → `"aaacecaa"`
  - Compare `"aacecaaa"` with `"aaacecaa"`: They are not equal.

- **Second iteration (`i = 1`):**
  - `s.substring(0, s.length - i)` → `s.substring(0, 7)` → `"aacecaa"`
  - `rev.substring(i)` → `rev.substring(1)` → `"aacecaa"`
  - Compare `"aacecaa"` with `"aacecaa"`: They are equal.
  - The condition is met, so the function returns `rev.substring(0, i) + s`:
    - `rev.substring(0, i)` → `rev.substring(0, 1)` → `"a"`
    - Result: `"a" + "aacecaaa"` → `"aaacecaaa"`

**Conclusion:**

The loop exits early at the second iteration when `i = 1`, as the condition `s.substring(0, s.length - i) === rev.substring(i)` is satisfied. The function returns `"aaacecaaa"`.

### Summary:

- The string `rev` is the reverse of `s`.
- The loop checks if a substring of `s` from the beginning matches a corresponding substring of `rev` from the current index `i`.
- When a match is found, the characters from `rev` (up to `i`) are added in front of `s` to form the shortest palindrome.
 */