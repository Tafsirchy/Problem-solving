const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function reverseString(str) {
    return str.split("").reverse().join("")
}

rl.question("Enter a string to reverse: ", (userInput)=>{
    console.log(reverseString(userInput))
    rl.close()
})