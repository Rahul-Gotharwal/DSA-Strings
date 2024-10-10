// //No need to create the helper function of rabin karp that is provide the hash funtion and als ono need to implement the isequal function
// //NOTE- read rabin karp algo at geeks for geeks web =>https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/
// function repeatedStringMatch(a, b) {
// let repeated = a ; // a is 'abcd' or b is 'cdabcdab'
// let count = 1 ;
//  // Repeat 'a' until its length is at least the length of 'b'
//  while(repeated.length < b.length){
//     repeated+=a;
//     count++;
//  }
//   // Check if 'b' is a substring of the repeated 'a'
//   if (repeated.includes(b)) return count;
// // Check one more repetition in case 'b' starts towards the end of 'a'
// repeated += a;
// count++;
// if (repeated.includes(b)) return count;

// return -1;

// }
// console.log(repeatedStringMatch("abcd", "cdabcdab")); // Output: 3

// // Example 2:
// console.log(repeatedStringMatch("a", "aa")); // Output: 2
// // counstrunction of string repeted
/**
 * Dry Run of Example 1: a = "abcd", b = "cdabcdab"
Initialization:

a = "abcd"
b = "cdabcdab"
repeated = "abcd"
count = 1
First Loop:

repeated.length = 4 which is less than b.length = 8
Append a to repeated: repeated = "abcdabcd"
Increment count: count = 2
Now, repeated.length = 8 which is equal to b.length = 8
Exit the loop
Check for Substring:

Check if b is a substring of repeated: "abcdabcd".includes("cdabcdab") returns false
Extra Repetition:

Append a to repeated again: repeated = "abcdabcdabcd"
Increment count: count = 3
Check if b is a substring of repeated: "abcdabcdabcd".includes("cdabcdab") returns true
Return Result:

Since b is found as a substring, the function returns 3.
 */
/**
 * Initial Setup:

a = "abcd"
b = "cdabcdab"
repeated = "abcd"
count = 1
First Loop:

repeated.length = 4 which is less than b.length = 8
repeated += "abcd" -> repeated = "abcdabcd"
count = 2
repeated.length = 8 which is equal to b.length = 8
Exit the loop
Check for Substring:

repeated.includes(b) -> "abcdabcd".includes("cdabcdab") returns false
Extra Repetition:

repeated += "abcd" -> repeated = "abcdabcdabcd"
count = 3
repeated.includes(b) -> "abcdabcdabcd".includes("cdabcdab") returns true
Return Result:

Since b is now a substring of the repeated a, the function returns 3
 */

// --------------------Leetcode solution --------------------//
const repeatedStringMatch = (A, B) => {
  const count = Math.ceil(B.length / A.length);
  /**Math.ceil is a mathematical function that rounds a number up to the nearest integer. For example, Math.ceil(2.3) returns 3 */
  // this repeat the string A by the number of counts that is 2 in this case
  const str = A.repeat(count);
  // agar str that is now 'abcdabcd' is includes the string B or not , here it is not include , if it is include then we retrun the count 
  // but here it is not include so again do the one more repetation by adding manually (str+A) that is 'abcdabcdabcd' and check that it is includes B or not , yes it is includes so return the count by +1 that is 3 
  return str.includes(B) ? count : (str + A).includes(B) ? count + 1 : -1;
};
console.log(repeatedStringMatch("abcd", "cdabcdab")); // Output: 3
// Example 2:
console.log(repeatedStringMatch("a", "aa")); // Output: 2
