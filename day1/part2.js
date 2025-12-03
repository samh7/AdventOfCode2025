// AOC 2025 - DAY 1 PART 2
// Author: Samh7 

import text from "./str.js"

export function getSignedNumbers(str) {
    return str.map((s) => {
        // get first letter and the rest of the list
        const [letter, ...numbers] = s;
        if (letter.toUpperCase() === 'L') {
            // add '-' to the start of the list
            numbers.unshift('-')
        }
        // join to a string and then convert to a number
        return +numbers.join('')
    })
}

let password = 0;

// get remainder as sum when value is > 100  or < 0
export function calculateSum(acc, curr) {
    // Count complete cycles (rotations > 100)
    password += Math.floor(Math.abs(curr) / 100)
    
    // Get the actual rotation after removing complete cycles
    const rotation = curr % 100
    const prevDial = acc
    let sum = acc + rotation
    
    // Handle wrapping and crossing zero
    if (sum < 0) {
        // Going left and wrapping around
        if (prevDial > 0) {
            password += 1  // Crossed zero
        }
        sum += 100  // Wrap to positive range
    } else if (sum > 100) {
        // Going right and wrapping around
        password += 1  // Crossed zero
        sum %= 100  // Wrap back
    }
    
    // Check if we landed exactly on zero
    if (sum === 0) {
        password += 1
    }
    
    return sum
}

const INITIAL_VALUE = 50

const splitTextList = text.trim().split('\n')

const signedNumbers = getSignedNumbers(splitTextList)


signedNumbers.reduce((currentSum, currNum) => {
    return calculateSum(currentSum, currNum)
}, INITIAL_VALUE)



// if (require.main === module){
console.log(password)
// }