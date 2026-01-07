function countVowels(input) {
  let count = 0;
  const vowels = "aeiouAEIOU";

  for (let i = 0; i < input.length; i++) {

    if (vowels.includes(input[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("programming"));