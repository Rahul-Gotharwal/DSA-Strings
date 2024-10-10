// var removeOuterParentheses = function(S) {
//     let parenthesCount = 0;  // Counter to track the balance of parentheses
//     let result = "";         // String to store the result without outermost parentheses
    
//     for (const letter of S) {  // Iterate through each character in the input string
//         if (letter === "(") {
//             // because we want to remove the first outer  "(" so thats why in first iteration is falied and the count only increase by one
//             if (parenthesCount > 0) {  // If the counter is not zero, this is not an outer parenthesis
//                 result += letter;  // Add it to the result
//             }
//             parenthesCount++;  // Increment the counter
//         } else {  // If the current character is a closing parenthesis
//             parenthesCount--;  // Decrement the counter
//             if (parenthesCount > 0) {  // If the counter is not zero, this is not an outer parenthesis
//                 result += letter;  // Add it to the result
//             }
//         }
//     }
    
//     return result;  // Return the final result
// };

// let S = "(()())(())";
// let result = removeOuterParentheses(S)
// console.log(result)
/*
Initialization:

parenthesCount: A counter to keep track of the balance of parentheses.
result: A string to build the final result.
Iteration through String:

For each character in the input string 
𝑆
S:
If the character is an opening parenthesis (:
If the counter parenthesCount is greater than 0, it means this parenthesis is not an outer parenthesis, so add it to result.
Increment the parenthesCount.
If the character is a closing parenthesis ):
Decrement the parenthesCount.
If the counter parenthesCount is greater than 0, it means this parenthesis is not an outer parenthesis, so add it to result.
Return the Result:

After iterating through all characters, return the result string which now contains the input string 
𝑆
S with the outermost parentheses of each primitive valid parentheses string removed.
How It Works with Examples
Let's step through the first example, 
S="(()())(())":
Start with parenthesCount = 0 and result = "".
Process the string character by character:
(: parenthesCount becomes 1, no change to result.
(: parenthesCount becomes 2, result becomes "(".
): parenthesCount becomes 1, result becomes "()".
(: parenthesCount becomes 2, result becomes "()(".
): parenthesCount becomes 1, result becomes "()()". 
): parenthesCount becomes 0, no change to result.
(: parenthesCount becomes 1, no change to result.
(: parenthesCount becomes 2, result becomes "()()(".
): parenthesCount becomes 1, result becomes "()()()".
): parenthesCount becomes 0, no change to result.
Final result is "()()()", which is the expected output.
*/

// -----------------Using Stack-----------------//
var removeOuterParentheses = function(S) {
    let stack = [];  // Stack to track parentheses
    let result = ""; // String to store the result without outermost parentheses
    
    for (const letter of S) {  // Iterate through each character in the input string
        if (letter === "(") {  // If the current character is an opening parenthesis
            if (stack.length > 0) {  // If the stack is not empty, this is not an outer parenthesis
                result += letter;  // Add it to the result
            }
            stack.push(letter);  // Push the opening parenthesis onto the stack
        } else {  // If the current character is a closing parenthesis
            stack.pop();  // Pop an element from the stack
            if (stack.length > 0) {  // If the stack is not empty after popping, this is not an outer parenthesis
                result += letter;  // Add it to the result
            }
        }
    }
    
    return result;  // Return the final result
};

/**
 * Sure! Let's do a dry run of the code using the input string `(()())(())` and explain each step in detail, especially focusing on the stack operations.

### Code
```javascript 
### Dry Run with Input `(()())(())`

1. **Initialization**:
   - `stack = []`
   - `result = ""`

2. **Iteration through String**:

   - **First Character**: `(`
     - `stack = []`
     - `result = ""`
     - `letter = "("`
     - Stack is empty, so we do not add `(` to `result`.
     - Push `(` onto the stack: `stack = ["("]`
   
   - **Second Character**: `(`
     - `stack = ["("]`
     - `result = ""`
     - `letter = "("`
     - Stack is not empty, so add `(` to `result`: `result = "("`
     - Push `(` onto the stack: `stack = ["(", "("]`
   
   - **Third Character**: `)`
     - `stack = ["(", "("]`
     - `result = "("`
     - `letter = ")"`
     - Pop from the stack: `stack = ["("]`
     - Stack is not empty after popping, so add `)` to `result`: `result = "()"`

   - **Fourth Character**: `(`
     - `stack = ["("]`
     - `result = "()"` 
     - `letter = "("`
     - Stack is not empty, so add `(` to `result`: `result = "()("`
     - Push `(` onto the stack: `stack = ["(", "("]`

   - **Fifth Character**: `)`
     - `stack = ["(", "("]`
     - `result = "()("`
     - `letter = ")"`
     - Pop from the stack: `stack = ["("]`
     - Stack is not empty after popping, so add `)` to `result`: `result = "()()"`
   
   - **Sixth Character**: `)`
     - `stack = ["("]`
     - `result = "()()"`
     - `letter = ")"`
     - Pop from the stack: `stack = []`
     - Stack is empty after popping, so do not add `)` to `result`.

   - **Seventh Character**: `(`
     - `stack = []`
     - `result = "()()"`
     - `letter = "("`
     - Stack is empty, so do not add `(` to `result`.
     - Push `(` onto the stack: `stack = ["("]`

   - **Eighth Character**: `(`
     - `stack = ["("]`
     - `result = "()()"`
     - `letter = "("`
     - Stack is not empty, so add `(` to `result`: `result = "()()("`
     - Push `(` onto the stack: `stack = ["(", "("]`

   - **Ninth Character**: `)`
     - `stack = ["(", "("]`
     - `result = "()()("`
     - `letter = ")"`
     - Pop from the stack: `stack = ["("]`
     - Stack is not empty after popping, so add `)` to `result`: `result = "()()()"`
   
   - **Tenth Character**: `)`
     - `stack = ["("]`
     - `result = "()()()"`
     - `letter = ")"`
     - Pop from the stack: `stack = []`
     - Stack is empty after popping, so do not add `)` to `result`.

### Final State
- `stack = []`
- `result = "()()()"`
- Return `result`

### Explanation of Pop Operations
- Whenever we encounter a closing parenthesis `)`, we pop an element from the stack.
- This pop operation removes the matching opening parenthesis `(` from the stack.
- We only add the closing parenthesis `)` to `result` if the stack is not empty after the pop, meaning that it is not an outer closing parenthesis.

By using the stack to keep track of the balance of parentheses, we can easily identify and remove the outermost parentheses from each primitive valid parentheses string. This approach ensures that we only add the inner parentheses to the result, effectively achieving the desired transformation.
 */