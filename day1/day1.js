import text from "./str.js"

function splitString(str) {
    return str.trim().split('\n')
}

function getSignedNumber(str) {
    const [letter, ...numbers] = str;
    if (letter.toUpperCase() === 'L') {
        numbers.unshift('-')
    }
    return +numbers.join('')
}


function getSignedNumbers(str) {
    return str.map((s) => getSignedNumber(s))
}

function calculateSum(acc, curr) {
    let sum = acc + curr
    if (sum < 0) {
        sum %= 100
    }

    else if (sum > 99) {
        sum %= 100
    }

    return sum
}

const splitTextList = splitString(text)

const newWithStartNum = [50, ...getSignedNumbers(splitTextList)]

let listForSums = []

newWithStartNum.reduce((acc, curr) => {
    const sum = calculateSum(acc, curr)
    listForSums.push(sum)
    return sum
}, 0)

const password = listForSums.filter((num) => num === 0).length

console.log(password)
