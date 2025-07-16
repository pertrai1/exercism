//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(scores) {
    this.allScores = scores;
  }

  get scores() {
    return this.allScores;
  }

  get latest() {
    return this.allScores.pop();
  }

  get personalBest() {
    return this.allScores.reduce((a, b) => Math.max(a, b));
  }

  get personalTopThree() {
    return this.allScores.sort((a, b) => b - a).slice(0, 3);
  }
}
