const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function capitalizeFirstLetter(str) {
     return str
       .split(" ")
       .map((word) => word[0].toUpperCase() + word.slice(1))
       .join(" ");
}

rl.question("Enter anything in words: ", (str) => {
    const capitalizedString = capitalizeFirstLetter(str);
    console.log(capitalizedString);
    rl.close();
})