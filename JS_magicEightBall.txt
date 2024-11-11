// Initialize userName as an empty string
let userName = '';

// Greet the user by name if provided, otherwise use a generic greeting
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// Define a question the user wants to ask
let userQuestion = 'Will it rain?';

// Log the user's question
console.log(userQuestion);

// Generate a random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);

// Initialize eightBall as an empty string
let eightBall = '';

// Use a switch statement to assign a response based on the random number
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'Absolutely not';
    break;
}

// Log the eightBall's response
console.log(eightBall);
