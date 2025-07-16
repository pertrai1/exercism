//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(value) {
    this.value = value;
  }

  get sumOfSquares() {
    return (this.value * (this.value + 1) * ((this.value * 2) + 1)) / 6;
  }

  get squareOfSum() {
    const sum = (this.value * (this.value + 1)) / 2;
    return sum * sum;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
