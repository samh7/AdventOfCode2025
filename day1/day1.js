// AOC 2025 - DAY 1 PART !
// Author: Samh7 

import text from "./str.js"

function getSignedNumbers(str) {
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

// get remainder as sum when value is > 100  or < 0
function calculateSum(acc, curr) {
    let sum = acc + curr
    return (sum < 0) ? sum %= 100 : (sum > 99) ? sum %= 100 : sum
}

let listForSums = []

const INITIAL_VALUE = 50

const splitTextList = text.trim().split('\n')

const signedNumbers = getSignedNumbers(splitTextList)

signedNumbers.reduce((currentSum, currNum) => {
    const sum = calculateSum(currentSum, currNum)
    listForSums.push(sum)
    return sum
}, INITIAL_VALUE)

const password = listForSums.filter((num) => num === 0).length

console.log(password)
