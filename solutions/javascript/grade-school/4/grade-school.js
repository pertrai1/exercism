//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  rosterList = {};
  roster() {
    return Object.entries(this.rosterList).reduce((obj, curr) => {
      return Object.assign(obj, {
        [curr[0]]: [...curr[1]]
      })
    }, {});
  }

  add(student, grade) {
    Object.entries(this.rosterList).reduce((roster, curr) => {
      this.rosterList[curr[0]] = this.rosterList[curr[0]].filter(s => s !== student);
    }, {});

    if (this.rosterList[grade.toString()]) {
      this.rosterList[grade].push(student);
      this.rosterList[grade].sort();
    } else {
      Object.assign(this.rosterList, {
        [grade]: [student]
      });
    }
  }

  grade(num) {
    return [...this.rosterList[num] || []];
  }
}
