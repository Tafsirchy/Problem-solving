const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

rl.question('Enter a list of numbers separated by commas: ', (input) => {
    const numArray = input.split(',').map(Number);
    const newArray = removeDuplicates(numArray);
    console.log(`Array after removing duplicates: ${newArray}`);
    rl.close();
})