const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

function findevenNumbers(arr) {
    let evenNumbers = [];
    for (let num of arr) {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        }
    }
    return evenNumbers;
}

rl.question('Enter an array of numbers separated by commas: ', (input) => {
    const arr = input.split(',').map(Number);
    const evenNumbers = findevenNumbers(arr);
    console.log('Even numbers in the array:', evenNumbers);
    rl.close();
})