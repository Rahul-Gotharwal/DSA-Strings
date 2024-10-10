//----------Using Regular Expression---------------//

// var percentageLetter = function(s, letter) {
//     // it must be 'g' 
//     /**
//      * new RegExp(letter, "g"): This creates a new regular expression object where letter is the pattern to search for and "g" is the global flag, meaning it will search for all occurrences of letter in the string s
//      * s.match(reg): This method searches the string s for matches of the regular expression reg. It returns an array of all matches if any are found, or null if no matches are found.
//      */ 
//     let reg  = new RegExp(letter ,"g");
//     console.log(reg)
//     let countReg = s.match(reg);
//     if(countReg === null){
//         return 0
//     }
//     else{
//         return (Math.floor((countReg.length/s.length)*100))
//     }
// };
// let  s = "foobar", letter = "o"
// console.log(percentageLetter(s, letter))

// ----------Using the split and reduce-----------------//
// var percentageLetter = function(s,letter){
//     const count = s.split('').reduce((accumulator , currentValue)=>{
//         if(currentValue == letter) accumulator++
//         return accumulator
//     },0)
//     return Math.floor((count/s.length)*100)
// }
// let  s = "foobar", letter = "o"
// console.log(percentageLetter(s, letter))
/**
 * 
/**
 * Splitting the String:

s.split(''): This splits the string s into an array of its individual characters.
For s = "foobar", the result is ['f', 'o', 'o', 'b', 'a', 'r'].
Using reduce to Count Occurrences:

reduce iterates over each element of the array and applies a function to accumulate a result.
The accumulator starts at 0 (the initial value provided to reduce).
For each character in the array, if the character matches letter, the accumulator is incremented by 1.
Dry Run of the Code
Let's go through the code step by step with the input values s = "foobar" and letter = "o".

Split the String:

javascript
Copy code
s.split('');
Result:

javascript
Copy code
['f', 'o', 'o', 'b', 'a', 'r']
Reduce to Count Occurrences:

javascript
Copy code
const count = s.split('').reduce((accumulator, currentValue) => {
    if (currentValue == letter) accumulator++;
    return accumulator;
}, 0);
Let's iterate through the array:

Initial accumulator value: 0.
First character: 'f' (not equal to 'o'), accumulator remains 0.
Second character: 'o' (equal to 'o'), accumulator becomes 1.
Third character: 'o' (equal to 'o'), accumulator becomes 2.
Fourth character: 'b' (not equal to 'o'), accumulator remains 2.
Fifth character: 'a' (not equal to 'o'), accumulator remains 2.
Sixth character: 'r' (not equal to 'o'), accumulator remains 2.
Final count value: 2.

Calculate the Percentage:

javascript
Copy code
return Math.floor((count / s.length) * 100);
count is 2.
s.length is 6.
Calculate (count / s.length) * 100:
javascript
Copy code
(2 / 6) * 100 = 33.3333...
Apply Math.floor to round down to the nearest integer:
javascript
Copy code
Math.floor(33.3333...) = 33
The function returns 33
 */

// ----using for loop-----------//
// var percentageLetter = function(s, letter) {
//     let count = 0;
//     for (let i of s) { // count how many letters are in s
//         if (i == letter) count++;
//     }
//     return (Math.floor((count*1.0) / (s.length*1.0) * 100)) // get percentage
// };

//--------------one liner----------------//
var percentageLetter = (s, letter) => Math.floor((s.length-s.replaceAll(letter ,"").length)*100/s.length)

let  s = "foobar", letter = "o"
let res = percentageLetter(s, letter);
console.log(res)
/**
 * Certainly! Let's break down the provided arrow function step by step to understand how it works:

```javascript
var percentageLetter = (s, letter) => Math.floor((s.length - s.replaceAll(letter, "").length) * 100 / s.length);
```

This function calculates the percentage of occurrences of a specific letter in a given string.

### Breakdown of the Function

1. **Parameters**:
   - `s`: The string in which to search for the letter.
   - `letter`: The letter to count in the string.

2. **`replaceAll` Method**:
   - `s.replaceAll(letter, "")`: This replaces all occurrences of `letter` in the string `s` with an empty string `""`.
   - For example, if `s = "foobar"` and `letter = "o"`, then `s.replaceAll("o", "")` would result in `"fbar"`.

3. **Calculate the Number of Occurrences**:
   - `s.length - s.replaceAll(letter, "").length`: This calculates the number of occurrences of `letter` in the string `s`.
     - `s.length` gives the length of the original string.
     - `s.replaceAll(letter, "").length` gives the length of the string after removing all occurrences of `letter`.
     - Subtracting the latter from the former gives the number of times `letter` appears in `s`.
   - Using the example, if `s = "foobar"` and `letter = "o"`, then:
     ```javascript
     "foobar".length = 6
     "fbar".length = 4
     6 - 4 = 2
     ```
     This indicates that "o" appears 2 times in "foobar".

4. **Calculate the Percentage**:
   - `(s.length - s.replaceAll(letter, "").length) * 100 / s.length`: This calculates the percentage of `letter` in the string.
     - Multiply the number of occurrences by 100.
     - Divide by the total length of the original string.
   - Continuing the example:
     ```javascript
     (2 * 100) / 6 = 33.3333...
     ```

5. **`Math.floor`**:
   - `Math.floor(...)`: This rounds down the result to the nearest integer.
   - In the example, `Math.floor(33.3333...)` results in `33`.

### Putting It All Together

- If `s = "foobar"` and `letter = "o"`, then the function works as follows:
  ```javascript
  var percentageLetter = (s, letter) => Math.floor((s.length - s.replaceAll(letter, "").length) * 100 / s.length);
  console.log(percentageLetter("foobar", "o")); // Output: 33
  ```

### Summary

The function calculates the percentage of occurrences of a specific letter in a given string by:
1. Removing all occurrences of the letter from the string.
2. Comparing the length of the original string to the length of the modified string to count the occurrences.
3. Calculating the percentage based on the number of occurrences and the total length of the string.
4. Rounding down the result to the nearest integer using `Math.floor`.

This approach efficiently calculates the desired percentage in a concise and readable manner.
 */

//Diffrence between function {} and ()
/**
 * In JavaScript, the difference between using `{}` and not using `{}` in a function (or an arrow function) lies in how the function's body and its return value are handled. Let's break down these differences in the context of your question.

### Function Body with `{}`

When you use `{}` after a function (or arrow function), it creates a block of statements. If you want to return a value from such a function, you need to explicitly use the `return` keyword.

Example:
```javascript
const add = (a, b) => {
    const result = a + b;
    return result;
};
console.log(add(2, 3)); // Output: 5
```

### Function Body without `{}`

When you don't use `{}` after an arrow function, the function will have an implicit return, meaning it will return the result of the single expression directly.

Example:
```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
```

### No Parentheses `()` or Braces `{}`

In some contexts, particularly with arrow functions used as callback functions, you might not see `{}`. In such cases, if the function body is a single expression, it will implicitly return that expression's value. Parentheses `()` can be used for grouping expressions, though they are not required if there's only one parameter without `{}`.

Example:
```javascript
const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
console.log(sumWithInitial); // Output: 10
```

In this example:
- The arrow function `(accumulator, currentValue) => accumulator + currentValue` has a single expression `accumulator + currentValue`.
- Since there are no `{}`, this function implicitly returns the result of `accumulator + currentValue`.

### When to Use Each

- **Use `{}` when you have multiple statements in the function body:**
  ```javascript
  const addAndLog = (a, b) => {
      console.log(a, b);
      return a + b;
  };
  ```

- **Omit `{}` for concise single-expression functions:**
  ```javascript
  const add = (a, b) => a + b;
  ```

### Example to Illustrate Differences

Consider the following examples using the `reduce` method:

**Example 1: With `{}` and Explicit `return`**
```javascript
const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, initialValue);
console.log(sumWithInitial); // Output: 10
```

**Example 2: Without `{}` (Implicit Return)**
```javascript
const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
console.log(sumWithInitial); // Output: 10
```

Both examples achieve the same result, but Example 2 is more concise.

### Summary

- **With `{}`**: Use when the function body contains multiple statements. Requires an explicit `return` to return a value.
- **Without `{}`**: Use for concise, single-expression functions. Implicitly returns the value of the expression.

This distinction helps in writing cleaner and more readable code, especially with arrow functions.
 */
/**
 * In JavaScript arrow functions, the use of `{}` (braces) and `()` (parentheses) after the arrow `=>` serves different purposes, especially concerning how values are returned.

### When to Use `{}`

- **Multiple Statements**: If the function body contains multiple statements, you need to use `{}` to define a block of code. You must explicitly use the `return` statement if you want to return a value.
  ```javascript
  const add = (a, b) => {
      const sum = a + b;
      return sum;
  };
  console.log(add(2, 3)); // Output: 5
  ```

- **No Implicit Return**: When using `{}`, the function does not implicitly return a value unless you explicitly use `return`.
  ```javascript
  const add = (a, b) => {
      return a + b;
  };
  console.log(add(2, 3)); // Output: 5
  ```

### When to Use `()`

- **Single Expression (Implicit Return)**: If the function body consists of a single expression, you can omit the `{}`. The value of that expression is implicitly returned.
  ```javascript
  const add = (a, b) => a + b;
  console.log(add(2, 3)); // Output: 5
  ```

- **Returning Object Literals**: If you need to return an object literal, you must wrap the object in parentheses to avoid confusion with the function body block.
  ```javascript
  const getUser = (name, age) => ({ name: name, age: age });
  console.log(getUser('Alice', 25)); // Output: { name: 'Alice', age: 25 }
  ```

### Example: Using `{}` vs `()`

1. **With `{}` (Multiple Statements and Explicit Return)**:
   ```javascript
   const addAndLog = (a, b) => {
       const sum = a + b;
       console.log(sum);
       return sum;
   };
   console.log(addAndLog(2, 3)); // Logs 5 and Output: 5
   ```

2. **With `()` (Single Expression and Implicit Return)**:
   ```javascript
   const add = (a, b) => a + b;
   console.log(add(2, 3)); // Output: 5
   ```

3. **Returning Object Literals**:
   ```javascript
   const getObject = () => ({ key: 'value' });
   console.log(getObject()); // Output: { key: 'value' }
   ```

### Summary

- **Use `{}`**: When the function body contains multiple statements. You need to use an explicit `return` statement to return a value.
  ```javascript
  const add = (a, b) => {
      const result = a + b;
      return result;
  };
  ```

- **Use `()`**: When the function body is a single expression. The expression's result is implicitly returned.
  ```javascript
  const add = (a, b) => a + b;
  ```

- **Returning Object Literals**: Wrap the object in parentheses to avoid syntax errors and to ensure the object is returned correctly.
  ```javascript
  const getObject = () => ({ key: 'value' });
  ```

These distinctions help you write clearer, more concise, and more readable arrow functions in JavaScript.
 */