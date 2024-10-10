// //---------------------------ChatGpt Solution---------------------//
// function minSteps(s, t) {
//     // Create an array to count frequency of each character in s and t
//     const countS = new Array(26).fill(0);
//     const countT = new Array(26).fill(0);

//     // Helper function to get the index of a character to increment its index at the position in the arrays
//     // first letter "l" comes here by calling the fucntion from below for loop like calculation is
//     // charIndex = 108('l') - 97('a') => 11 so at the 11 position in the countS array we incremnt it from 0 to 1
//     const charIndex = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);
//     // Count frequency of each character in s
//     for (let char of s) {
//     // first l comes in the s and we check l in the countS
//     // is char of s are present in the countS , then do the  increment
//         countS[charIndex(char)]++;
//     }

//     // Count frequency of each character in t
//     for (let char of t) {
//         countT[charIndex(char)]++;
//     }

//     // Calculate the number of steps needed to make t an anagram of s
//     // remaining alphabates are 5 , bcz same are cut by doing minus , and extra are repersented by postive like 1 , 2, 3 (that remains to change and make the anagram)
//    The total number of steps required to make t an anagram of s is the sum of these differences for characters that need more replacements in t than present in s.
//     let steps = 0;
//     for (let i = 0; i < 26; i++) {
//         if (countT[i] > countS[i]) {
//             steps += countT[i] - countS[i];
//         }
//     }

//     return steps;
// }

// // Example usage:
// console.log(minSteps("bab", "aba")); // Output: 1
// console.log(minSteps("leetcode", "practice")); // Output: 5
// console.log(minSteps("anagram", "mangaar")); // Output: 0

/**
 * 
 * Sure, let's do a detailed dry run of the code with the example `s = "leetcode"` and `t = "practice"`.

### Initial State:
- `s = "leetcode"`
- `t = "practice"`

### Step-by-Step Dry Run:

1. **Initialization**:
   - `countS = new Array(26).fill(0)` initializes an array of size 26 with all elements as 0 for `s`.
   - `countT = new Array(26).fill(0)` initializes an array of size 26 with all elements as 0 for `t`.

2. **Helper Function**:
   - `charIndex = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0)`
   - This function converts a character to its corresponding index (0 for 'a', 1 for 'b', ..., 25 for 'z').

3. **Count Frequency of Each Character in `s`**:
   - Traverse each character in `s` and update `countS`.

   ```plaintext
   s = "leetcode"
   countS['l']++ -> countS[11]++
   countS['e']++ -> countS[4]++
   countS['e']++ -> countS[4]++
   countS['t']++ -> countS[19]++
   countS['c']++ -> countS[2]++
   countS['o']++ -> countS[14]++
   countS['d']++ -> countS[3]++
   countS['e']++ -> countS[4]++
   
   countS = [0, 0, 1, 1, 3, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
   ```

4. **Count Frequency of Each Character in `t`**:
   - Traverse each character in `t` and update `countT`.

   ```plaintext
   t = "practice"
   countT['p']++ -> countT[15]++
   countT['r']++ -> countT[17]++
   countT['a']++ -> countT[0]++
   countT['c']++ -> countT[2]++
   countT['t']++ -> countT[19]++
   countT['i']++ -> countT[8]++
   countT['c']++ -> countT[2]++
   countT['e']++ -> countT[4]++
   
   countT = [1, 0, 2, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0]
   ```

5. **Calculate the Number of Steps Needed**:
   - Compare `countS` and `countT` for each character from 'a' to 'z' (i.e., index 0 to 25).

   ```plaintext
   steps = 0
   i = 0, countS[0] = 0, countT[0] = 1, steps += (1 - 0) = 1
   i = 1, countS[1] = 0, countT[1] = 0, steps += 0
   i = 2, countS[2] = 1, countT[2] = 2, steps += (2 - 1) = 1, steps = 2
   i = 3, countS[3] = 1, countT[3] = 0, steps += 0
   i = 4, countS[4] = 3, countT[4] = 1, steps += 0
   i = 5, countS[5] = 0, countT[5] = 0, steps += 0
   i = 6, countS[6] = 0, countT[6] = 0, steps += 0
   i = 7, countS[7] = 0, countT[7] = 0, steps += 0
   i = 8, countS[8] = 0, countT[8] = 1, steps += (1 - 0) = 1, steps = 3
   i = 9, countS[9] = 0, countT[9] = 0, steps += 0
   i = 10, countS[10] = 0, countT[10] = 0, steps += 0
   i = 11, countS[11] = 1, countT[11] = 0, steps += 0
   i = 12, countS[12] = 0, countT[12] = 0, steps += 0
   i = 13, countS[13] = 0, countT[13] = 0, steps += 0
   i = 14, countS[14] = 1, countT[14] = 0, steps += 0
   i = 15, countS[15] = 0, countT[15] = 1, steps += (1 - 0) = 1, steps = 4
   i = 16, countS[16] = 0, countT[16] = 0, steps += 0
   i = 17, countS[17] = 0, countT[17] = 1, steps += (1 - 0) = 1, steps = 5
   i = 18, countS[18] = 0, countT[18] = 0, steps += 0
   i = 19, countS[19] = 1, countT[19] = 1, steps += 0
   i = 20, countS[20] = 0, countT[20] = 0, steps += 0
   i = 21, countS[21] = 0, countT[21] = 0, steps += 0
   i = 22, countS[22] = 0, countT[22] = 0, steps += 0
   i = 23, countS[23] = 0, countT[23] = 0, steps += 0
   i = 24, countS[24] = 0, countT[24] = 0, steps += 0
   i = 25, countS[25] = 0, countT[25] = 0, steps += 0
   ```

6. **Return the Result**:
   - The total number of steps required is `5`.


```

This function correctly computes the minimum number of steps required to make `t` an anagram of `s` for the given examples.
 */

// var minSteps = function(s, t) {
//     const alphabets = Array(26).fill(0);
//     let result = 0;

//     // storing difference of frequency of characters in both string
//     for (let index = 0; index < s.length; index++) {

//         // it is like if element "l" is coming then do the increment at that place and at the same place when 2nd line t.charCode(index) is run it will decremnet the l by one if it is find the l in the t
//         alphabets[s.charCodeAt(index) - 'a'.charCodeAt(0)]++;
//         alphabets[t.charCodeAt(index) - 'a'.charCodeAt(0)]--;
//     }

//     //console.log("Frequency differences:", alphabets);

//     for (let count of alphabets) {
//         result += Math.max(0, count);
//     }

//     return result;
// };

// // Example usage:
// console.log(minSteps("bab", "aba")); // Output: 1
// console.log(minSteps("leetcode", "practice")); // Output: 5
// console.log(minSteps("anagram", "mangaar")); // Output: 0

/**
 *A positive value in alphabets means that s has more of that character than t.
To make t an anagram of s, we need to replace characters in t to match the excess characters in s
Negative values indicate that t has more of that character than s, which will be balanced out when we encounter other characters that t lacks.
 */
/**
 * Detailed Explanation of Math.max(0, count)
The statement result += Math.max(0, count) is used to add only the positive counts to result. Here is why this works:

Math.max(0, count) returns the larger of the two values: 0 or count.
If count is negative (like -1), Math.max(0, -1) will return 0.
If count is positive or zero, Math.max(0, count) will return count.
Therefore, when count is -1 (or any negative number), it does not contribute to the result because Math.max(0, count) will be 0, which doesn't change the result.
 */

//--------------------Using Map ---------------------//
function minSteps(source, target) {
  // if the length of the strings is not equal then return -1
  if (source.length !== target.length) {
    return -1;
  }

  /**
     * // "leetcode" -> charCount
{
    l: 1,
    e: 3,
    t: 1,
    c: 1,
    o: 1,
    d: 1
}

     */
  // storing the occurrence of each character of the string source
  const charCount = {}; // this is the object to store the frequancy of characters
  for (let char of source) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
      // if letter is not in charCount[char] it will 1 and if it is there then increment is happen in if condion
    }
  }

  // initializing the steps to zero
  let steps = 0;

  // visiting each character of string target and checking whether it is present in the map or not
  for (let char of target) {
    if (!charCount[char] || charCount[char] === 0) {
      // if it is not present or the count is zero, increase the step
      steps++;
    } else {
      // if it is present in the map then decrement its count by 1
      charCount[char]--;
    }
  }

  return steps; // return the number of steps
}

// Example usage:
console.log(minSteps("bab", "aba")); // Output: 1
console.log(minSteps("leetcode", "practice")); // Output: 5
console.log(minSteps("anagram", "mangaar")); // Output: 0

/**
 * Initial Check for String Lengths:

The function starts by checking if the lengths of the source and target strings are the same. If not, it returns -1 because an anagram is only possible if the lengths are identical.
Count Character Occurrences in source:

An object charCount is used to store the frequency of each character in the source string.
Initialize Steps Counter:

A variable steps is initialized to 0. This will keep track of the number of replacements needed to make target an anagram of source.
Check Characters in target:

The function then iterates through each character in the target string. For each character:
If the character is not present in the charCount object or its count is 0, increment the steps by 1.
If the character is present, decrement its count in the charCount object by 1.
Return the Number of Steps:

Finally, the function returns the steps which indicates the minimum number of replacements needed to make target an anagram of source.
 */
