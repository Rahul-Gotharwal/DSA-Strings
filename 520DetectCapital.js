//----------------Leeetcode solution ---------------------------//
// /**
//  * @param {string} word
//  * @return {boolean}
//  */
// var detectCapitalUse = function(word) {
//     if(word.toLowerCase() == word || word.toUpperCase() == word) 
//         return true;
//     else if((word[0] + word.slice(1).toLowerCase()) == word) 
//         return true 
//     else 
//         return false
// }

// let word = "JYOTI" ;
// let result = console.log(detectCapitalUse(word))


//--------------------Chat Gpt ------------------------//
var detectCapitalUse = function(word) {
    // Case 1: All letters are uppercase
    if (word === word.toUpperCase()) {
        return true;
    }
    
    // Case 2: All letters are lowercase
    if (word === word.toLowerCase()) {
        return true;
    }
    
    // Case 3: Only the first letter is uppercase and the rest are lowercase
    //slice(1): Extracts part of a string from the specified index to the end.
    // slice takes to arguments like startinng index and ending index where we want like slice(0,3) like prevois quetion -2138
    // but here it takes only first index and go till the end 
    if (word.charAt(0) === word.charAt(0).toUpperCase() && word.slice(1) === word.slice(1).toLowerCase()) {
        return true;
    }
    
    // If none of the cases match, return false
    return false;
};

// Test cases
console.log(detectCapitalUse("USA"));     // Output: true
console.log(detectCapitalUse("FlaG"));    // Output: false
console.log(detectCapitalUse("Google"));  // Output: true
console.log(detectCapitalUse("leetcode"));// Output: true
console.log(detectCapitalUse("g"));       // Output: true


