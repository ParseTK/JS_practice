// Generate a random race number between 0 and 999
let raceNumber = Math.floor(Math.random() * 1000);

// Boolean variable indicating if the racer registered early
let registeredEarly = true;

// Racer's age
let age = 19;

// If the racer is an adult and registered early, add 1000 to their race number
if (age >= 18 && registeredEarly === true) {
  raceNumber = raceNumber + 1000;
}

// Determine the race start time based on age and registration status
if (age > 18 && registeredEarly === true) {
  console.log(`Racer will start at 9:30 AM. Number: ${raceNumber}`);
} else if (age > 18 && registeredEarly === false) {
  console.log(`Racer will start at 11:00 AM. Number: ${raceNumber}`);
} else {
  console.log(`Racer will start at 12:30 PM. Number: ${raceNumber}`);
}
