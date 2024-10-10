//Lexicographical Order: Similar to dictionary order. For example, "abc" is smaller than "abd" because 'c' comes before 'd' in the alphabet.
 // Brute force appraoch
//  function breakPalindrome(palindrome) {
//     if (palindrome.length === 1) return "";

//     let smallest = null;
//     for (let i = 0; i < palindrome.length; i++) {
//         for (let ch = 0; ch < 26; ch++) {
//             let char = String.fromCharCode(97 + ch); // 'a' + ch
//             if (char !== palindrome[i]) {
//                 let newStr = palindrome.substring(0, i) + char + palindrome.substring(i + 1);
//                 if (!isPalindrome(newStr)) {
//                     if (smallest === null || newStr < smallest) {
//                         smallest = newStr;
//                     }
//                 }
//             }
//         }
//     }
//     return smallest;
// }

// function isPalindrome(s) {
//     let left = 0, right = s.length - 1;
//     while (left < right) {
//         if (s[left] !== s[right]) return false;
//         left++;
//         right--;
//     }
//     return true;
// }

// let palindrome = 'saas';
//  let result = breakPalindrome(palindrome);
//  console.log(result)

//--------------------Better Apparoach---------------//
// function breakPalindrome(palindrome) {
//     if (palindrome.length === 1) return "";

//     const chars = palindrome.split('');
//     for (let i = 0; i < Math.floor(chars.length / 2); i++) {
//         if (chars[i] !== 'a') {
//             chars[i] = 'a';
//             return chars.join('');
//         }
//     }
//     chars[chars.length - 1] = 'b';
//     return chars.join('');
// }
// let palindrome='xax'
// let result = breakPalindrome(palindrome);
// console.log(result)


// -----------------Optimal Appraoch----------------//

function breakPalindrome(palindrome) {
    if (palindrome.length === 1) return "";

    const n = palindrome.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        if (palindrome[i] !== 'a') {
            return palindrome.substring(0, i) + 'a' + palindrome.substring(i + 1);
        }
        // it is work like from 0 to  i  is a and we replace b by "a" + next charactes are ccba
    }
    return palindrome.substring(0, n - 1) + 'b';
}
let palindrome='abccba'
let result = breakPalindrome(palindrome);
console.log(result)

/**
 *Initial Check:

If the length of the string is 1, return an empty string since a single character palindrome cannot be made non-palindromic by changing one character.
Iterate Through the First Half:

Iterate through the first half of the string to find the first character that is not 'a'.
If such a character is found, replace it with 'a' and return the modified string.
Fallback for All 'a's in the First Half:

If all characters in the first half are 'a', change the last character to 'b' to ensure the string is no longer a palindrome and return the result.
Dry Run Example: palindrome = "abccba"
Initial Check:

Input: "abccba"
The length of the input string is 6, which is greater than 1, so proceed to the next step.
Iterate Through the First Half:

The loop will iterate from i = 0 to i < Math.floor(6 / 2), which means i will go from 0 to 2.
First Iteration (i = 0):

palindrome[0] = 'a'
Since palindrome[0] is 'a', continue to the next iteration.
Second Iteration (i = 1):

palindrome[1] = 'b'
Since palindrome[1] is not 'a', change palindrome[1] to 'a':
return palindrome.substring(0, 1) + 'a' + palindrome.substring(2)
This evaluates to:
palindrome.substring(0, 1) = 'a'
palindrome.substring(2) = 'ccba'
Concatenate to get: "aaccba"
Return the result: "aaccba"
 */