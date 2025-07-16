//
// This is only a SKLETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ITEMS = Object.keys({
  'eggs': 1,
  'peanuts': 2,
  'shellfish': 4,
  'strawberries': 8,
  'tomatoes': 16,
  'chocolate': 32,
  'pollen': 64,
  'cats': 128
});

export class Allergies {
  foods = [];
  constructor(score) {
    this.score = score.toString(2);
  }

  list() {
    this.foods = [...this.score].reverse().reduce((acc, curr, i) => {
      return parseInt(curr) && ITEMS[i] ? [...acc, ITEMS[i]] : acc
    }, []);
    return this.foods;
  }

  allergicTo(food) {
    return this.list().includes(food);
  }
}
