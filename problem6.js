const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum,
}

rl.question('Enter a list of numbers separated by spaces: ', (input) => {
    const numArray = input.split(' ').map(Number);
    const total = sumArray(numArray);
    console.log(`The sum of the array is: ${total}`);
    rl.close();
    
})
