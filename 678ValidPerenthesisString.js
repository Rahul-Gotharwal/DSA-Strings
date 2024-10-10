// function checkValidStringRecursive(s) {
//   function check(s, index, count) {
//     //When the end of the string is reached (index === s.length), the function checks if count is zero to determine if the string is valid.
//     if (index === s.length) {
//     return  count === 0;
    
//     }
//     // if count go to the -1
//     if (count < 0) {
//       return false;
//     }
//     if (s[index] === "(") {
//       return check(s, index + 1, count + 1);
//     } else if (s[index] === ")") {
//       return check(s, index + 1, count - 1);
//     } else {
//       // thats why at last ')' pera in this example'(((*)" , not going into the else it is checked into the else if
//       //The else block specifically handles the '*' character by trying all three possible interpretations.
//       // This will handle the '*' case
//       // every pera after the * checked under the else if condtions no metter it is '(' ')'
//       return (
//         check(s, index + 1, count + 1) || // '*' treated as '('
//         check(s, index + 1, count - 1) || // '*' treated as ')'
//         check(s, index + 1, count)// '*' treated as ''
//       ); 
//     }
//   }
//   return check(s, 0, 0);
// }

// console.log(checkValidStringRecursive("(*)")); // true
// console.log(checkValidStringRecursive("(*))")); // true
// console.log(checkValidStringRecursive("(((*)")); // false
// tree for true condition 
/**
 * check(s, 0, 0) // Initial call
|
|-- check(s, 1, 1) // '(' at index 0
    |
    |-- check(s, 2, 2) // '*' at index 1, replacing '*' with '('
    |    |
    |    |-- check(s, 3, 1) // ')' at index 2
    |    |    |
    |    |    |-- check(s, 4, 0) // ')' at index 3
    |    |         - index === s.length, count = 0, returns true
    |
    |-- check(s, 2, 0) // '*' at index 1, replacing '*' with ')'
    |    |
    |    |-- check(s, 3, -1) // ')' at index 2
    |         - count < 0, returns false
    |
    |-- check(s, 2, 1) // '*' at index 1, replacing '*' with ''
         |
         |-- check(s, 3, 0) // ')' at index 2
         |    |
         |    |-- check(s, 4, -1) // ')' at index 3
         |         - count < 0, returns false

 */
// Check copy for recursion tree
// tree for false condition
/**
 * 
 * check(s, 0, 0) // Initial call
|
|-- check(s, 1, 1) // '(' at index 0
    |
    |-- check(s, 2, 2) // '(' at index 1
        |
        |-- check(s, 3, 3) // '(' at index 2
            |
            |-- check(s, 4, 4) // '*' at index 3, replacing '*' with '('
            |    |
            |    |-- check(s, 5, 3) // ')' at index 4
            |         - index === s.length, count = 3, returns false
            |
            |-- check(s, 4, 2) // '*' at index 3, replacing '*' with ')'
            |    |
            |    |-- check(s, 5, 1) // ')' at index 4
            |         - index === s.length, count = 1, returns false
            |
            |-- check(s, 4, 3) // '*' at index 3, replacing '*' with ''
                 |
                 |-- check(s, 5, 2) // ')' at index 4
                      - index === s.length, count = 2, returns false

 */

 //------ OPtiaml Solution BUT some test case are not pass with it  --------//
 function checkValidStringGreedy(s) {
    let minCount = 0;
    let maxCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            minCount++;
            maxCount++;
        } else if (s[i] === ')') {
            minCount--;
            maxCount--;
        } else {
            minCount--;
            maxCount++;
        }
        // If maxCount is negative, it means there are more ')' than we can balance
        if (maxCount < 0) {
            return false;
        }
        // Ensure minCount doesn't drop below 0
        if (minCount < 0) {
            minCount = 0;
        }
    }
    // If minCount is 0, it means all '(' can be balanced
    return minCount === 0;
}

// Test cases
console.log(checkValidStringGreedy("(*)")); // true
console.log(checkValidStringGreedy("(*))")); // true
console.log(checkValidStringGreedy("(((*)")); // false

// Edge case
console.log(checkValidStringGreedy("(((((()*)(*)*))())())(()())())))((**)))))(()())()")); // false
