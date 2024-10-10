// var prefixCount = function(words, pref) {
//     for (let index = 0; index < words.length; index++) {
//        // console.log(words[index])
//         words[index] = words[index].substring(0, pref.length)
//         // it is the string like pay = pa , attention = at , 
//        // console.log(words[index].substring(0 , pref.length))
//     }
//     let count = 0;
//     for (const iterator of words) {
//         // now words array is updated by values words becomes: ["pa", "at", "pr", "at"] , so we do the iteration on it
//         if (iterator === pref) {
//             count++;
//         }
//     }
//     return count;
// };

// let words = ["pay","attention","practice","attend"];
// let pref = 'at'
// let result = prefixCount(words , pref)
// console.log(result)

// -------------for returning the words-------------//
// var prefixCount = function(words, pref) {
//     let matchingWords = [];
//     for (let index = 0; index < words.length; index++) {
//         words[index] = words[index].substring(0, pref.length)
//         matchingWords.push(words[index])
//     }
//     let count = 0;
//     for (const iterator of words) {
//         if (iterator === pref) {
//             count++;
//         }
//     }
//     return {count : count , matchingWords : matchingWords};
// };

// let words = ["pay","attention","practice","attend"];
// let pref = 'at'
// let result = prefixCount(words , pref)
// console.log(result)

//--------------------Using Filter Method--------------------//
// var prefixCount = function(words , pref){
//     let matchingWords = words.filter(word => word.startsWith(pref));
//     let count = matchingWords.length ;
//     //return {count : count , matchingWords : matchingWords}
//     return count
// }
// let words = ["pay", "attention", "practice", "attend"];
// let pref = 'at';
// let result = prefixCount(words, pref);
// console.log(result);

//---------------Working of Filter method-----------------//
/**
 * Original Array: ["pay", "attention", "practice", "attend"]
Callback Function: word => word.startsWith(pref)
This checks if each word starts with the prefix pref.
Result: A new array ["attention", "attend"] containing only the words that start with "at".

 */

/*
callback: A function that is called for each element in the array. It should return true to keep the element, or false otherwise.
element: The current element being processed in the array.
index (optional): The index of the current element being processed.
array (optional): The array filter was called upon.
thisArg (optional): Value to use as this when executing callback.
Example
Let's go through an example to see how the filter method works:

javascript
Copy code
let numbers = [1, 2, 3, 4, 5];

// Filter out odd numbers
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]
In this example:

Original Array: [1, 2, 3, 4, 5]
Callback Function: The function checks if a number is even (number % 2 === 0).
Result: A new array [2, 4] containing only the even numbers.
*/ 

//----------------------Using A For Loop---------------//

var prefixCount = function(words, pref) {
    let count = 0;
    let matchingWords = [];

    for (let word of words) {
        if (word.startsWith(pref)) {
            count++;
            matchingWords.push(word);
        }
    }

    return { count: count, matchingWords: matchingWords };
};

let words = ["pay", "attention", "practice", "attend"];
let pref = 'at';
let result = prefixCount(words, pref);
console.log(result); // Output: { count: 2, matchingWords: ["attention", "attend"] }
