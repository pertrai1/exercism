//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  get isEquilateral() {
    return this.sides.every(side => side === this.sides[0]); /*? */
  }

  get isIsosceles() {
    return this.sides.some(side => side === this.sides[0]);
  }

  get isScalene() {
    return this.sides.every(side => side !== this.sides[0]);
  }
}

// const triangle = new Triangle(2, 3, 2);
// triangle.isEquilateral; /*? */

// const triangle = new Triangle(3, 4, 4);
// triangle.isIsosceles; /*? */

const triangle = new Triangle(5, 4, 6);
triangle.isScalene; /*?  */
