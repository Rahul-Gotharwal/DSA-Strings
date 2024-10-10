// //---------------Using hash table or Copy's Solution ---------------//
// var romanToInteger = function(s){
//     const sym = {
//         // This is the hashtable
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000
//     }
//     let result = 0 ;
//     for(let i= 0 ;i<s.length ; i++){
//         //console.log(sym)
//         //console.log(sym[s[i]])
//         const curr = sym[s[i]];
//         const next = sym[s[i+1]]
//         if(curr<next){
//             result+=next-curr
//             //result= result+next-curr;
//             i++
//         }
//         else{
//             result+=curr
//         }
//     }
//     return result
// }
// let s = 'LVIII';
// let result = romanToInteger(s);
// console.log(result)

/**
 * Sure, let's perform a dry run of the code with the input `s = 'LVIII'` to understand how it works step by step.

### Initial Setup:
1. Define the `sym` hash table with the Roman numeral mappings.
2. Initialize `result` to 0.

### Iteration through the String `s`:
The string `s` is `'LVIII'`.

1. **First Iteration (`i = 0`):**
   - `s[i] = 'L'`, so `curr = sym['L'] = 50`
   - `s[i+1] = 'V'`, so `next = sym['V'] = 5`
   - Since `curr (50) >= next (5)`, add `curr` to `result`: `result = 0 + 50 = 50`
   - `i` is incremented by 1, so `i = 1`

2. **Second Iteration (`i = 1`):**
   - `s[i] = 'V'`, so `curr = sym['V'] = 5`
   - `s[i+1] = 'I'`, so `next = sym['I'] = 1`
   - Since `curr (5) >= next (1)`, add `curr` to `result`: `result = 50 + 5 = 55`
   - `i` is incremented by 1, so `i = 2`

3. **Third Iteration (`i = 2`):**
   - `s[i] = 'I'`, so `curr = sym['I'] = 1`
   - `s[i+1] = 'I'`, so `next = sym['I'] = 1`
   - Since `curr (1) >= next (1)`, add `curr` to `result`: `result = 55 + 1 = 56`
   - `i` is incremented by 1, so `i = 3`

4. **Fourth Iteration (`i = 3`):**
   - `s[i] = 'I'`, so `curr = sym['I'] = 1`
   - `s[i+1] = 'I'`, so `next = sym['I'] = 1`
   - Since `curr (1) >= next (1)`, add `curr` to `result`: `result = 56 + 1 = 57`
   - `i` is incremented by 1, so `i = 4`

5. **Fifth Iteration (`i = 4`):**
   - `s[i] = 'I'`, so `curr = sym['I'] = 1`
   - `s[i+1]` is `undefined` since we are at the end of the string.
   - Since `next` is `undefined`, the condition `curr < next` is false.
   - Add `curr` to `result`: `result = 57 + 1 = 58`
   - `i` is incremented by 1, so `i = 5`

### End of Loop:
- `i` is now equal to the length of `s` (which is 5), so the loop terminates.

### Final Result:
- The `result` after processing all characters in `s` is 58.

### Output:
- `console.log(result)` outputs `58`.

The function `romanToInteger('LVIII')` correctly converts the Roman numeral `LVIII` to the integer `58`.
 */

//------------------LeetCode's solution-------------------//
// var romanToInt = function(s) {
//     const romanValues = {
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000
//     };

//     let result = 0;

//     for (let i = s.length - 1; i >= 0; i--) {
//         const currValue = romanValues[s[i]];

//         if (i < s.length - 1 && currValue < romanValues[s[i + 1]]) {
//             result -= currValue;
//         } else {
//             result += currValue;
//         }
//     }

//     return result;
// };
// let s = 'LMIII';
// let result = romanToInt(s);
// console.log(result)

