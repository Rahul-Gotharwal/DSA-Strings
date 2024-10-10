
// //--ChatGpt solution ---------------//
// function sumOfBeauties(s) {
//     let sumBeauty = 0;
//     const n = s.length;

//     for (let start = 0; start < n; start++) {
//         // Frequency array for characters 'a' to 'z'
//         const count = new Array(26).fill(0);

//         for (let end = start; end < n; end++) {
//             const charIndex = s.charCodeAt(end) - 'a'.charCodeAt(0);
//             count[charIndex]++;
//             /**
//              * s.charCodeAt(0) - 'a'.charCodeAt(0) gives 97 - 97 = 0 (index for 'a')
//              * count increases at index 0 to 1 
//              */
//             let maxFreq = 0, minFreq = Infinity;
            
//             // Calculate max and min frequency in current substring
//             for (let i = 0; i < 26; i++) {
//                 if (count[i] > 0) {
//                     maxFreq = Math.max(maxFreq, count[i]);
//                     minFreq = Math.min(minFreq, count[i]);
//                 }
//             }
            
//             // Add beauty of current substring to the sum
//             sumBeauty += (maxFreq - minFreq);
//         }
//     }
    
//     return sumBeauty;
// }

// // Example usage:
// console.log(sumOfBeauties("aabcb")); // Output: 5

/**
 * Certainly! Let's do a dry run for the string `"aabcb"` using the approach described in the `sumOfBeauties` function. We'll outline how the function processes each substring and calculates the beauty.

### Dry Run for "aabcb"

1. **Outer Loop (`start` = 0):**

   - **Inner Loop (`end` = 0 to 4):**
     - Substring `"a"`
       - Frequency count: `count = [1, 0, 0, ..., 0]` (for character 'a')
       - Calculate beauty: `(1 - 1) = 0`
       - Increment `sumBeauty` by 0.
     
     - Substring `"aa"`
       - Frequency count: `count = [2, 0, 0, ..., 0]` (for characters 'a')
       - Calculate beauty: `(2 - 1) = 1`
       - Increment `sumBeauty` by 1.
     
     - Substring `"aab"`
       - Frequency count: `count = [2, 1, 0, ..., 0]` (for characters 'a' and 'b')
       - Calculate beauty: `(2 - 1) = 1`
       - Increment `sumBeauty` by 1.
     
     - Substring `"aabc"`
       - Frequency count: `count = [2, 1, 1, 0, ..., 0]` (for characters 'a', 'b', and 'c')
       - Calculate beauty: `(2 - 1) = 1`
       - Increment `sumBeauty` by 1.
     
     - Substring `"aabcb"`
       - Frequency count: `count = [2, 2, 1, 0, 0, ..., 0]` (for characters 'a', 'b', and 'c')
       - Calculate beauty: `(2 - 1) = 1`
       - Increment `sumBeauty` by 1.

2. **Final Calculation:**
   - After processing all substrings, `sumBeauty` will contain the total sum of beauties for all valid substrings.
   - For `"aabcb"`, the sum of beauties is `0 + 1 + 1 + 1 + 1 = 4`.

### Conclusion

This dry run demonstrates how the `sumOfBeauties` function processes each substring of the input string `"aabcb"`, calculates the beauty based on the frequency of characters, and accumulates the total sum of beauties. This approach efficiently computes the required result using nested loops and character frequency counting.
 */

// Leetcode solution 
var beautySum = function (s) {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        let map = new Map();

        for (let j = i; j < s.length; j++) {
            let curr = s[j];
            map.set(curr, (map.get(curr) || 0) + 1);

            let max = 0, min = Infinity;
            for (let val of map.values()) {
                max = Math.max(max, val);
                min = Math.min(min, val);
            }
            
            count += Math.max(0, max - min);
        }
    }

    return count;
};
/**
 * nitial Setup:

s = "aabcb"
Initialize count = 0.
Outer Loop (i loop):

Start with i = 0.
Consider substrings starting from index 0.
Inner Loop (j loop):

For i = 0, start with j = 0 to j = 4.

At each iteration, update map with the current character and its frequency.

Calculate max and min frequencies in the current substring.

Add Math.max(0, max - min) to count for the beauty of the substring.

Iterations:

For i = 0, j = 0 to 4:
Substrings: "a", "aa", "aab", "aabc", "aabcb"
Frequencies: map updates as substrings extend.
Beauty calculations for each substring are added to count.
Final Calculation:

After processing all substrings, count contains the total sum of beauties.
 */