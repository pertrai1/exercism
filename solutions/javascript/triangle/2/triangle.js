/**
 * Taken from https://exercism.io/tracks/javascript/exercises/triangle/solutions/17dd8245433d4d7eb8777829d92304cc
 * for learning purposes. Intent is to understand the new possibilities using private, destructuring, and setting
 * up pure functions.
 */

const isFiniteNumber = n => typeof n === 'number' && isFinite(n);
const isPositiveNumber = n => isFiniteNumber(n) && n > 0;

export class Triangle {
  static verifyTriangle(sides) {
    const [side1, side2, side3] = sides.sort((a, b) => a - b);
    return (
      sides.length === 3 &&
      sides.every(isPositiveNumber) &&
      side1 + side2 >= side3
    );
  }

  #sides;
  #isEquilateral = false;
  #isIsosceles = false;
  #isScalene = false;

  constructor(...sides) {
    this.#sides = sides;

    if (Triangle.verifyTriangle(sides)) {
      const uniqueSides = new Set(sides);
      this.#isEquilateral = uniqueSides.size === 1;
      this.#isIsosceles = uniqueSides.size <= 2;
      this.#isScalene = uniqueSides.size === 3;
    }
  }

  get sides() {
    return this.#sides;
  }

  get isEquilateral() {
    return this.#isEquilateral;
  }

  get isIsosceles() {
    return this.#isIsosceles;
  }

  get isScalene() {
    return this.#isScalene;
  }
}
