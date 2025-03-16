const Calculate = {
  factorial(inputNum) {
    // Throw an error for negative inputs
    if (inputNum < 0) {
      throw new Error("Factorial is not defined for negative numbers"); 
    }

    // Return 1 if input is 0 or 1
    if (inputNum === 0 || inputNum === 1) return 1;

    // Create an array of numbers from 1 to inputNum and calculate the factorial
    return Array.from({ length: inputNum }, (_, i) => i + 1)
    
      // Multiply all the numbers in the array using reduce
      .reduce((accumulator, currentValue) => accumulator * currentValue, 1);
  }
};

// Export the Calculate object for use in other files
module.exports = Calculate;
