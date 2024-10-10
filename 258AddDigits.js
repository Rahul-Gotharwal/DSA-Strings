// the answer is based on the digital root
/**
 * The digital root of a number is the single-digit value obtained by an iterative process of summing digits until a single digit is obtained.
 */
// the digital root of every number can be find by the modulo of 9
//----------------------Optimal solution---------------//
// var addDigits = function(num) {
//  
//     if(num===0 ){
//         return  0 ;
//     }
//     else if(num % 9 == 0){
//     return 9
//     }
//     else{
//         return num%9
//     }
// };

// let num = 197;
// let result = console.log(addDigits(num))

//--------------------  Copy's solution---------------//

// var addDigits = function (num) {
//   // Repeat the process until num becomes a single digit
//   while (num >= 10) {
//     let sum = 0;
//     while (num > 0) { // it extracts and add sum untill the num>0
//       sum += num % 10; // Add the last digit to sum => 7
//       num = Math.floor(num / 10); // Remove the last digit => 19
//     }
//     num = sum; // Set num to the sum of its digits
//   }
//   return num; // Return the single digit result
// };
// let num = 197;
// let result = console.log(addDigits(num))
/**
 * Significance of the Inner While Loop
Digit Extraction: The inner while loop extracts each digit of the number by using the modulo operation (num % 10) and then removes the last digit using integer division (Math.floor(num / 10)).
Summing Digits: It sums these extracted digits to form a new number.
Iterative Process: The process continues until all digits are summed, resulting in a single sum of digits for each iteration of the outer loop.
 */
/**
 * Initial value:

num = 197
Since num >= 10, enter the outer while loop.
Inner Loop:

Initialize sum = 0.
First pass of the inner loop:

num = 197
sum += num % 10 ⟶ sum += 197 % 10 ⟶ sum += 7 ⟶ sum = 7
num = Math.floor(num / 10) ⟶ num = Math.floor(197 / 10) ⟶ num = 19
Second pass of the inner loop:

num = 19
sum += num % 10 ⟶ sum += 19 % 10 ⟶ sum += 9 ⟶ sum = 7 + 9 ⟶ sum = 16
num = Math.floor(num / 10) ⟶ num = Math.floor(19 / 10) ⟶ num = 1
Third pass of the inner loop:

num = 1
sum += num % 10 ⟶ sum += 1 % 10 ⟶ sum += 1 ⟶ sum = 16 + 1 ⟶ sum = 17
num = Math.floor(num / 10) ⟶ num = Math.floor(1 / 10) ⟶ num = 0
End of inner loop:

num = 0, exit inner while loop.
Assign num = sum ⟶ num = 17
Second Iteration
Check outer loop condition:

num = 17
Since num >= 10, enter the outer while loop.
Inner Loop:

Initialize sum = 0.
First pass of the inner loop:

num = 17
sum += num % 10 ⟶ sum += 17 % 10 ⟶ sum += 7 ⟶ sum = 7
num = Math.floor(num / 10) ⟶ num = Math.floor(17 / 10) ⟶ num = 1
Second pass of the inner loop:

num = 1
sum += num % 10 ⟶ sum += 1 % 10 ⟶ sum += 1 ⟶ sum = 7 + 1 ⟶ sum = 8
num = Math.floor(num / 10) ⟶ num = Math.floor(1 / 10) ⟶ num = 0
End of inner loop:

num = 0, exit inner while loop.
Assign num = sum ⟶ num = 8
End of the Process
num = 8
Since num < 10, exit the outer while loop.
Final Output:

Return num = 8
 */

// --------------Convert Into String-----------------//
 
  var addDigits = function(num) {
      while (num >= 10) {
          let sum = 0;
          // Convert num to a string, split into characters, convert each to a number, and sum them
          for (const digit of num.toString()) {
              sum += parseInt(digit);
          }
          num = sum;
      }
      return num;
  }

let num = 197;
let result = console.log(addDigits(num))

/**
 * 
Dry Run with Corrected Approach
For num = 197:

Initial value:

num = 197
Since num >= 10, enter the while loop.
First iteration:

Convert num to string: "197"
Sum digits: 1 + 9 + 7 = 17
Set num = 17
Second iteration:

Convert num to string: "17"
Sum digits: 1 + 7 = 8
Set num = 8
End:

num = 8, exit the while loop and return 8.
 */