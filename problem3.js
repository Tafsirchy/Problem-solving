function checkPalindrome(str) {
  str = str.toLowerCase();
  const reversed = str.split("").reverse().join("");

  if (str === reversed) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindrome("madam"));
console.log(checkPalindrome("hello"));


