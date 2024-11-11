// Initialize the secretMessage array with a quote
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Log the initial length of the array
console.log(secretMessage.length);

// Remove the last element from the array
secretMessage.pop();

// Log the new length of the array after removal
console.log(secretMessage.length);

// Add new elements to the end of the array
secretMessage.push('to', 'program');

// Update the 8th element to 'right'
secretMessage[7] = 'right';

// Remove the first element of the array
secretMessage.shift();

// Add 'Programming' to the start of the array
secretMessage.unshift('Programming');

// Replace 5 elements starting from index 6 with 'know'
secretMessage.splice(6, 5, 'know');

// Join the array into a string and print it
console.log(secretMessage.join(", "));
