//Brute Force Approach
// function lengthOfLongestSubstringKDistinctBruteforce(s, k) {
//     let maxLength = 0 ;
//     for(let i =0 ; i<s.length ; i++){
//         for(let j =0 ; j<s.length ; j++){
//             let substr = s.substring(i,j+1);
//             //Set objects are collections of values. A value in the set may only occur once; it is unique in the set's collection. You can iterate through the elements of a set in insertion order
//           //new Set(substr).size The size property returns the number of elements in a set. 
//           // at the j =3 means at ece the index-3 e is not count , because set only have the unique values
//             let distinctChars = new Set(substr).size
//             if(distinctChars<=k){
//                 maxLength = Math.max(maxLength , substr.length)
//             }
//         }
//     }
//     return maxLength
// }
// console.log(lengthOfLongestSubstringKDistinctBruteforce("eceba", 2)); // ece give the number of 2 distinct char 
/**
### Dry Run

**Input**: "eceba", `k = 2`

1. Initialize `maxLength` to 0.

2. Outer loop (`i` from 0 to 4):
    - **i = 0**:
        - Inner loop (`j` from 0 to 4):
            - **j = 0**:
                - `substr = "e"`
                - `distinctChars = 1`
                - `maxLength = Math.max(0, 1) = 1`
            - **j = 1**:
                - `substr = "ec"`
                - `distinctChars = 2`
                - `maxLength = Math.max(1, 2) = 2`
            - **j = 2**:
                - `substr = "ece"`
                - `distinctChars = 2`
                - `maxLength = Math.max(2, 3) = 3`
            - **j = 3**:
                - `substr = "eceb"`
                - `distinctChars = 3` (more than 2, so skip)
            - **j = 4**:
                - `substr = "eceba"`
                - `distinctChars = 4` (more than 2, so skip)
    - **i = 1**:
        - Inner loop (`j` from 1 to 4):
            - **j = 1**:
                - `substr = "c"`
                - `distinctChars = 1`
                - `maxLength = Math.max(3, 1) = 3`
            - **j = 2**:
                - `substr = "ce"`
                - `distinctChars = 2`
                - `maxLength = Math.max(3, 2) = 3`
            - **j = 3**:
                - `substr = "ceb"`
                - `distinctChars = 3` (more than 2, so skip)
            - **j = 4**:
                - `substr = "ceba"`
                - `distinctChars = 4` (more than 2, so skip)
    - **i = 2**:
        - Inner loop (`j` from 2 to 4):
            - **j = 2**:
                - `substr = "e"`
                - `distinctChars = 1`
                - `maxLength = Math.max(3, 1) = 3`
            - **j = 3**:
                - `substr = "eb"`
                - `distinctChars = 2`
                - `maxLength = Math.max(3, 2) = 3`
            - **j = 4**:
                - `substr = "eba"`
                - `distinctChars = 3` (more than 2, so skip)
    - **i = 3**:
        - Inner loop (`j` from 3 to 4):
            - **j = 3**:
                - `substr = "b"`
                - `distinctChars = 1`
                - `maxLength = Math.max(3, 1) = 3`
            - **j = 4**:
                - `substr = "ba"`
                - `distinctChars = 2`
                - `maxLength = Math.max(3, 2) = 3`
    - **i = 4**:
        - Inner loop (`j` from 4 to 4):
            - **j = 4**:
                - `substr = "a"`
                - `distinctChars = 1`
                - `maxLength = Math.max(3, 1) = 3`

### Result

After iterating through all possible substrings, the longest substring with at most 2 distinct characters is "ece", with a length of 3. Therefore, the function correctly returns 3.
 */

//------------------OPtimized way  or Two ponter approach or sliding window approach---------------//
function lengthOfLongestSubstringKDistinct(s, k) {
    let n = s.length;
    if (n * k == 0) return 0;

    let left = 0, right = 0;
    let maxLength = 0;
    let charMap = new Map();

    while (right < n) {
        charMap.set(s[right], (charMap.get(s[right]) || 0) + 1);
        right++;

        while (charMap.size > k) {
            charMap.set(s[left], charMap.get(s[left]) - 1);
            //charMap = {'e': 1, 'c': 1, 'b': 1} e is 1 so not equal to zero , no execuation of if , and left eill become 1 
            if (charMap.get(s[left]) === 0) {
                charMap.delete(s[left]);
            }
            left++;
        }

        maxLength = Math.max(maxLength, right - left);
    }

    return maxLength;
}

// // Example usage:
// console.log(lengthOfLongestSubstringKDistinct("eceba", 2)); // Output: 3

/**

### Dry Run

**Input**: "eceba", `k = 2`

1. **Initialization**:
    - `n = 5` (length of string)
    - `left = 0`
    - `right = 0`
    - `maxLength = 0`
    - `charMap = {}` (an empty Map)

2. **First iteration of the while loop (`right < 5`)**:
    - `charMap.set(s[0], (charMap.get(s[0]) || 0) + 1)`:
        - `charMap.set('e', (charMap.get('e') || 0) + 1)`
        - `charMap = {'e': 1}`
    - `right = 1`
    - `charMap.size <= k` (1 <= 2), so no changes to `left`
    - `maxLength = Math.max(0, 1 - 0) = 1`

3. **Second iteration of the while loop (`right < 5`)**:
    - `charMap.set(s[1], (charMap.get(s[1]) || 0) + 1)`:
        - `charMap.set('c', (charMap.get('c') || 0) + 1)`
        - `charMap = {'e': 1, 'c': 1}`
    - `right = 2`
    - `charMap.size <= k` (2 <= 2), so no changes to `left`
    - `maxLength = Math.max(1, 2 - 0) = 2`

4. **Third iteration of the while loop (`right < 5`)**:
    - `charMap.set(s[2], (charMap.get(s[2]) || 0) + 1)`:
        - `charMap.set('e', (charMap.get('e') || 0) + 1)`
        - `charMap = {'e': 2, 'c': 1}`
    - `right = 3`
    - `charMap.size <= k` (2 <= 2), so no changes to `left`
    - `maxLength = Math.max(2, 3 - 0) = 3`

5. **Fourth iteration of the while loop (`right < 5`)**:
    - `charMap.set(s[3], (charMap.get(s[3]) || 0) + 1)`:
        - `charMap.set('b', (charMap.get('b') || 0) + 1)`
        - `charMap = {'e': 2, 'c': 1, 'b': 1}`
    - `right = 4`
    - `charMap.size > k` (3 > 2), enter the inner while loop:
        - `charMap.set(s[left], charMap.get(s[left]) - 1)`:
            - `charMap.set('e', charMap.get('e') - 1)`
            - `charMap = {'e': 1, 'c': 1, 'b': 1}`
        - `left = 1`
        - `charMap.size > k` (3 > 2), continue inner loop:
            - `charMap.set(s[left], charMap.get(s[left]) - 1)`:
                - `charMap.set('c', charMap.get('c') - 1)`
                - `charMap = {'e': 1, 'c': 0, 'b': 1}`
            - `charMap.get(s[left]) === 0`, so `charMap.delete(s[left])`
            - `charMap.delete('c')`
            - `charMap = {'e': 1, 'b': 1}`
            - `left = 2`
    - `maxLength = Math.max(3, 4 - 2) = 3`

6. **Fifth iteration of the while loop (`right < 5`)**:
    - `charMap.set(s[4], (charMap.get(s[4]) || 0) + 1)`:
        - `charMap.set('a', (charMap.get('a') || 0) + 1)`
        - `charMap = {'e': 1, 'b': 1, 'a': 1}`
    - `right = 5`
    - `charMap.size > k` (3 > 2), enter the inner while loop:
        - `charMap.set(s[left], charMap.get(s[left]) - 1)`:
            - `charMap.set('e', charMap.get('e') - 1)`
            - `charMap = {'e': 0, 'b': 1, 'a': 1}`
        - `charMap.get(s[left]) === 0`, so `charMap.delete(s[left])`
        - `charMap.delete('e')`
        - `charMap = {'b': 1, 'a': 1}`
        - `left = 3`
    - `maxLength = Math.max(3, 5 - 3) = 3`

### Result

After iterating through the string, the longest substring with at most 2 distinct characters is "ece" with a length of 3. Therefore, the function correctly returns 3.
 */

