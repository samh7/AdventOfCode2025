import text from "./str.js"
const START = 50;
const TOTAL = 100;

function part1(rotations) {
    let password = 0;
    let current = START

    rotations.forEach((rotation) => {
        const direction = rotation[0];
        let value = Number(rotation.slice(1));

        if (direction === "L") {
            value *= -1
        }

        let change = current + value
        if (change < 0) {
            change = TOTAL + change
        }

        current = change % TOTAL

        if (current === 0) {
            password += 1
        }
    })

    console.log(password)

}


function modulus(value, divisor) {
    return value - (divisor * Math.floor(value / divisor))
}

function part2(rotations) {
    let password = 0;
    let current = START

    rotations.forEach((rotation) => {
        const direction = rotation[0];
        let value = Number(rotation.slice(1));

        if (direction === "L") {
            value *= -1
            const divisions = Math.floor(value / (TOTAL * -1))
            password += divisions
            const mod = modulus(value, (TOTAL * -1))
            if (current !== 0 && current + mod <= 0) {
                password += 1
            }
        }
        else {
            const divisions = Math.floor(value / TOTAL)
            password += divisions
            const mod = modulus(value, TOTAL)
            if (current + mod >= 100) {
                password += 1
            }
        }

        current = modulus(current + value, TOTAL)
    })

    console.log(password)

}
part1(text.split("\n"))
part2(text.split("\n"))
