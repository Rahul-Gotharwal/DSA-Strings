//---------------Copy's Solution ----------------//
// var isAnagram = function(s, t) {
//     if (s.length !== t.length) {
//         return false;
//     }
    
//     var freq = new Array(26).fill(0);
//     for (var i = 0; i < s.length; i++) {
//         freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]+1;//++
//         freq[t.charCodeAt(i) - 'a'.charCodeAt(0)]-1;//--
//     }
    
//     for (var i = 0; i < freq.length; i++) {
//         if (freq[i] !== 0) {
//             return false;
//         }
//     }
//     // if frequancy is zero then return true
//     return true;
// };

// let s = "anagram", t = "nagaram";
// console.log(isAnagram(s ,t ))

//----------------Using HashMap-------------------//
// var isAnagram = function(s, t){
//     if (s.length !== t.length) {
//         return false;
//     }

//     var freq = {}
//     // Populate the frequency hashmap with the first string
//     for (var i = 0; i < s.length; i++) {
//         var char = s[i];
//         if (freq[char]) {
//             // if it is present already then make it ++
//             freq[char]++;
//         } else {
//             // if comes only one time make it one 
//             freq[char] = 1;
//         }
//     }
//      // Decrement the frequency based on the second string
//      for (var i = 0; i < t.length; i++) {
//         var char = t[i];
//         if (freq[char]) {
//             freq[char]--;
//         } else {
//             return false;
//         }
//     }
//     // Check if all frequencies are zero
//     // frequnacy should be zero for anagram of string
//     for (var char in freq) {
//         if (freq[char] !== 0) {
//             return false;
//         }
//     }

//     return true;
// }
// let s = "anagram", t = "nagaram";
// console.log(isAnagram(s, t)); // Output: true

// s = "rat", t = "car";
// console.log(isAnagram(s, t)); // Output: false

//---------------------Using Map function -------------------//
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let freqMap = new Map();
    
    // Populate the frequency Map with the first string
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (freqMap.has(char)) {
            freqMap.set(char, freqMap.get(char) + 1);
        } else {
            freqMap.set(char, 1);
        }
    }
    
    // Decrement the frequency based on the second string
    for (let i = 0; i < t.length; i++) {
        let char = t[i];
        if (freqMap.has(char)) {
            freqMap.set(char, freqMap.get(char) - 1);
            if (freqMap.get(char) < 0) {
                return false;
            }
        } else {
            return false;
        }
    }
    
    // Check if all frequencies are zero
    for (let value of freqMap.values()) {
        if (value !== 0) {
            return false;
        }
    }

    return true;
};

let s = "anagram", t = "nagaram";
console.log(isAnagram(s, t)); // Output: true

s = "rat", t = "car";
console.log(isAnagram(s, t)); // Output: false



