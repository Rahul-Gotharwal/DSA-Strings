// ------------Chat-Gpt solution----------------//
// function removeDigit(number, digit) {
//     let maxValue = "";
//     for (let i = 0; i < number.length; i++) {
//         if (number[i] === digit) {
//             let newNumber = number.slice(0, i) + number.slice(i + 1);
//             if (newNumber > maxValue) {
//                 maxValue = newNumber;
//             }
//         }
//     }

//     return maxValue;
// }

// // Test cases
// console.log(removeDigit("123", "3"));  // Output: "12"
// console.log(removeDigit("1231", "1")); // Output: "231"
/**
 * number.slice(0, 0) results in "" because the slice method extracts a section of the string starting from the index 0 and ending at the index 0 (exclusive). Since the start and end indices are the same, no characters are included in the slice, resulting in an empty string
 * number.slice(0, 3) takes the substring from index 0 to index 2 (inclusive of 0, exclusive of 3), resulting in "123".
number.slice(4) takes the substring starting from index 4 to the end of the string.
Dry Run of Simplified Version with number = "12311" and digit = "1":
Initial State:

number = "12311"
digit = "1"
maxNumber = ""
Iteration 1 (ind = 0):

number[0] = "1" (matches digit)
newNumber = number.slice(0, 0) + number.slice(1) = "" + "2311" = "2311"
newNumber ("2311") > maxNumber (""): True
Update maxNumber = "2311"
Iteration 2 (ind = 1):

number[1] = "2" (does not match digit)
Skip to next iteration
Iteration 3 (ind = 2):

number[2] = "3" (does not match digit)
Skip to next iteration
Iteration 4 (ind = 3):

number[3] = "1" (matches digit)
newNumber = number.slice(0, 3) + number.slice(4) = "123" + "1" = "1231"
newNumber ("1231") > maxNumber ("2311"): False
maxNumber remains "2311"
Iteration 5 (ind = 4):

number[4] = "1" (matches digit)
newNumber = number.slice(0, 4) + number.slice(5) = "1231" + "" = "1231"
newNumber ("1231") > maxNumber ("2311"): False
maxNumber remains "2311"
Final State:
maxNumber = "2311"
Conclusion:
The function will return "2311".
 */
//-------------Leetcode solution------------------//
/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
    let largestNum = "";  // 
  
    for (let ind = 0; ind < number.length; ind++) {
      if (number[ind] === digit) {
        // Create a new number string without the digit at index ind
        const numString = number.substring(0, ind) + number.substring(ind + 1);
        const num = numString; // Convert the new number string to BigInt
        if (num > largestNum) largestNum = num; // Update largestNum if the new number is greater
      }
    }
  
    return largestNum.toString(); // Convert the largest number back to string
  };
  
  // Test case
  console.log(removeDigit("12311", "1"));  // Output: "2311"
  