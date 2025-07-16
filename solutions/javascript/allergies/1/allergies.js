//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ITEMS = {
  'eggs': 1,
  'peanuts': 2,
  'shellfish': 4,
  'strawberries': 8,
  'tomatoes': 16,
  'chocolate': 32,
  'pollen': 64,
  'cats': 128
};
const TOTAL_SCORE = Object.values(ITEMS).reduce((total, item) => total + item, 0);
export class Allergies {
  constructor(score) {
    this.score = score;
  }

  list() {
    if (TOTAL_SCORE === this.score) {
      return Object.keys(ITEMS);
    }
    if (this.score === 0) {
      return [];
    }
    return Object.entries(ITEMS).reduce((list, item) => {
      if (item[1] === this.score) {
        list = list.filter(food => food === item[1])
      }
      if (item[1] <= this.score) {
        list.push(item[0]);
      }
      return list;
    }, [])
  }

  allergicTo(food) {
    if (Object.values(ITEMS).filter(item => item !== ITEMS[food]).includes(this.score)) {
      return false;
    }
    return this.score >= ITEMS[food] || this.score === TOTAL_SCORE;
  }
}
