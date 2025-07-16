//
// This is only a SKLETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ITEMS = [
  'eggs',
  'peanuts',
  'shellfish',
  'strawberries',
  'tomatoes',
  'chocolate',
  'pollen',
  'cats'
]

export class Allergies {
  foods = [];
  constructor(score) {
    const formattedScore = [...score.toString(2)].reverse();
    for (let i = 0; i < formattedScore.length; i++) {
      if (parseInt(formattedScore[i]) && ITEMS[i]) {
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
