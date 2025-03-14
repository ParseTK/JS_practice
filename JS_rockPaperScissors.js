// Function to get the user's choice and validate it
const getUserChoice = (userInput) => { 
  // Convert user input to lowercase for consistency
  userInput = userInput.toLowerCase(); 
  // Check if the input is a valid choice
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') { 
    return userInput; 
  } else { 
    console.log('ERROR!'); // Log an error if the input is invalid
  } 
}; 

// Function to randomly generate the computer's choice
const getComputerChoice = () => { 
  const randomNumber = Math.floor(Math.random() * 3); 
  // Return a choice based on the random number
  switch (randomNumber) { 
    case 0: 
      return 'rock'; 
    case 1: 
      return 'paper'; 
    case 2: 
      return 'scissors'; 
  } 
}; 

// Function to determine the winner of the game
const determineWinner = (userChoice, computerChoice) => {
  // Check for a tie
  if (userChoice === computerChoice) {
    return 'Game Tied!';
  }
  // Determine if the user wins
  if ((userChoice === 'rock' && computerChoice === 'scissors') || 
      (userChoice === 'paper' && computerChoice === 'rock') || 
      (userChoice === 'scissors' && computerChoice === 'paper')) { 
    return 'Player Win!'; 
  } else { 
    return 'Computer Win!'; // Otherwise, the computer wins
  } 
};

// Function to play the game
const playGame = (userInput) => { 
  const userChoice = getUserChoice(userInput); 
  if (!userChoice) 
    return; // Exit if user input is invalid

  const computerChoice = getComputerChoice(); 
  console.log(`User choice: ${userChoice}`); 
  console.log(`Computer choice: ${computerChoice}`); 
  console.log(determineWinner(userChoice, computerChoice)); 
};

// Start the game with the user's choice
playGame('Scissors');

