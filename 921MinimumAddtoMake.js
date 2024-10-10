// var minAddToMakeValid = function(s) {
//     const stack= [];
//     let ans=0;
//     for(let i=0; i<s.length; i++){
//       if(s[i]=='(' )
//         stack.push('(');
//       else{
//         //s[1] = ")": Check if stack is not empty and top of stack is '('
//         if(stack.length!=0 && stack[stack.length-1]=="(")
//           stack.pop();
//         else 
//          ans++;
//       }
//     }

//     ans+=stack.length;

//     return ans;
// };

// let s = "())(("
// console.log(minAddToMakeValid(s))

/**
 * Step-by-Step Execution:
Initial Setup:

s = "())(("
stack = []
ans = 0
Iteration through String:

Iteration 1 (i = 0):

s[0] = "(": Push '(' onto the stack.
Stack: ["("]
ans = 0
Iteration 2 (i = 1):

s[1] = ")": Check if stack is not empty and top of stack is '('.
Condition satisfied, pop '(' from stack.
Stack: []
ans = 0
Iteration 3 (i = 2):

s[2] = ")": Check if stack is not empty and top of stack is '('.
Condition not satisfied (stack.length == 0), increment ans.
Stack: []
ans = 1
Iteration 4 (i = 3):

s[3] = "(": Push '(' onto the stack.
Stack: ["("]
ans = 1
Iteration 5 (i = 4):

s[4] = "(": Push '(' onto the stack.
Stack: ["(", "("]
ans = 1
Final Calculation:

After iterating through the string:
stack = ["(", "("] (two unmatched opening parentheses)
ans = 1 (one extra ')' that did not have a matching parenthesis)
Return Value:

Add the remaining unmatched opening parentheses in the stack to ans.
ans = 1 + 2 = 3
Return ans = 3, which represents the minimum number of additions needed to make the parentheses valid.
 */

//Leetcode soluton 
const minAddToMakeValid = (s) => {
  let t = s.replace("()","");
  if(t.length === s.length) return s.length;
  else return minAddToMakeValid(t);
};

let s = "(())(("
console.log(minAddToMakeValid(s))

// var minAddToMakeValid = function(S) {
//    let open = 0, close = 0;
   
//    for(let c of S) {
//        if(c === '(') open++;
//        else if(!open) close++;
//        else open--;
//    }
//    return open + close;
// };
// let s = "(())(("
// console.log(minAddToMakeValid(s))