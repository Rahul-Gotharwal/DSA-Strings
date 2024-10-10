// //------------------------Chat Gpt solution -----------------------//
// function fullJustify(words, maxWidth) {
//     const result = [];
//     let line = [];
//     let lineLength = 0;

//     for (let word of words) {
//         if (lineLength + word.length + line.length > maxWidth) {
//             for (let i = 0; i < maxWidth - lineLength; i++) {
//                 line[i % (line.length - 1 || 1)] += ' ';
//             }
//             result.push(line.join(''));
//             line = [];
//             lineLength = 0;
//         }
//         line.push(word);
//         lineLength += word.length;
//     }
    
//     result.push(line.join(' ') + ' '.repeat(maxWidth - lineLength - (line.length - 1)));

//     return result;
// }

// // Example usage:
// const words = ["This", "is", "an", "example", "of", "text", "justification."];
// const maxWidth = 16;
// console.log(fullJustify(words, maxWidth));


//----------------------Videos Solution -----------------------//
function getFinalWord(words, i, j, eachWordSpace, extraSpace, maxWidth) {
    let s = "";

    for (let k = i; k < j; k++) {
        s += words[k];

        if (k === j - 1) continue;

        for (let space = 1; space <= eachWordSpace; space++) {
            s += " ";
        }

        if (extraSpace > 0) {
            s += " ";
            extraSpace--;
        }
    }

    while (s.length < maxWidth) {
        s += " ";
    }

    return s;
}

function fullJustify(words, maxWidth) {
    let result = [];
    let i = 0;
    let n = words.length;

    while (i < n) {
        let lettersCount = words[i].length;
        let j = i + 1;
        let spaceSlots = 0;

        while (j < n && spaceSlots + lettersCount + words[j].length + 1 <= maxWidth) {
            lettersCount += words[j].length;
            spaceSlots += 1;
            j++;
        }

        let remainingSlots = maxWidth - lettersCount;
        let eachWordSpace = spaceSlots === 0 ? 0 : Math.floor(remainingSlots / spaceSlots);
        let extraSpace = spaceSlots === 0 ? 0 : remainingSlots % spaceSlots;

        if (j === n) { // Last line - Left justified
            eachWordSpace = 1;
            extraSpace = 0;
        }

        result.push(getFinalWord(words, i, j, eachWordSpace, extraSpace, maxWidth));
        i = j;
    }

    return result;
}

// Example usage:
const words = ["This", "is", "an", "example", "of", "text", "justification."];
const maxWidth = 16;
console.log(fullJustify(words, maxWidth));
