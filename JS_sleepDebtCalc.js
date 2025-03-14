// Function to get the number of sleep hours for each day
const getSleepHours = (day) => {
  // Convert day to lowercase and return corresponding sleep hours
  switch (day.toLowerCase()) {
    case 'monday':
      return 8;
    case 'tuesday':
      return 5;
    case 'wednesday':
      return 7;
    case 'thursday':
      return 9;
    case 'friday':
      return 4.5;
    case 'saturday':
      return 7;
    case 'sunday':
      return 8;
    default:
      return 'invalid day'; // Return error message for invalid day
  }
};

// Function to calculate total actual sleep hours for the week
const getActualSleepHours = () => {
  return getSleepHours('monday') +
         getSleepHours('tuesday') +
         getSleepHours('wednesday') +
         getSleepHours('thursday') +
         getSleepHours('friday') +
         getSleepHours('saturday') +
         getSleepHours('sunday');
};

// Function to calculate ideal sleep hours for the week
const getIdealSleep = () => {
  const idealHours = 8; // Ideal sleep hours per day
  return idealHours * 7; // Total ideal sleep hours for the week
};

// Function to calculate sleep debt
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleep();
  
  // Compare actual sleep hours with ideal sleep hours
  if (actualSleepHours === idealSleepHours) {
    console.log('Perfect Amount of sleep');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`More sleep than needed. You've over slept by ${actualSleepHours - idealSleepHours}.`);
  } else {
    console.log(`You need more sleep. You are down ${idealSleepHours - actualSleepHours} on sleep.`);
  }
};

// Call the function to calculate and log sleep debt
calculateSleepDebt();
