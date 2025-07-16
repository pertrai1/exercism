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
    this.score = [...score.toString(2)].reverse();
    for (let i = 0; i < this.score.length; i++) {
      if (parseInt(this.score[i]) && ITEMS[i]) {
        this.foods.push(ITEMS[i]);
      }
    }
  }

  list() {
    return this.foods;
  }

  allergicTo(food) {
    return this.foods.includes(food);
  }
}
