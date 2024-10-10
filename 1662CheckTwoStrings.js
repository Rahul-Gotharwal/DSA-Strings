//--------------Approach 1 ------------------//

//  var arrayStringsAreEqual = function(word1, word2) {
//     const str1 = word1.join('');
//     const str2 = word2.join('');
//     return str1 === str2
// };
// // Example usage
// const word1 = ["abc", "d"];
// const word2 = ["a", "bcd"];
// console.log(arrayStringsAreEqual(word1, word2));
//-----------------------Appraoch 2 ------------------//
// var arrayStringsAreEqual = function(word1 , word2){
//     let i =0 , j=0 , w1= 0 , w2 =0 
//     while(w1<word1.length && w2 < word2.length){
//         if(word1[w1][i] !== word2[w2][j]){
//             return false
//         }
//         i++
//         j++;
//         if(i===word1[w1].length){
//             i=0;
//             w1++
//         }
//         if(j===word2[w2].length){
//             j=0;
//             w2++
//         }
//     }
//     if(w1 === word1.length && w2=== word2.length){
//         //word1.length => 2
//         return true
//     }
//     return false
// }
// // Example usage
// const word1 = ["abc", "d"];
// const word2 = ["a", "bcd"];
// console.log(arrayStringsAreEqual(word1, word2)); // Output: true

