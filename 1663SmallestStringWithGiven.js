// function getSmallestString(n, k) {
//   // Initialize an array with 'a' (value 1) to fill the string of length n
//   let result = Array(n).fill("a");
//   // Subtract the base value of 'a' (1) from k for all characters
//   k = k - n;
//   // start filling the string from the end
//   let i = n - 1;
//   while (k > 0) {
//     // Calculate the maximum value that can be added to the current character
//     let addValue = Math.min(25, k);
//     result[i] = String.fromCharCode(result[i].charCodeAt(0) + addValue);
//     // Update k to reflect the remaining value to be distributed
//     k -= addValue;
//     // Move to the previous character in the string
//     i--;     
//   }
//   // Join the array to form the final string
//   return result.join('');
// }
// console.log(getSmallestString(3, 27)); // Output: "aay"
// console.log(getSmallestString(5, 73)); // Output: "aaszz"

/**
 * 
 * Sure! Let's do a dry run of the code for the input `n = 5` and `k = 73`. I'll also explain the line `result[i] = String.fromCharCode(result[i].charCodeAt(0) + addValue);`.

### Dry Run:

1. **Initialization**:
   - `n = 5`
   - `k = 73`
   - `result = ['a', 'a', 'a', 'a', 'a']` (an array of 5 'a's)
   - Adjust `k` by subtracting `n`: `k = 73 - 5 = 68`

2. **While Loop**:
   - Start at the end of the array (`i = 4`):
     - `addValue = Math.min(25, 68) = 25` (maximum increment)
     - `result[4] = String.fromCharCode(result[4].charCodeAt(0) + 25)`
       - `result[4].charCodeAt(0)` is the ASCII code of 'a' which is 97.
       - Adding 25 gives us 122, which is the ASCII code of 'z'.
       - `String.fromCharCode(122)` converts it back to 'z'.
       - So, `result[4]` becomes 'z'.
     - `result = ['a', 'a', 'a', 'a', 'z']`
     - `k = 68 - 25 = 43`
     - Move to the previous character (`i = 3`):
   
   - Continue the loop:
     - `addValue = Math.min(25, 43) = 25`
     - `result[3] = String.fromCharCode(result[3].charCodeAt(0) + 25)`
       - `result[3]` becomes 'z'.
     - `result = ['a', 'a', 'a', 'z', 'z']`
     - `k = 43 - 25 = 18`
     - Move to the previous character (`i = 2`):
   
   - Continue the loop:
     - `addValue = Math.min(25, 18) = 18`
     - `result[2] = String.fromCharCode(result[2].charCodeAt(0) + 18)`
       - `result[2].charCodeAt(0)` is 97 (for 'a'), adding 18 gives 115 (for 's').
       - `result[2]` becomes 's'.
     - `result = ['a', 'a', 's', 'z', 'z']`
     - `k = 18 - 18 = 0`
     - Move to the previous character (`i = 1`):

3. **End Loop**: `k` is now 0, so the while loop exits.

4. **Result**:
   - Join the array to form the final string: `result.join('') = 'aaszz'`.

### Explanation of `result[i] = String.fromCharCode(result[i].charCodeAt(0) + addValue)`:

1. **`result[i].charCodeAt(0)`**:
   - `result[i]` is a character in the array `result`.
   - `.charCodeAt(0)` returns the ASCII code of the character. For example, if `result[i]` is 'a', `result[i].charCodeAt(0)` returns 97.

2. **`+ addValue`**:
   - Adds `addValue` to the ASCII code. For example, if `addValue` is 25, `97 + 25 = 122`.

3. **`String.fromCharCode(...)`**:
   - `String.fromCharCode(...)` converts the resulting ASCII code back to a character. For example, `String.fromCharCode(122)` returns 'z'.

In summary, this line of code increases the character at position `i` by `addValue` positions in the alphabet. If `result[i]` is 'a' and `addValue` is 25, the character becomes 'z'. If `addValue` is 18, the character becomes 's'. This transformation ensures that we construct the string while maintaining the lexicographical order and achieving the required numeric value.

 */
//---------------Leetcode Solution ----------------//
var getSmallestString = function(n, k) {
    // Decrease k by n because we need to account for the initial 'a's in the string.
    k -= n;

    // Create a string 'alpha' with characters 'b' to 'y' for easy indexing.
    let alpha = '_bcdefghijklmnopqrstuvwxy_';

    // Initialize the result string 'res' with as many 'z's as possible.
    let res = 'z'.repeat((k / 25));
    // res will become 'zz'

    // If there's a remainder when k is divided by 25, add the corresponding character from 'alpha'.
    if (k % 25) {
        // means s , k%25 => 18 
    res = alpha[k % 25] + res;
    // res = 's' + 'zz'
}
/**let text = "5";
text = text.padStart(4,"0");
0005 is answer
*/
    // Pad the result string with 'a's to make the total length equal to n.
    // padstart working , ye repaet me a ko res k sath jodega jisme ye a ko tb tk repaet krega tb tk a  'n' k equal nhi ho jata 
    // ab res  k pass phle hi 3 characheters he , or n humara 5 he ,to isko 2 hi charchter or a add krne he , 5 charcter tk phuchne k liye
    return res.padStart(n, 'a');
};
console.log(getSmallestString(3, 27)); // Output: "aay"
console.log(getSmallestString(5, 73)); // Output: "aaszz"