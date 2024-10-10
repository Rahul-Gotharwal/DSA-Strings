// /**
//  * @param {string} s
//  * @param {number} k
//  * @param {character} fill
//  * @return {string[]}
//  */
// var divideString = function (s, k, fill) {
//   const res = []; // Result array to hold the substrings
//   let temp = ""; // Temporary string to build the substrings
//   let len = 0; // Variable to store the adjusted length of the string
//   if (s.length % k === 0) {
//     len = s.length;
//   } else {
//     len = s.length + k - (s.length % k);
//   }
//   // length can be taken from any like from if or else according to the input here it takes from else
//   for (let i = 0; i < len; i++) {
//     temp += s[i] || fill; // If s[i] is undefined (out of bounds means 12), use fill
//     // at last iteration after j it is not find the character so it will undefind then at undefind it will add fill
//     if (temp.length === k) {
//       res.push(temp);
//       temp = ""; // temp reset again after push the value to the array values are 'abc' in first iteration
//     }
//   }
//   return res;
// };

// let s = "abcdefghij";
// let k = 3;
// let fill = "x";
// const result = console.log(divideString(s, k, fill));
/**
  * i = 0, temp = 'a'  // s[0] = 'a'
i = 1, temp = 'ab' // s[1] = 'b'
i = 2, temp = 'abc'// s[2] = 'c', temp.length === k
res.push('abc')    // res = ['abc']
temp = ''

  * i = 9, temp = 'j'  // s[9] = 'j'
i = 10, temp = 'jx'// s[10] = undefined, use fill = 'x'
i = 11, temp = 'jxx'// s[11] = undefined, use fill = 'x', temp.length === k
res.push('jxx')    // res = ['abc', 'def', 'ghi', 'jxx']
temp = ''

  */

// -------another appraoch that direcly builds the substring of length k ---//


var divideString = function(s, k, fill) {
    const res = []; // Result array to hold the substrings

    // Iterate over the string in steps of k
    for (let i = 0; i < s.length; i += k) {
        // i+=k means  i = i+k 
        // Get the substring of length 
        let substr = s.slice(i, i + k);

        // If the substring is shorter than k, pad it with the fill character
        while (substr.length < k) {
            substr += fill;
        }

      // Push the substring to the result array
        res.push(substr);
    }

    return res;
};

let s = "abcdefghij";
let k = 3;
let fill = 'x';
const result = divideString(s, k, fill);
console.log(result);  // Output: ['abc', 'def', 'ghi', 'jxx']
/**
 * First Iteration (i = 0):

Extract substring: substr = s.slice(0, 3) = "abc"
substr.length is 3, no padding needed.
Add to result: res = ["abc"]
Second Iteration (i = 3):

Extract substring: substr = s.slice(3, 6) = "def"
substr.length is 3, no padding needed.
Add to result: res = ["abc", "def"]
Third Iteration (i = 6):

Extract substring: substr = s.slice(6, 9) = "ghi"
substr.length is 3, no padding needed.
Add to result: res = ["abc", "def", "ghi"]
Fourth Iteration (i = 9):

Extract substring: substr = s.slice(9, 12) = "j"
substr.length is 1, padding needed: substr = "jxx"
Add to result: res = ["abc", "def", "ghi", "jxx"]
 */
