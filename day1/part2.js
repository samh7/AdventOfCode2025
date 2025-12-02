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
    let sum = acc + curr

    // for numbers like -100 and 100
    if (sum < -99 || sum > 99) {
        const num = Math.abs(sum)

        //eg. 300 -> "300" -> ["3", ["0", "0"]]
        const [first, ...rest] = num.toString().split('')

        //eg. password += num(3)
        password += +first
        
        //eg. sum = num(str(["0","0"]) // 0 
        sum = +rest.join("")
    }

    // for numbers between 0 and -99
    if (sum <= 0) {
        password += 1
        return sum % 100
    }

    // numbers that were -ve and changes to +ve
    if (sum > 0 && acc < 0) {
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