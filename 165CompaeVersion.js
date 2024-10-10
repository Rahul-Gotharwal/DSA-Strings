//-------------------Leetcode Solution--------------------------//
var compareVersion = function(version1, version2) {
    const helper = function(s, idx) {
        let num = 0;
        while (idx < s.length) {
            if (s[idx] === '.') break;  //same as copy's logic like converting into integer
            else num = num * 10 + parseInt(s[idx]);
            idx++;
        }
        return [num, idx + 1];
    };

    let i = 0, j = 0;
    result1 = [], result2 = [];
    while (i < version1.length || j < version2.length) {
        result1 = helper(version1, i);
        result2 = helper(version2, j);
        const v1 = result1[0], v2 = result2[0];
        i = result1[1]; j = result2[1];
        if (v1 > v2) return 1;
        else if (v1 < v2) return -1;
    }
    return 0;
};

let version1 = "1.2";
let version2 = "1.10";
let res = compareVersion(version1 , version2)
console.log(res)


//-----------------------ChatGpt Solution With Big O of n--------------------------//
// function compareVersion(version1, version2) {
//     const v1 = version1.split('.').map(Number); // split function always return array like '1.2' becomes ["1" ,"2"]
//     const v2 = version2.split('.').map(Number);
//     //maxLength = Math.max(v1.length, v2.length) = Math.max(3, 2) = 3
//     const maxLength = Math.max(v1.length, v2.length);
//     for (let i = 0; i < maxLength; i++) {
//         const num1 = i < v1.length ? v1[i] : 0;
//         const num2 = i < v2.length ? v2[i] : 0;
        
//         if (num1 < num2) {
//             return -1;
//         } else if (num1 > num2) {
//             return 1;
//         }
//     }
    
//     return 0;
// }

// // Example usage:
// console.log(compareVersion("1.2", "1.10")); // Output: -1
// console.log(compareVersion("1.01", "1.001")); // Output: 0
// console.log(compareVersion("1.0", "1.0.0.0")); // Output: 0
/**
 * Using split(separator)
When you provide a separator argument, the function splits the string at each occurrence of the separator.

Example:

javascript
Copy code
const str = "1.2.3";
const arr = str.split('.'); // ["1", "2", "3"]
In this case, the separator is a dot (.), so the string is split at each dot, resulting in an array of substrings.

Using split() without Arguments
When you call split() without any arguments, it splits the string into an array of individual characters.

Example:

javascript
Copy code
const str = "1.2.3";
const arr = str.split(); // ["1.2.3"]
Without a separator, split() does not split the string into multiple parts. Instead, it returns an array with the entire string as a single element.

Using split(' ') (space)
When you use a space character (' ') as the separator, the function splits the string at each space.

Example:

javascript
Copy code
const str = "1 2 3";
const arr = str.split(' '); // ["1", "2", "3"]
In this case, the string is split at each space, resulting in an array of substrings.

Summary of Differences
split(separator):

Splits the string at each occurrence of the specified separator.
Returns an array of substrings.
Example: "1.2.3".split('.') results in ["1", "2", "3"].
split() (without arguments):

Does not split the string.
Returns an array containing the entire string as a single element.
Example: "1.2.3".split() results in ["1.2.3"].
split(' ') (space):

Splits the string at each space.
Returns an array of substrings.
Example: "1 2 3".split(' ') results in ["1", "2", "3"].
Practical Usage
For the specific problem of comparing version numbers, we use split('.') because version numbers are typically formatted with dots separating the revisions. Using split('.') allows us to break down the version string into its individual components (major, minor, patch, etc.) for easy comparison. Using split() without arguments or split(' ') would not work correctly for this purpose, as the format of version strings does not involve spaces or the entire string as a single unit.
 */
