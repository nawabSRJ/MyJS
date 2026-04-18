const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let winningNumber = 19
let attempts = 0

function askGuess() {
    rl.question("Guess a number: ", function(input) {
        let userGuess = Number(input)
        attempts++

        if (isNaN(userGuess)) {
            console.log("Please enter a valid number!")
            askGuess()  // ask again
        } else if (userGuess === winningNumber) {
            console.log(`🎉 Correct! You got it in ${attempts} attempts!`)
            rl.close()
        } else if (userGuess < winningNumber) {
            console.log("Too low! Try again.")
            askGuess()  // ask again
        } else {
            console.log("Too high! Try again.")
            askGuess()  // ask again
        }
    })
}

askGuess()  // start the game