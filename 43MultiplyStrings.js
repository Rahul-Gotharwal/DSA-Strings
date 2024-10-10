//First Optimal Apparoh -> Leetcode Solutions

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// var multiply = function (num1, num2) {
//   let b = BigInt(num1) * BigInt(num2);
//   /**
//      * Conversion to BigInt:
// BigInt("123") results in a BigInt representation of 123.
// BigInt("456") results in a BigInt representation of 456.
//      */
//   return String(b);
// };

// let num1 = "123";
// let num2 = "456";
// const result = multiply(num1, num2);
// console.log(result);
//-----------------------Optimal Approach------------------//
/**
 * 
 1 is the higher order digit because it represents 10 (tens place).
8 is the lower order digit because it represents 8 (units place).
 */
var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";

  const m = num1.length,
    n = num2.length,
    res = new Array(m + n).fill(0);
  // copy's answer is this
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const p1 = i + j,
        p2 = i + j + 1;
        // why we use res[p2] because in frist iteration i =2 , j is 2 then at i+j+1 that is p2 stores the 0 because array res fill with zeros , 
        // in next iteration i is 2 j is 1 so res[p2] is i+j+1  = 4 holds the value 1  , so then  1 is added to the next iteration
        // because agian i+j+1 is happen in the loop 
      let sum = res[p2] + Number(num1[i]) * Number(num2[j]);
      res[p2] = sum % 10; // lower order digit store that is 8
      res[p1] += Math.floor(sum / 10); // higher order digit store that is 1 at position 6 in first iteraion
    }
  }
  if (res[0] === 0) res.shift();
  return res.join("");
};
let num1 = "123";
let num2 = "456";
const result = multiply(num1, num2);
console.log(result);

/**
 * Let's perform the dry run with `num1 = "123"` and `num2 = "456"`.

### Initialization
- `m = 3` (length of "123")
- `n = 3` (length of "456")
- `res = [0, 0, 0, 0, 0, 0]` (array of length 6)

### Iteration Details
Let's go through each step of the nested loops and update the `res` array accordingly.

#### First Iteration (i = 2)
- **j = 2**: Multiply `num1[2]` ('3') and `num2[2]` ('6'):
  - `sum = 0 + 3 * 6 = 18`
  - `res[5] = 18 % 10 = 8`
  - `res[4] += Math.floor(18 / 10) = 1`
  - `res = [0, 0, 0, 0, 1, 8]`
- **j = 1**: Multiply `num1[2]` ('3') and `num2[1]` ('5'):
  - `sum = 1 + 3 * 5 = 16`
  - `res[4] = 16 % 10 = 6`
  - `res[3] += Math.floor(16 / 10) = 1`
  - `res = [0, 0, 0, 1, 6, 8]`
- **j = 0**: Multiply `num1[2]` ('3') and `num2[0]` ('4'):
  - `sum = 1 + 3 * 4 = 13`
  - `res[3] = 13 % 10 = 3`
  - `res[2] += Math.floor(13 / 10) = 1`
  - `res = [0, 0, 1, 3, 6, 8]`

#### Second Iteration (i = 1)
- **j = 2**: Multiply `num1[1]` ('2') and `num2[2]` ('6'):
  - `sum = 6 + 2 * 6 = 18`
  - `res[4] = 18 % 10 = 8`
  - `res[3] += Math.floor(18 / 10) = 1`
  - `res = [0, 0, 1, 4, 8, 8]`
- **j = 1**: Multiply `num1[1]` ('2') and `num2[1]` ('5'):
  - `sum = 4 + 2 * 5 = 14`
  - `res[3] = 14 % 10 = 4`
  - `res[2] += Math.floor(14 / 10) = 1`
  - `res = [0, 0, 2, 4, 8, 8]`
- **j = 0**: Multiply `num1[1]` ('2') and `num2[0]` ('4'):
  - `sum = 2 + 2 * 4 = 10`
  - `res[2] = 10 % 10 = 0`
  - `res[1] += Math.floor(10 / 10) = 1`
  - `res = [0, 1, 0, 4, 8, 8]`

#### Third Iteration (i = 0)
- **j = 2**: Multiply `num1[0]` ('1') and `num2[2]` ('6'):
  - `sum = 4 + 1 * 6 = 10`
  - `res[3] = 10 % 10 = 0`
  - `res[2] += Math.floor(10 / 10) = 1`
  - `res = [0, 1, 1, 0, 8, 8]`
- **j = 1**: Multiply `num1[0]` ('1') and `num2[1]` ('5'):
  - `sum = 1 + 1 * 5 = 6`
  - `res[2] = 6 % 10 = 6`
  - `res[1] += Math.floor(6 / 10) = 0`
  - `res = [0, 1, 6, 0, 8, 8]`
- **j = 0**: Multiply `num1[0]` ('1') and `num2[0]` ('4'):
  - `sum = 1 * 4 = 4`
  - `res[1] = 4 % 10 = 4`
  - `res[0] += Math.floor(4 / 10) = 0`
  - `res = [0, 5, 6, 0, 8, 8]`

### Remove Leading Zeros
- `res = [5, 6, 0, 8, 8]` (shifted to remove leading zero)

### Final Result
- Join `res` to form the string "56088".

### Final Product
The final product of multiplying "123" and "456" using this method is "56088".
 */
