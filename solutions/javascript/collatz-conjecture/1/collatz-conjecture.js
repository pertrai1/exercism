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
    if (n === 1) {
      return totalSteps;
    } else if (n % 2 === 0) {
      n = n / 2;
      totalSteps++;
      takeSteps(n);
    } else if (n % 2 !== 0) {
      n = n * 3 + 1;
      totalSteps++;
      takeSteps(n);
    }
    // return totalSteps;
  }
  takeSteps();
  return totalSteps;
};
