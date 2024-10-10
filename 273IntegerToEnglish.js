var numberToWords = function(num) {
    if (num === 0) return "Zero";
  // we dont need zero so ,se use "" in belowTwenty
    const belowTwenty = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", 
                         "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", 
                         "Eighteen", "Nineteen"];
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const thousands = ["", "Thousand", "Million", "Billion"];

    const helper = (num) => {
        if (num === 0) return "";
        // we check in the array like if number is 13 then i index value is also at 13 in the array belowTwenty and it return the corrosponding index value that is thirteen
        else if (num < 20) return belowTwenty[num] + " ";
        //23/10 => gives 2 so at index tens[2] is twenty 
        else if (num < 100) return tens[Math.floor(num / 10)] + " " + helper(num % 10);
        // it also compute the 123 / 100 => is 1 and add "hundred" to it
        // so this line gives us one hundred , or number 23 that is again call by checking the condtions 
        // 123 /100 give us the one so with corosponding index belowTwenty[1] it will retun "One"
        else return belowTwenty[Math.floor(num / 100)] + " Hundred " + helper(num % 100);
    };

    let result = "";
    let i = 0;

    while (num > 0) {
        if (num % 1000 !== 0) {
            //afrer doing the above process the helper function holds the value "One Hundred Twenty Three"
            result = helper(num % 1000) + thousands[i] + " " + result;
        }
        num = Math.floor(num / 1000);
        i++;
    }

    return result.trim();
};

// Example usage:
console.log(numberToWords(13));  // Output: "Thirteen"
console.log(numberToWords(123)) //One Hundred Twenty Three
console.log(numberToWords(12345));  // Output: "Twelve Thousand Three Hundred Forty Five"
console.log(numberToWords(1234567)); // Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
//---------------------About the Helper Funtion ----------//

/**
 * Detailed Breakdown of the helper Function Call with 123
Initial Call to helper(123):

num = 123
The function checks:
num < 20 (false)
num < 100 (false)
Recursive Call to helper within helper(123):

Since num >= 100, it calls helper(123 % 100), which is helper(23).
It also computes belowTwenty[Math.floor(num / 100)], which is belowTwenty[1] = "One", and prepares to concatenate "One Hundred" with the result of helper(23).
Processing helper(23):

num = 23
The function checks:
num < 20 (false)
num < 100 (true)
Since num < 100, it calls helper(23 % 10), which is helper(3).
It also computes tens[Math.floor(num / 10)], which is tens[2] = "Twenty", and prepares to concatenate "Twenty" with the result of helper(3).
Processing helper(3):

num = 3
The function checks:
num < 20 (true)
Since num < 20, it returns belowTwenty[3], which is "Three ".
Returning from Recursive Calls:

helper(3) returns "Three ".
helper(23) concatenates "Twenty" and "Three " to return "Twenty Three ".
helper(123) concatenates "One Hundred" and "Twenty Three " to return "One Hundred Twenty Three ".
Back to the While Loop in numberToWords:

The while loop does not see 23 or 3 again. Instead, it receives the fully processed result "One Hundred Twenty Three " from the helper function.
result = helper(123) + thousands[i] + " " + result becomes result = "One Hundred Twenty Three " + "" + " " + "" = "One Hundred Twenty Three ".
The while loop updates num = Math.floor(123 / 1000) = 0 and i = 1
 */
/*
Initialization:

num = 123
result = ""
i = 0
First Iteration of the While Loop:

Condition: num > 0 (123 > 0 is true)
num % 1000 = 123 % 1000 = 123
Call helper(123)
Helper Function Call with 123:

Condition: num < 20 (false), num < 100 (false)
Call helper(123 % 100) = helper(23)
helper(23):
Condition: num < 20 (false), num < 100 (true)
Call helper(23 % 10) = helper(3)
helper(3):
Condition: num < 20 (true)
Return "Three "
Return tens[2] + " " + "Three " = "Twenty Three "
Return belowTwenty[1] + " Hundred " + "Twenty Three " = "One Hundred Twenty Three "
helper(123) returns "One Hundred Twenty Three "
Back to the While Loop:

result = "One Hundred Twenty Three " + thousands[0] + " " + result
result = "One Hundred Twenty Three "
Update num = Math.floor(123 / 1000) = 0
Update i = 1
Second Iteration of the While Loop:

Condition: num > 0 (0 > 0 is false)
Exit the loop
Final Step:

Return result.trim()
result.trim() = "One Hundred Twenty Three"
*/ 

//--------------------With Number 12345-------------------//
/**
 * Dry Run for Input 12345
Initialization:

num = 12345
result = ""
i = 0
First Iteration of the While Loop:

Condition: num > 0 (12345 > 0 is true)
num % 1000 = 12345 % 1000 = 345
Call helper(345)
Helper Function Call with 345:

num = 345
Condition: num < 20 (false), num < 100 (false)
Call helper(345 % 100) = helper(45)
Compute belowTwenty[Math.floor(345 / 100)] = belowTwenty[3] = "Three"
Prepare to concatenate "Three Hundred" with the result of helper(45)
Helper Function Call with 45:

num = 45
Condition: num < 20 (false), num < 100 (true)
Call helper(45 % 10) = helper(5)
Compute tens[Math.floor(45 / 10)] = tens[4] = "Forty"
Prepare to concatenate "Forty" with the result of helper(5)
Helper Function Call with 5:

num = 5
Condition: num < 20 (true)
Return belowTwenty[5] = "Five "
Returning from Recursive Calls:

helper(5) returns "Five "
helper(45) concatenates "Forty" and "Five " to return "Forty Five "
helper(345) concatenates "Three Hundred" and "Forty Five " to return "Three Hundred Forty Five "
Back to the While Loop:

result = helper(345) + thousands[i] + " " + result
result = "Three Hundred Forty Five " + "" + " " + "" = "Three Hundred Forty Five "
Update num = Math.floor(12345 / 1000) = 12
Update i = 1
Second Iteration of the While Loop:

Condition: num > 0 (12 > 0 is true)
num % 1000 = 12 % 1000 = 12
Call helper(12)
Helper Function Call with 12:

num = 12
Condition: num < 20 (true)
Return belowTwenty[12] = "Twelve "
Back to the While Loop:

result = helper(12) + thousands[i] + " " + result
result = "Twelve " + "Thousand " + "Three Hundred Forty Five " = "Twelve Thousand Three Hundred Forty Five "
Update num = Math.floor(12 / 1000) = 0
Update i = 2
Third Iteration of the While Loop:

Condition: num > 0 (0 > 0 is false)
Exit the loop
Final Step:

Return result.trim()
result.trim() = "Twelve Thousand Three Hundred Forty Five"
 */