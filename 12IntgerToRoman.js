// //According to the question , this is only take the number  in between 1 <= num <= 3999
// /**
//     * @param {number} num
//     * @return {string}
//     */
// var intToRoman = function(num) {
//     // Step #1
//     const units = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
//     const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
//     const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]; // 100,200,300,400
//     const thousands = ["", "M", "MM", "MMM"];// 1000,2000,3000

//     // Step #2
//     // we jsut have to find the the numbeers so each line from 14 to 18 give us a number => 1987
//     const thousandPart = Math.floor(num / 1000); // 1
//     const hundredPart = Math.floor((num % 1000) / 100); // 1987%1000=> 987 /100 => 9
//     const tenPart = Math.floor((num % 100) / 10); //1987%100 => 87/10 => 8 
//     const unitPart = num % 10; //1987%10 => 7

//     // Step #3
//     const romanThousands = thousands[thousandPart]; // thousands[1] => value at 1 in thousands array that is 'I'
//     const romanHundreds = hundreds[hundredPart];
//     const romanTens = tens[tenPart];
//     const romanUnits = units[unitPart];

//     // Step #4
//     // these are the addtion of strings , if it is number then 8+7 => 15
//     return romanThousands + romanHundreds + romanTens + romanUnits;
// };

// // Test the function
// let num = 1987;
// let romanNumeral = intToRoman(num);
// console.log(romanNumeral);  // Outputs: MCMLXXXVII

/**
 * Step-by-Step Dry Run for num = 1987
Step #1: Arrays Definition

units = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
thousands = ["", "M", "MM", "MMM"]
Step #2: Calculate Parts

thousandPart = Math.floor(1987 / 1000) = 1
hundredPart = Math.floor((1987 % 1000) / 100) = Math.floor(987 / 100) = 9
tenPart = Math.floor((1987 % 100) / 10) = Math.floor(87 / 10) = 8
unitPart = 1987 % 10 = 7
Step #3: Get Roman Numeral Parts

romanThousands = thousands[1] = "M"
romanHundreds = hundreds[9] = "CM"
romanTens = tens[8] = "LXXX"
romanUnits = units[7] = "VII"
Step #4: Construct the Roman Numeral

romanThousands + romanHundreds + romanTens + romanUnits
"M" + "CM" + "LXXX" + "VII"
Result = "MCMLXXXVII"
Therefore, the function correctly converts 1987 to the Roman numeral "MCMLXXXVII".
 */
//--------------Calculaton for small values --------------//
/**
 * thousandPart = Math.floor(97 / 1000) = 0
hundredPart = Math.floor((97 % 1000) / 100) = Math.floor(97 / 100) = 0
tenPart = Math.floor((97 % 100) / 10) = Math.floor(97 / 10) = 9
unitPart = 97 % 10 = 7
 */


//--------------------For the Number greater then the 4000-----------------//
var intToRoman = function(num) {
    // Step #1
    const units = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const thousands = ["", "M", "MM", "MMM"];

    let romanNumeral = "";

    // Handle thousands
    while (num >= 1000) {
        //For 58135 add the "M"to romanNumeral
        romanNumeral += "M";
        num -= 1000;
        // next loop for 57135
        //afeter 58 iteration it will complete
    }

    // Handle the rest
    romanNumeral += thousands[Math.floor(num / 1000)];
    romanNumeral += hundreds[Math.floor((num % 1000) / 100)];
    romanNumeral += tens[Math.floor((num % 100) / 10)];
    romanNumeral += units[num % 10];

    return romanNumeral;
};

// Test the function
let num = 58135;
let romanNumeral = intToRoman(num);
console.log(romanNumeral);  // Outputs: MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMCXXXV

/**
 * Let's dry run the updated `intToRoman` function with the value `58135`:

1. **Initial Setup**:
   - Arrays are defined:
     - `units` = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
     - `tens` = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
     - `hundreds` = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
     - `thousands` = ["", "M", "MM", "MMM"]

2. **Variable Initialization**:
   - `romanNumeral` = ""

3. **Handle Thousands**:
   - Initial `num` = 58135
   - Enter the while loop:
     - First iteration: `romanNumeral` = "M", `num` = 57135
     - Second iteration: `romanNumeral` = "MM", `num` = 56135
     - Third iteration: `romanNumeral` = "MMM", `num` = 55135
     - This process continues until `num` < 1000
     - After 58 iterations: `romanNumeral` = "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM", `num` = 135 (58 Ms for 58 thousands)

4. **Handle the Rest**:
   - `romanNumeral += thousands[Math.floor(135 / 1000)]`:
     - `Math.floor(135 / 1000) = 0`
     - `romanNumeral += thousands[0] = ""`
     - `romanNumeral` remains "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM"
   - `romanNumeral += hundreds[Math.floor((135 % 1000) / 100)]`:
     - `Math.floor(135 / 100) = 1`
     - `romanNumeral += hundreds[1] = "C"`
     - `romanNumeral` = "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMC"
   - `romanNumeral += tens[Math.floor((135 % 100) / 10)]`:
     - `Math.floor(135 % 100 / 10) = 3`
     - `romanNumeral += tens[3] = "XXX"`
     - `romanNumeral` = "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMCXXX"
   - `romanNumeral += units[135 % 10]`:
     - `135 % 10 = 5`
     - `romanNumeral += units[5] = "V"`
     - `romanNumeral` = "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMCXXXV"

### Final Output:
The function correctly converts `58135` to the Roman numeral `"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMCXXXV"`.
 */