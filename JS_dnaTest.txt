// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']; // An array of possible DNA bases
  return dnaBases[Math.floor(Math.random() * 4)]; // Selects a random base from the array
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []; // Initialize an empty array to hold the DNA strand
  for (let i = 0; i < 15; i++) { // Loop to add 15 bases to the strand
    newStrand.push(returnRandBase()); // Add a randomly selected base to the strand
  }
  return newStrand; // Return the completed strand
};

// Factory function to create P. aequor objects
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum, // Assign the specimen number to the object
    dna: dna, // Assign the DNA array to the object

    // Method to mutate the DNA
    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length); // Select a random index in the DNA array
      const originalBase = this.dna[randomIndex]; // Store the original base at the selected index
      const newBases = ['A', 'T', 'C', 'G'].filter(base => base !== originalBase); // Create an array of possible new bases, excluding the original base
      const newBase = newBases[Math.floor(Math.random() * newBases.length)]; // Select a new base randomly from the newBases array
      this.dna[randomIndex] = newBase; // Replace the original base with the new base
      return this.dna; // Return the mutated DNA array
    },

    // Method to compare DNA with another P. aequor object
    compareDNA(otherPAequor) {
      let identicalBases = 0; // Initialize a counter for identical bases
      for (let i = 0; i < this.dna.length; i++) { // Loop through each base in the DNA array
        if (this.dna[i] === otherPAequor.dna[i]) { // If the bases at the same position are identical
          identicalBases++; // Increment the counter
        }
      }
      const percentageCommon = (identicalBases / this.dna.length) * 100; // Calculate the percentage of identical bases
      console.log(`specimen #${this.specimenNum} and specimen #${otherPAequor.specimenNum} have ${percentageCommon.toFixed(2)}% DNA in common.`); // Print the percentage
      return percentageCommon; // Return the percentage for further use
