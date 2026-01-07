const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function checkPalindrome(str) {
  str = str.toLowerCase();
  const reversed = str.split("").reverse().join("");

  if (str === reversed) {
    return true;
  } else {
    return falsee;
  }
}

rl.question("Enter a string: ", (userInput) => {
  const isPalindrome = checkPalindrome(userInput);
  console.log(`Is the string a palindrome? ${isPalindrome}`);
  rl.close();
});
