
//+------------------Copy's solutin--------------//
// var largestOddNumber = function(num) {
//    let  n = num.length
//     for(i = n -1 ; i>=0 ; i--){
//         if((num[i] - '0')%2 !=0 ){
//             return num.substring(0,i+1)
//         } 
//     }
//     return ""
// };

// let num = "3542768"
// let result = largestOddNumber(num)
// console.log(result)

//-----------------By slice method------------------//
/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    for (let i = num.length - 1; i >= 0; i--) {
        if (parseInt(num[i]) % 2 === 1) {
            return num.slice(0 , i+1)
        }
    }
    
    return "";    
};
let num = "3542768"
let result = largestOddNumber(num)
console.log(result)