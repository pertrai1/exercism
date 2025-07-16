//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n) => {
  let totalSteps = 0;
  function takeSteps() {
    if (n < 1) {
      throw new Error("Only positive numbers are allowed");
    }
    n === 1 ? totalSteps : n % 2 === 0 ? testEvenNumber() : testOddNumber();
  }
  function testEvenNumber() {
    n = n / 2;
    totalSteps++;
    takeSteps(n);
  }

  function testOddNumber() {
    n = n * 3 + 1;
    totalSteps++;
    takeSteps(n);
  }

  takeSteps();
  return totalSteps;
};
