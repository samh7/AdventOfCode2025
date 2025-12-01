// AOC 2025 - DAY 1 PART !
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

// get remainder as sum when value is > 100  or < 0
export function calculateSum(acc, curr) {
    let sum = acc + curr
    return (sum < 0 || sum > 99) ? sum %= 100 : sum
}


const INITIAL_VALUE = 50

const splitTextList = text.trim().split('\n')

const signedNumbers = getSignedNumbers(splitTextList)

let  password = 0;

signedNumbers.reduce((currentSum, currNum) => {
    const sum =  calculateSum(currentSum, currNum) 
    password = sum === 0 ? password + 1 : password
    return sum
}, INITIAL_VALUE)



// if (require.main === module){
    console.log(password)
// }