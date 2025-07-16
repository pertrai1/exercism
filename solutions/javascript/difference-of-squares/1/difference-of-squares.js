//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const calculateTotal = ({type, value}) => {
  let i = 1;
  let total = 0;
  while (i <= value) {
    total += type === 'sum' ? i ** 2 : i;
    i++;
  }
  return type === 'sum' ? total : total ** 2;
}

export class Squares {
  constructor(value) {
    this.value = value;
  }

  get sumOfSquares() {
    return calculateTotal({
      type: 'sum',
      value: this.value
    })
  }

  get squareOfSum() {
    return calculateTotal({
      type: 'square',
      value: this.value
    })
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
