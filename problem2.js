const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function checkvowel(char) {
    const vowels = 'aeiouAEIOU';
    return vowels.includes(char);   
}

rl.question('Enter a string: ', (userInput) => {
    let count = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (checkvowel(userInput[i])) {
        count++;
      }
    }
    console.log(`Number of vowels in the string: ${count}`);
    rl.close();
})