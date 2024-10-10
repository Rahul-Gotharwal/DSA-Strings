// var isIsomorphic = function (s, t) {
//   if (s.length !== t.length) return false;

//   let map_s_to_t = new Map();
//   let map_t_to_s = new Map();

//   for (let i = 0; i < s.length; i++) {
//     let char_s = s[i];
//     let char_t = t[i];

//     // Check s -> t mapping
//     // the has function checks is the any value of s is map with t is present in the map or not
//     // if is is present in the map there are two types of condions is , first in if present then they are consistent or not
//     // in else if they are not present ,set them
//     /**
//  * When we map char_s to char_t, it means that every occurrence of char_s in s should be replaced by char_t to form t.
// Similarly, every occurrence of char_t in t should map back to char_s.
//  */
//     if (map_s_to_t.has(char_s)) {
//       if (map_s_to_t.get(char_s) !== char_t) {
//         return false;
//       }
//     } else {
//       map_s_to_t.set(char_s, char_t);
//     }

//     // Check t -> s mapping
//     if (map_t_to_s.has(char_t)) {
//       if (map_t_to_s.get(char_t) !== char_s) {
//         return false;
//       }
//     } else {
//       map_t_to_s.set(char_t, char_s);
//     }
//   }

//   return true;
// };

// // Example usage:
// console.log(isIsomorphic("egg", "add")); // Output: true
// console.log(isIsomorphic("foo", "bar")); // Output: false
// console.log(isIsomorphic("paper", "title")); // Output: true

/**
 * map_s_to_t.has(char_s):

Purpose: To check if char_s (a character from the string s) already has a mapping to a character in t in the map_s_to_t.
How it works: The has method of a Map object checks if a certain key exists in the map. It returns true if the key is present and false otherwise.
map_s_to_t.get(char_s):

Purpose: To retrieve the character in t that char_s is currently mapped to in map_s_to_t.
How it works: The get method of a Map object retrieves the value associated with a specific key. If the key is not present, it returns undefined.
map_s_to_t.set(char_s, char_t):

Purpose: To create or update the mapping of char_s to char_t in map_s_to_t.
How it works: The set method of a Map object adds a new key-value pair or updates the value of an existing key with the provided value.
 */
/**
 * Consider the strings s = "egg" and t = "add":

Initial Step:

map_s_to_t and map_t_to_s are empty.
First Character Pair (e and a):

map_s_to_t maps e to a: map_s_to_t.set('e', 'a').
map_t_to_s maps a to e: map_t_to_s.set('a', 'e').
Second Character Pair (g and d):

map_s_to_t maps g to d: map_s_to_t.set('g', 'd').
map_t_to_s maps d to g: map_t_to_s.set('d', 'g').
Third Character Pair (g and d):

map_s_to_t already maps g to d.
map_t_to_s already maps d to g.
No contradictions, so the strings are isomorphic.
 */
// --------------Leetcode Solution -------------------//
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let map1 = new Array(128).fill(0); // Stores frequency of s
  let map2 = new Array(128).fill(0); // Stores frequency of t

  for (let i = 0; i < s.length; i++) {
    let sCh = s.charCodeAt(i);
    let tCh = t.charCodeAt(i);

    if (map1[sCh] === 0 && map2[tCh] === 0) {
        // this condition is false means items are mapped already in the array so go to else if 
        // 0 is updated to 116 and 112 in both map1 and map2 or if the same  words come agian this condion will false and go to the else if 
      map1[sCh] = tCh; // map1[112] = 116
      map2[tCh] = sCh; // map2[116] = 112
    } else if (map1[sCh] !== tCh || map2[tCh] !== sCh) {
      return false;
    }
  }
  return true;
};
console.log(isIsomorphic("egg", "add")); // Output: true
console.log(isIsomorphic("foo", "bar")); // Output: false
console.log(isIsomorphic("paper", "title")); // Output: true

/**
 * tep-by-Step Dry Run:

First Character Pair (s[0] = 'f', t[0] = 'b'):

sCh = s.charCodeAt(0) = 102 (ASCII code for 'f')
tCh = t.charCodeAt(0) = 98 (ASCII code for 'b')
if (map1[sCh] === 0 && map2[tCh] === 0) {
    map1[sCh] = tCh;  // map1[102] = 98
    map2[tCh] = sCh;  // map2[98] = 102
} else if (map1[sCh] !== tCh || map2[tCh] !== sCh) {
    return false;
}
Both map1[102] and map2[98] are 0, so we map f to b and b to f.
map1 becomes: [...0, 98, ...] (at index 102)
map2 becomes: [...0, 102, ...] (at index 98)
Second Character Pair (s[1] = 'o', t[1] = 'a'):

sCh = s.charCodeAt(1) = 111 (ASCII code for 'o')
tCh = t.charCodeAt(1) = 97 (ASCII code for 'a')
Both map1[111] and map2[97] are 0, so we map o to a and a to o.
map1 becomes: [...0, 97, ...] (at index 111)
map2 becomes: [...0, 102, ...111, ...] (at index 97)
Third Character Pair (s[2] = 'o', t[2] = 'r'):

sCh = s.charCodeAt(2) = 111 (ASCII code for 'o')
tCh = t.charCodeAt(2) = 114 (ASCII code for 'r')
map1[111] is 97 (mapped to 'a'), but current char_t is 114 (mapped to 'r').
map1[111] !== 114 returns true because the existing mapping (111 -> 97) is inconsistent with the new character (111 -> 114).
Therefore, return false because the mapping is inconsistent.
Final Result:
Since we encountered an inconsistency during the iteration, the strings s = "foo" and t = "bar" are not isomorphic.
return false
 */