//-------------------Leetcode solution ------------------//
// var rotateString = function(s, goal) {
//     const array = s+s 
//     console.log(array)
//     if(s.length !== goal.length){
//         return false
//     }
//     else if (array.includes(goal)){
//         // s + s => abcdeabcede are includes the goal string or not
//         return true
//     }
//     else{
//         return false
//     }

// };
// let s = "abcde", goal = "cdeab"
// result = rotateString(s,goal);
// console.log(result)

// /**
//  * @param {string} s
//  * @param {string} goal
//  * @return {boolean}
//  */
// var rotateString = function(s, goal) {
//     if (s.length !== goal.length) return false;
//     // same as s+s like s.concat(s)
//     // includes automatically return the true or false
//     return s.concat(s).includes(goal);
// };
// let s = "abcde", goal = "cdeab"
// result = rotateString(s,goal);
// console.log(result)


//---------------Return the number of shift also--------------//

var rotateString = function(s, goal) {
    if (s.length !== goal.length) return -1;
    
    // Concatenate s with itself
    var concatenated = s + s;
    
    // Find the starting position of goal in the concatenated string
    var index = concatenated.indexOf(goal);
    
    // If goal is found, return the index, otherwise return -1
    return index !== -1 ? index : -1;
};

let s = "abcde", goal = "cdeab";
let result = rotateString(s, goal);
console.log(result); // Output: 2

s = "abcde", goal = "abced";
result = rotateString(s, goal);
console.log(result); // Output: -1
