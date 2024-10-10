var myAtoi = function (s) {
  let index = 0;
  let sign = 1;
  let result = 0;
  const n = s.length;
  const INT_MAX = 2 ** 31 - 1; // 2147483647
  const INT_MIN = -(2 ** 31); // -2147483648
  // Step 1: Ignore leading whitespace
  while (index < n && s[index] === " ") {
    index++;
  }

  // Step 2: Check for sign
  if (index < n && (s[index] === "-" || s[index] === "+")) {
    sign = s[index] === "-" ? -1 : 1;
    // If the current character is '-', set sign to -1.
    index++;
  }

  // Step 3: Convert digits to integer
  // index value is in between the 0 and 9
  while (index < n && s[index] >= "0" && s[index] <= "9") {
    //converting string into integer
    // this line gives the integers like for 1 the asscii value is 49 and for 0 the ascii value is 48 then answer is 1 that is integer
    // for next iteration like 3 asscii is 51 and or 0's ascii is 48 then result is 3 that is integer
    const digit = s.charCodeAt(index) - "0".charCodeAt(0);
    // For example, if s = "1337c0d3" and index = 0, s.charCodeAt(0) returns 49 (the ASCII value of '1').
    //0'.charCodeAt(0): This expression returns the ASCII value of the character '0', which is 48.
    // Check for overflow and clamp
    // NOTE - this is same as copy's example like ans varible
    if (
      result > Math.floor(INT_MAX / 10) ||
      (result === Math.floor(INT_MAX / 10) && digit > 7)
    ) {
      return sign === 1 ? INT_MAX : INT_MIN;
    }

    result = result * 10 + digit;
    index++;
  }

  return result * sign;
};

// // Test cases
// console.log(myAtoi("42")); // Output: 42
// console.log(myAtoi("   -042")); // Output: -42
// console.log(myAtoi("1337c0d3")); // Output: 1337
// console.log(myAtoi("0-1")); // Output: 0
// console.log(myAtoi("words and 987")); // Output: 0

/**
 * Sure, let's break down and understand the logic for handling overflow and constructing the final result in the given code snippet.

### Code Snippet

```javascript
if (result > Math.floor(INT_MAX / 10) || (result === Math.floor(INT_MAX / 10) && digit > 7)) {
    return sign === 1 ? INT_MAX : INT_MIN;
}

result = result * 10 + digit;
index++;
}
```

### Constants

```javascript
const INT_MAX = 2 ** 31 - 1;  // 2147483647
const INT_MIN = -(2 ** 31);   // -2147483648
```

### Explanation

1. **Overflow Check**:
   - The code is designed to prevent overflow, which can occur when the integer being constructed exceeds the limits of a 32-bit signed integer.
   - A 32-bit signed integer can range from `-2147483648` to `2147483647`.

2. **Conditions**:
   - **`result > Math.floor(INT_MAX / 10)`**:
     - If `result` is greater than `214748364`, then multiplying `result` by 10 and adding any digit will definitely cause overflow.
   - **`(result === Math.floor(INT_MAX / 10) && digit > 7)`**:
     - If `result` is exactly `214748364`, then adding a digit greater than `7` will cause overflow. This is because `2147483647` is the maximum value, and appending any digit greater than `7` would push it beyond `2147483647`.

3. **Handling Overflow**:
   - If either condition is true, the function returns `INT_MAX` if the `sign` is positive, or `INT_MIN` if the `sign` is negative.

4. **Constructing the Result**:
   - If there is no overflow, the `result` is updated by multiplying it by `10` and adding the `digit`.
   - The `index` is incremented to process the next character.

5. **Returning the Final Result**:
   - After the loop completes, the final result is multiplied by `sign` to account for the original sign of the number.

### Dry Run with Example Input

Let's use `s = "2147483648"` to illustrate how the code handles overflow.

1. **Initial State**:
   - `s = "2147483648"`
   - `index = 0`
   - `result = 0`
   - `sign = 1`
   - `INT_MAX = 2147483647`
   - `INT_MIN = -2147483648`

2. **Loop Iterations**:

    - **First Iteration (index = 0)**:
      - `s[index] = '2'`
      - `digit = '2'.charCodeAt(0) - '0'.charCodeAt(0) = 2`
      - **Overflow Check**:
        - `result = 0`
        - `result <= Math.floor(INT_MAX / 10) = 214748364`
        - Condition false
      - `result = result * 10 + digit = 0 * 10 + 2 = 2`
      - `index = 1`

    - **Second Iteration (index = 1)**:
      - `s[index] = '1'`
      - `digit = '1'.charCodeAt(0) - '0'.charCodeAt(0) = 1`
      - **Overflow Check**:
        - `result = 2`
        - `result <= Math.floor(INT_MAX / 10) = 214748364`
        - Condition false
      - `result = result * 10 + digit = 2 * 10 + 1 = 21`
      - `index = 2`

    - **Third Iteration (index = 2)**:
      - `s[index] = '3'`
      - `digit = '3'.charCodeAt(0) - '0'.charCodeAt(0) = 3`
      - **Overflow Check**:
        - `result = 21`
        - `result <= Math.floor(INT_MAX / 10) = 214748364`
        - Condition false
      - `result = result * 10 + digit = 21 * 10 + 3 = 213`
      - `index = 3`

    - **Fourth Iteration (index = 3)**:
      - `s[index] = '4'`
      - `digit = '4'.charCodeAt(0) - '0'.charCodeAt(0) = 4`
      - **Overflow Check**:
        - `result = 213`
        - `result <= Math.floor(INT_MAX / 10) = 214748364`
        - Condition false
      - `result = result * 10 + digit = 213 * 10 + 4 = 2134`
      - `index = 4`

    - **Fifth Iteration (index = 4)**:
      - `s[index] = '7'`
      - `digit = '7'.charCodeAt(0) - '0'.charCodeAt(0) = 7`
      - **Overflow Check**:
        - `result = 2134`
        - `result <= Math.floor(INT_MAX / 10) = 214748364`
        - Condition false
      - `result = result * 10 + digit = 2134 * 10 + 7 = 21347`
      - `index = 5`

    - **Sixth Iteration (index = 5)**:
      - `s[index] = '4'`
      - `digit = '4'.charCodeAt(0) - '0'.charCodeAt(0) = 4`
      - **Overflow Check**:
        - `result = 21347`
        - `result <= Math.floor(INT_MAX / 10) = 214748364`
        - Condition false
      - `result = result * 10 + digit = 21347 * 10 + 4 = 213474`
      - `index = 6`

    - **Seventh Iteration (index = 6)**:
      - `s[index] = '8'`
      - `digit = '8'.charCodeAt(0) - '0'.charCodeAt(0) = 8`
      - **Overflow Check**:
        - `result = 213474`
        - `result <= Math.floor(INT_MAX / 10) = 214748364`
        - Condition false
      - `result = result * 10 + digit = 213474 * 10 + 8 = 2134748`
      - `index = 7`

    - **Eighth Iteration (index = 7)**:
      - `s[index] = '3'`
      - `digit = '3'.charCodeAt(0) - '0'.charCodeAt(0) = 3`
      - **Overflow Check**:
        - `result = 2134748`
        - `result <= Math.floor(INT_MAX / 10) = 214748364`
        - Condition false
      - `result = result * 10 + digit = 2134748 * 10 + 3 = 21347483`
      - `index = 8`

    - **Ninth Iteration (index = 8)**:
      - `s[index] = '6'`
      - `digit = '6'.charCodeAt(0) - '0'.charCodeAt(0) = 6`
      - **Overflow Check**:
        - `result = 21347483`
        - `result <= Math.floor(INT_MAX / 10) = 214748364`
        - Condition false
      - `result = result * 10 + digit = 21347483 * 10 + 6 = 213474836`
      - `index = 9`

    - **Tenth Iteration (index = 9)**:
      - `s[index] = '4'`
      - `digit = '4'.charCodeAt(0) - '0'.charCodeAt(0) = 4`
      - **Overflow Check**:
        - `result = 213474836`
        - `result <= Math.floor(INT_MAX / 10) = 214748364`
        - `result === Math.floor(INT_MAX / 10) && digit > 7`
        - `213474836 == 214748364 && 4 > 7`
        - False
      - `result = result * 10 + digit = 213474836 * 10 + 4 = 2134748364`
      - `index = 10`

    - **Eleventh Iteration (index = 10)**:
      - `s[index] = '8'`
      - `digit = '8'.charCodeAt(0) - '0'.charCodeAt(0) = 8`
      - **Overflow Check**:
        - `result = 2134748364`
        - `result > Math.floor(INT_MAX / 10)`
        - `result === Math.floor(INT_MAX / 10) && digit > 7`
        - `2134748364 == 214748364 && 8 > 7`
        - True
      - Overflow condition is true, return `INT_MAX` (2147483647).

### Summary

For the input `"2147483648"`, the code:
1. Reads and converts digits into `result`.
2. Checks for potential overflow before updating `
 */

//------------------Leetcode solution---------------//
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const str = s.trim(); // Step 1: Trim whitespace
  const match = str.match(/^[\+\-]?\d+/); // Step 2: Extract the number part
  // '/..../ start and end of expression
  // '^' indicate that the pattern must match from the beginning of the string.
  //
  /**
 * [\+\-]?:

Square brackets [ ... ] define a character class, which matches any one of the characters inside the brackets.
\+ and \- are escaped characters for + and - respectively. The backslashes \ are used to escape these characters because they have special meanings in regular expressions.
? makes the preceding element (the character class [\+\-]) optional, meaning it will match zero or one occurrence of either + or -.
\d+:

\d matches any digit (equivalent to [0-9]).
+ indicates that the preceding element (\d) must appear one or more times. This means the pattern will match one or more digits.
 */
  if (!match) return 0; // If no match is found, return 0
  // it willreturn zero when no digits like ("words and 987") blank (" ") or non numeric character ('abc1223")

  let number = parseInt(match[0], 10); // Convert the matched string to an integer

  // Step 3: Clamp the number within the 32-bit signed integer range
  if (number < -2147483648) return -2147483648;
  if (number > 2147483647) return 2147483647;

  return number; // Step 4: Return the final result
};

// Test cases
console.log(myAtoi("42")); // Output: 42
console.log(myAtoi("   -042")); // Output: -42
console.log(myAtoi("1337c0d3")); // Output: 1337
console.log(myAtoi("0-1")); // Output: 0
console.log(myAtoi("words and 987")); // Output: 0

/**
 * For the input " -042":

Trimming: " -042" becomes "-042".
Matching: "-042" matches the regular expression, resulting in ["-042"].
Conversion: parseInt("-042", 10) gives -42.
Range Check: -42 is within the 32-bit range, so no clamping is needed.
Return: The function returns -42.

Step-by-Step Breakdown:

The input string is " -42 is the answer".
The regular expression /^[\+\-]?\d+/ is applied to the string.
Trim Whitespace (not shown in the regex):

Usually, you'd trim leading whitespace before applying the regex. The leading spaces " " are ignored in this explanation, assuming the string is trimmed elsewhere.
Match from Start:

The caret ^ ensures that matching starts from the beginning of the string (ignoring leading whitespace, if trimmed).
Optional Sign:

The character class [\+\-]? matches zero or one occurrence of + or -. In our string, it matches '-'.
Digits:

The \d+ part matches one or more digits. In our string, it matches "42".
Match Result:

Combining these, the regex matches "-42".
Output:

match will be an array containing the matched string: ["-42"].
 */
