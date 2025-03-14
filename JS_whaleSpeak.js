// Initialize the input string to be translated
let input = 'mooo';

// Define an array of vowels to check against
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Initialize an empty array to store the result
let resultArray = [];

// Loop through each character in the input string
for (let i = 0; i < input.length; i++) {
  // Check for specific vowels 'e' and 'u' to be added twice
  if (input[i] === 'e' || input[i] === 'u') {
    resultArray.push(input[i]);
  }
  // Loop through the vowels array to find matches
  for (let j = 0; j < vowels.length; j++) {
    // If a vowel is found, add it to the result array
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}

// Log the array of vowels found in the input
console.log(resultArray);

// Join the result array into a string and convert to uppercase
let resultString = resultArray.join('').toUpperCase();

// Log the final translated string in whale speak
console.log(`${input} translated to whale speak is: ${resultString}`);
