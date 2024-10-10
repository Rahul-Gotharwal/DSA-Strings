// var summaryRanges = function(nums){
//     let i = 0 ;
//     let j = 0 ;
//     let res  = []
//     while(i<nums.length){
//         j=i+1;
//         while(j<nums.length && nums[j]-1 ===nums[j-1]){
//             j++

//         }
//         if(i!==j-1){
//             res.push(""+nums[i]+"->"+nums[j-1]);

//         }else{
//             res.push(""+nums[i])
//         }
//         i = j ; 

//     }
   
//   return res
// } 

// let nums = [0,1,2,4,5,7]
// console.log(summaryRanges(nums))
/**
 * Sure, let's dry run this code with the input `nums = [0, 1, 2, 4, 5, 7]`.

Here's a step-by-step breakdown of how the code executes:

1. **Initialization:**
   - `i = 0`
   - `j = 0`
   - `res = []`

2. **First iteration of the outer while loop (i = 0):**
   - `j = i + 1 = 1`
   - Enter inner while loop:
     - `nums[1] - 1 === nums[0]` (1 - 1 === 0), so increment `j` to 2
     - `nums[2] - 1 === nums[1]` (2 - 1 === 1), so increment `j` to 3
     - `nums[3] - 1 !== nums[2]` (4 - 1 !== 2), exit inner loop
   - Check `i !== j - 1` (0 !== 2), so add `"0->2"` to `res`
   - `res = ["0->2"]`
   - Set `i = j = 3`

3. **Second iteration of the outer while loop (i = 3):**
   - `j = i + 1 = 4`
   - Enter inner while loop:
     - `nums[4] - 1 === nums[3]` (5 - 1 === 4), so increment `j` to 5
     - `nums[5] - 1 !== nums[4]` (7 - 1 !== 5), exit inner loop
   - Check `i !== j - 1` (3 !== 4), so add `"4->5"` to `res`
   - `res = ["0->2", "4->5"]`
   - Set `i = j = 5`

4. **Third iteration of the outer while loop (i = 5):**
   - `j = i + 1 = 6`
   - Inner while loop condition is false (`j >= nums.length`), exit inner loop
   - Check `i !== j - 1` (5 === 5), so add `"7"` to `res`
   - `res = ["0->2", "4->5", "7"]`
   - Set `i = j = 6`

5. **End of outer while loop (i >= nums.length):**
   - Exit outer loop
   - Return `res = ["0->2", "4->5", "7"]`

Thus, the final output of the function with `nums = [0, 1, 2, 4, 5, 7]` is:

```
["0->2", "4->5", "7"]
```

The dry run confirms that the code correctly identifies the ranges in the input array.
 */


//------------------Leetcode solution ------------------//
var summaryRanges = function(nums) {
    let res = [];
    let start = 0; // start index of the current range

    for (let i = 0; i < nums.length; i++) {
        // Check if this is the end of the current range
        if (i + 1 === nums.length || nums[i] + 1 !== nums[i + 1]) {
            // If start is equal to i, it means the range contains a single number
            if (start === i) {
                res.push("" + nums[start]);
            } else {
                res.push(nums[start] + "->" + nums[i]);
            }
            // Move the start index to the next number
            start = i + 1;
        }
    }
    
    return res;
};

let nums = [0, 1, 2, 4, 5, 7];
console.log(summaryRanges(nums)); // Output: ["0->2", "4->5", "7"]

/**
 * Let's go through a more detailed dry run with an emphasis on why the iterations continue or don't continue.

Given input: `nums = [0, 1, 2, 4, 5, 7]`

### Initialization:
- `res = []`
- `start = 0`

### Loop Iterations:

1. **First iteration (i = 0):**
   - `nums[i] = 0`
   - `i + 1 < nums.length` is true (1 < 6)
   - `nums[i] + 1 === nums[i + 1]` is true (0 + 1 === 1)
   - Since both conditions are true, the loop continues to the next iteration without adding anything to `res`.

2. **Second iteration (i = 1):**
   - `nums[i] = 1`
   - `i + 1 < nums.length` is true (2 < 6)
   - `nums[i] + 1 === nums[i + 1]` is true (1 + 1 === 2)
   - Since both conditions are true, the loop continues to the next iteration without adding anything to `res`.

3. **Third iteration (i = 2):**
   - `nums[i] = 2`
   - `i + 1 < nums.length` is true (3 < 6)
   - `nums[i] + 1 !== nums[i + 1]` is true (2 + 1 !== 4)
   - Since the second condition is false, we now process the current range:
     - `start === i` is false (0 !== 2), so we add `"0->2"` to `res`.
     - `res = ["0->2"]`
     - Set `start = i + 1 = 3`

4. **Fourth iteration (i = 3):**
   - `nums[i] = 4`
   - `i + 1 < nums.length` is true (4 < 6)
   - `nums[i] + 1 === nums[i + 1]` is true (4 + 1 === 5)
   - Since both conditions are true, the loop continues to the next iteration without adding anything to `res`.

5. **Fifth iteration (i = 4):**
   - `nums[i] = 5`
   - `i + 1 < nums.length` is true (5 < 6)
   - `nums[i] + 1 !== nums[i + 1]` is true (5 + 1 !== 7)
   - Since the second condition is false, we now process the current range:
     - `start === i` is false (3 !== 4), so we add `"4->5"` to `res`.
     - `res = ["0->2", "4->5"]`
     - Set `start = i + 1 = 5`

6. **Sixth iteration (i = 5):**
   - `nums[i] = 7`
   - `i + 1 === nums.length` is true (6 === 6)
   - Since we have reached the end of the array, we process the current range:
     - `start === i` is true (5 === 5), so we add `"7"` to `res`.
     - `res = ["0->2", "4->5", "7"]`
     - Set `start = i + 1 = 6`

### End of Loop:
- Loop terminates as `i + 1 === nums.length`.

### Return the result:
- Return `res = ["0->2", "4->5", "7"]`

Thus, the final output of the function with `nums = [0, 1, 2, 4, 5, 7]` is:

```
["0->2", "4->5", "7"]
```

The dry run confirms that the new approach correctly identifies the ranges in the input array, and now the reasoning behind why the iterations continue or don't continue should be clearer.
 */
