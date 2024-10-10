
/**
 * Sorting the Array: Sort the array of strings. The reason for sorting is that the common prefix of the first and last strings in the sorted array will be the common prefix for the entire array. This is because the first and last strings will have the smallest and largest prefixes in lexicographical order.
 */
// var longestCommonPrefix = function(strs) {
//     // sort the array 
//  strs.sort()
//  console.log(strs.sort())
//  let first = strs[0]
//  let last = strs[strs.length-1]
//  // find the common prefix between the first and last string
//  let i = 0 
//  // take anyone's length
//  while(i<last.length && first[i] === last[i])
//     {
//         i++
//     }
//     // The common prefix is the substring from 0 to i in the first string
//     return first.substring(0, i);
// };
// let strs = ["flower","flow","flight"]
// console.log(longestCommonPrefix(strs));


//-----------------Using for loop But here we can only do it without sorting the array--//


// var longestCommonPrefix = function(strs) {
//     if (strs.length === 0) return "";

//     // Initialize the prefix with the first string
//     let prefix = strs[0]; // prefix = 'flower'
//     // Loop through the array starting from the second string
//     for (let i = 1; i < strs.length; i++) {
//         // Check the current string against the prefix
//         // current string is 'flow'
//         //strs[1].indexOf(prefix) !== 0 // "flow".indexOf("flower") !== 0 => true
//         while (strs[i].indexOf(prefix) !== 0) {
//             // Truncate the last character from the prefix
//             prefix = prefix.substring(0, prefix.length - 1);
//             // If the prefix becomes empty, return an empty string
//             if (prefix === "") return "";
//         }
//     }
    
//     return prefix;
// };

// // Example usage:
// let strs = ["flower", "flow", "flight"];
// console.log(longestCommonPrefix(strs)); // Output: "fl"

/**
 * Sure, let's dry run the provided implementation step by step using the example input `["flower", "flow", "flight"]`.

### Step-by-Step Dry Run:

1. **Initial Input:**
   ```javascript
   let strs = ["flower", "flow", "flight"];
   ```

2. **Check for Empty Array:**
   ```javascript
   if (strs.length === 0) return "";
   ```
   - `strs.length` is 3, so we do not return an empty string.

3. **Initialize the Prefix:**
   ```javascript
   let prefix = strs[0]; // prefix = "flower"
   ```

4. **Loop Through Array (Starting from Second String):**
   ```javascript
   for (let i = 1; i < strs.length; i++) {
       while (strs[i].indexOf(prefix) !== 0) {
           prefix = prefix.substring(0, prefix.length - 1);
           if (prefix === "") return "";
       }
   }
   ```

5. **First Iteration (`i = 1`):**
   - **Current String:** `strs[1] = "flow"`
   - **Check if "flow" starts with "flower":**
     ```javascript
     strs[1].indexOf(prefix) !== 0 // "flow".indexOf("flower") !== 0 => true
     ```
   - **Truncate Prefix:**
     ```javascript
     prefix = prefix.substring(0, prefix.length - 1); // prefix = "flowe"
     ```
   - **Check Again:**
     ```javascript
     strs[1].indexOf(prefix) !== 0 // "flow".indexOf("flowe") !== 0 => true
     ```
   - **Truncate Again:**
     ```javascript
     prefix = prefix.substring(0, prefix.length - 1); // prefix = "flow"
     ```
   - **Check Again:**
     ```javascript
     strs[1].indexOf(prefix) !== 0 // "flow".indexOf("flow") !== 0 => false
     ```
   - **Prefix Matches:**
     - No more truncation needed.

6. **Second Iteration (`i = 2`):**
   - **Current String:** `strs[2] = "flight"`
   - **Check if "flight" starts with "flow":**
     ```javascript
     strs[2].indexOf(prefix) !== 0 // "flight".indexOf("flow") !== 0 => true
     ```
   - **Truncate Prefix:**
     ```javascript
     prefix = prefix.substring(0, prefix.length - 1); // prefix = "flo"
     ```
   - **Check Again:**
     ```javascript
     strs[2].indexOf(prefix) !== 0 // "flight".indexOf("flo") !== 0 => true
     ```
   - **Truncate Again:**
     ```javascript
     prefix = prefix.substring(0, prefix.length - 1); // prefix = "fl"
     ```
   - **Check Again:**
     ```javascript
     strs[2].indexOf(prefix) !== 0 // "flight".indexOf("fl") !== 0 => false
     ```
   - **Prefix Matches:**
     - No more truncation needed.

7. **End of Loop:**
   - The loop completes as we have iterated through all the strings.

8. **Return the Result:**
   ```javascript
   return prefix; // "fl"
   ```

### Summary:
- **Initial Prefix:** "flower"
- **After First Iteration:** "flow"
- **After Second Iteration:** "fl"
- **Final Result:** "fl"

The longest common prefix for the input `["flower", "flow", "flight"]` is `"fl"`.
 */

//---------------leetcode Solution -----------------//
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }
    let ans = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(ans) !== 0) {
            ans = ans.substring(0, ans.length - 1);
            if (ans === '') {
                return '';
            }
        }
    }
    return ans;
};
let strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs)); // Output: "fl"