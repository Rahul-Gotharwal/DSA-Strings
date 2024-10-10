// -------------------ChatGpt solution -----------------------//
// var digitSum = function(s, k) {
//     // Helper function to sum digits in a string
//     /**Helper Function sumDigits:
// This function takes a string str as input, splits it into individual characters, converts each character to an integer, sums them up, and returns the sum. */
//     const sumDigits = (str) => {
//         // reduce kaam krega ki sum kha se kha tk mtlb sum kha se konse char tk krna he
//      return str.split('').reduce((sum , char)=>(sum)+parseInt(char),0)
//        // return str.split('').reduce((sum , char)=>parseInt(sum)+parseInt(char),0)
//        // 0 is the initial value here in reduce method
//     };
//     // While the length of s is greater than k
//     while (s.length > k) {
//         let newString = '';
//         // Process each group of size k
//     //i+=k mtlb everytime size 3 se bdhegi kyuki  k ki value 3 he
//         for (let i = 0; i < s.length; i += k) {
//             // Get the current group
//             let group = s.slice(i, i + k);
//             // Sum the digits of the group
//             let sum = sumDigits(group);
//             // Append the sum to the new string
//             newString += sum.toString();
//         }
//         // Update s to be the new string
//         s = newString;
//     }
//     return s;
// };

// // Example usage
// console.log(digitSum("11111222223", 3)); // Output: "135"
// Must read this  split and reduce method => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
/***
 * In the context of the `reduce` method in JavaScript, the `accumulator` is a variable that accumulates the results of the callback function as it iterates through the array. It represents the value that will eventually be returned as the result of the `reduce` operation.

### Explanation of `reduce` Method:

The `reduce` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. It takes two parameters:
1. A reducer function that is called for each element of the array.
2. An optional initial value that is used as the first argument to the first call of the reducer function.

#### Reducer Function:
The reducer function takes four arguments:
1. `accumulator`: The accumulated value previously returned in the last invocation of the reducer, or the initial value, if supplied.
2. `currentValue`: The current element being processed in the array.
3. `currentIndex`: The index of the current element being processed in the array.
4. `array`: The array `reduce` was called upon.

### Example with Explanation:

```javascript
const array1 = [1, 2, 3, 4];

// Initial value for the accumulator
const initialValue = 0;

// Using reduce to sum the array elements
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => {
    return accumulator + currentValue;
  },
  initialValue
);

console.log(sumWithInitial); // Expected output: 10
```

### Detailed Breakdown:

1. **Initial Setup:**
   - `initialValue` is set to `0`.
   - The `reduce` method is called on `array1` with the reducer function and `initialValue`.

2. **First Iteration:**
   - `accumulator` = `initialValue` = `0`
   - `currentValue` = `1` (first element of `array1`)
   - The reducer function computes: `accumulator + currentValue` = `0 + 1` = `1`
   - The new value of `accumulator` is `1`.

3. **Second Iteration:**
   - `accumulator` = `1` (result from the first iteration)
   - `currentValue` = `2` (second element of `array1`)
   - The reducer function computes: `accumulator + currentValue` = `1 + 2` = `3`
   - The new value of `accumulator` is `3`.

4. **Third Iteration:**
   - `accumulator` = `3` (result from the second iteration)
   - `currentValue` = `3` (third element of `array1`)
   - The reducer function computes: `accumulator + currentValue` = `3 + 3` = `6`
   - The new value of `accumulator` is `6`.

5. **Fourth Iteration:**
   - `accumulator` = `6` (result from the third iteration)
   - `currentValue` = `4` (fourth element of `array1`)
   - The reducer function computes: `accumulator + currentValue` = `6 + 4` = `10`
   - The new value of `accumulator` is `10`.

6. **End of Iterations:**
   - The `reduce` method finishes iterating through `array1`.
   - The final value of `accumulator`, which is `10`, is returned by `reduce`.

### Summary:
In this example, the `accumulator` is the running total that accumulates the sum of the array elements as the `reduce` method iterates through the array. It starts with the `initialValue` (0) and gets updated in each iteration based on the current element (`currentValue`) of the array. The final result is the sum of all the elements in `array1`, which is `10`.
 */

// ---------------Leetcode Solution ------------------//
var digitSum = function(s, k) {
    while (s.length > k) {
        let newString = "";
        for (let i = 0; i < s.length; i += k)
            newString += s.substring(i, i + k).split("").reduce((acc, val) => acc + parseInt(val), 0);
        
        s = newString;
    }
    
    return s;
};
console.log(digitSum("11111222223", 3));