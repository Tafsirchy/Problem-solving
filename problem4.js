const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function findMax(arr) {
    return Math.max(...arr);
}

rl.question('Enter numbers separated by spaces: ', (userInput) => {
    const numArray = userInput.split(' ').map(Number);
    const maxNum = findMax(numArray);
    console.log(`The maximum number is: ${maxNum}`);
    rl.close();
});