// /**Brute Force Approach:

// Iterate through each word and check all possible combinations of other words to see if the current word can be formed by concatenation. */
// function isConcatenated(word, words) {
//   if (words.length === 0) return false;

//   const wordSet = new Set(words);
//   wordSet.delete(word);

//   function canForm(word) {
//     if (wordSet.has(word)) return true;
//     // i is start form one because it prints space when we start from zero , because word.slice(0,0) is nothing
//     for (let i = 1; i < word.length; i++) {
//       const left = word.slice(0, i);
//       // console.log(left) // c , ca, d , do ,c ,ca ,cat
//       const right = word.slice(i);
//       //console.log(right)// at , t, og,g,atdog,tdog,dog
//       // lst me canForm of dog call hoga or uper wala  if (wordSet.has(word)) return true; ye true return krega fir yha niche se function true return hoga
//       // agar left mil gya to hum check krenge ki yrr right bhi he ya nhi
//       if (wordSet.has(left) && canForm(right)) return true;
//     }
//     return false;
//   }
//   /**
//      * Calling Statement: It calls the canForm function with the word as an argument.
// Returning Statement: It returns the result of canForm(word) back to the caller of isConcatenated
//      */
//   return canForm(word);
// }

// function findAllConcatenatedWords(words) {
//   const result = [];
//   for (const word of words) {
//     if (isConcatenated(word, words)) {
//       result.push(word);
//     }
//   }
//   return result;
// }

// // Example usage
// const words = ["cat", "dog", "catdog"];
// console.log(findAllConcatenatedWords(words)); // Output: ["catdog"]

/**
 * The statement `return canForm(word);` in the `isConcatenated` function is both a calling and a returning statement. Here's how it works:

- **Calling Statement**: It calls the `canForm` function with the `word` as an argument.
- **Returning Statement**: It returns the result of `canForm(word)` back to the caller of `isConcatenated`.

### Flow of Function Calls

1. **Main Function Call**: `findAllConcatenatedWords(words)`
    - Iterates over each word in `words`.

2. **First Iteration (word = "cat")**:
    - Calls `isConcatenated("cat", ["cat", "dog", "catdog"])`
        - Inside `isConcatenated`, `wordSet` is created and `canForm("cat")` is called.
            - Inside `canForm("cat")`, it checks substrings "c" and "at", "ca" and "t". None match.
            - `canForm("cat")` returns `false`.
        - `isConcatenated("cat", ["cat", "dog", "catdog"])` returns `false`.
    - "cat" is not added to the result.

3. **Second Iteration (word = "dog")**:
    - Calls `isConcatenated("dog", ["cat", "dog", "catdog"])`
        - Inside `isConcatenated`, `wordSet` is created and `canForm("dog")` is called.
            - Inside `canForm("dog")`, it checks substrings "d" and "og", "do" and "g". None match.
            - `canForm("dog")` returns `false`.
        - `isConcatenated("dog", ["cat", "dog", "catdog"])` returns `false`.
    - "dog" is not added to the result.

4. **Third Iteration (word = "catdog")**:
    - Calls `isConcatenated("catdog", ["cat", "dog", "catdog"])`
        - Inside `isConcatenated`, `wordSet` is created and `canForm("catdog")` is called.
            - Inside `canForm("catdog")`, it checks substrings:
                - "c" and "atdog" → no match.
                - "ca" and "tdog" → no match.
                - "cat" and "dog":
                    - "cat" is in `wordSet`, so it calls `canForm("dog")`.
                        - Inside `canForm("dog")`, "dog" is in `wordSet`, so it returns `true`.
                    - `canForm("catdog")` returns `true` because `canForm("dog")` returned `true`.
        - `isConcatenated("catdog", ["cat", "dog", "catdog"])` returns `true`.
    - "catdog" is added to the result.

5. **End of Iteration**:
    - The iteration over `words` completes.
    - `findAllConcatenatedWords` returns the result array `["catdog"]`.

### Summary

- `return canForm(word);` in the `isConcatenated` function calls the `canForm` function and immediately returns its result.
- The caller of `isConcatenated` (which is `findAllConcatenatedWords`) receives the returned value from `canForm` through `isConcatenated`.

The hierarchical relationship of function calls is as follows:

1. `findAllConcatenatedWords` calls `isConcatenated`.
2. `isConcatenated` calls `canForm` and returns its result.
3. `canForm` returns `true` or `false` based on whether the word can be formed by concatenation.

In this way, the return value from `canForm` is passed back up through `isConcatenated` to `findAllConcatenatedWords`.
 */

//----------------Optimized Approach with Memoization---------------------//
// function findAllConcatenatedWords(words) {
//     const wordSet = new Set(words);
//     const memo = {};

//     function canForm(word) {
//         if (memo.hasOwnProperty(word)) return memo[word];
//         for (let i = 1; i < word.length; i++) {
//             const left = word.slice(0, i);
//             const right = word.slice(i);
//             if (wordSet.has(left) && (wordSet.has(right) || canForm(right))) {
//                 memo[word] = true;
//                 return true;
//             }
//         }
//         memo[word] = false;
//         return false;
//     }
 
//     const result = [];
//     for (const word of words) {
//         if (canForm(word)) {
//             result.push(word);
//         }
//     }
//     return result;
// }

// // Example usage
// const words = ["cat", "dog", "catdog"];
// console.log(findAllConcatenatedWords(words)); // Output: ["catdog"]
