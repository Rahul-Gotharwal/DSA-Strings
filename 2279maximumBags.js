// // Video solution 
// function maximumBags(capacity, rocks, additionalRocks) {
// //  // Calculate the remaining capacity for each bag
// // cap holding the value that  is in the capacity array = [2,3,4,5]
// // index holding the key that is the rocks array => [1,2,4,4]
// // now [2,3,4,5] - [1,2,4,5] gives [1,1,0,1]
// // map return the arrray in the remainigCapacity
// let remainingCapacity  = capacity.map((cap , index) => cap-rocks[index])
//   // Sort the remaining capacities in ascending order
//   remainingCapacity.sort((a,b)=>a-b); // after sort => [0,1,1,1]
//   let filldbags = 0 ;
//   // Try to fill the bags with the additional rocks
// for(let i =0 ; i<remainingCapacity.length ; i++){
//     if(additionalRocks >= remainingCapacity[i]){
//         additionalRocks= additionalRocks-remainingCapacity[i];
//         filldbags++;
//     }else{
//         break;
//     }
// }
// return filldbags
// }
// // Example usage
// const capacity = [2, 3, 4, 5];
// const rocks = [1, 2, 4, 4];
// const additionalRocks = 2;

// console.log(maximumBags(capacity, rocks, additionalRocks));
/**
 * First iteration (i = 0):

remainingCapacity[0] = 0
additionalRocks >= 0 (2 >= 0) is true
additionalRocks -= 0 (2 - 0 = 2)
filledBags++ (0 + 1 = 1)
Second iteration (i = 1):

remainingCapacity[1] = 1
additionalRocks >= 1 (2 >= 1) is true
additionalRocks -= 1 (2 - 1 = 1)
filledBags++ (1 + 1 = 2)
Third iteration (i = 2):

remainingCapacity[2] = 1
additionalRocks >= 1 (1 >= 1) is true
additionalRocks -= 1 (1 - 1 = 0)
filledBags++ (2 + 1 = 3)
Fourth iteration (i = 3):

remainingCapacity[3] = 1
additionalRocks >= 1 (0 >= 1) is false
Break the loop
 */

//--------------Using the for loop------------------//
var maximumBags = function(capacity, rocks, additionalRocks) {
    let n = capacity.length

    for (let i = 0; i < n; i++) {
        capacity[i] -= rocks[i]
    }
    let raminingCapacity = capacity.sort((a,b)=>a-b)

    let res = 0;
    for (let i = 0; i < n; i++) {
        if (additionalRocks == 0 || raminingCapacity > additionalRocks) break
        additionalRocks -= raminingCapacity[i]
        res++;
    }
    return res;
};
const capacity = [2, 3, 4, 5];
const rocks = [1, 2, 4, 4];
const additionalRocks = 2;
let res = maximumBags(capacity, rocks, additionalRocks);
console.log(res)