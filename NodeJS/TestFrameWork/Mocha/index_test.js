/*==================
    Test File
 ===================*/

// Import modules
var assert = require("assert");
var Calculate = require("../index.js");

describe("Calculate", () => {
  describe(".factorial", () => {
    // Test 1: Valid input
    it("returns 120 for 5!", () => {
      const inputNum = 5;
      const expectedResult = 120;
      const result = Calculate.factorial(inputNum);
      assert.strictEqual(result, expectedResult);
    });

    // Test 2: Valid input
    it("returns 6 for 3!", () => {
      const inputNum = 3;
      const expectedResult = 6;
      const result = Calculate.factorial(inputNum);
      assert.strictEqual(result, expectedResult);
    });

    // Test 3: Base case
    it("returns 1 when passed 0", () => {
      const inputNum = 0;
      const expectedResult = 1;
      const result = Calculate.factorial(inputNum);
      assert.strictEqual(result, expectedResult);
    });

    // Test 4: Negative input
    it("throws an error when passed a negative number", () => {
      const inputNum = -3;
      assert.throws(() => {
        Calculate.factorial(inputNum);
      }, Error);
    });

    // Test 5: Large input
    it("returns a large factorial value for a large number", () => {
      const inputNum = 10;
      const expectedResult = 3628800; 
      const result = Calculate.factorial(inputNum);
      assert.strictEqual(result, expectedResult);
    });
  });
});
