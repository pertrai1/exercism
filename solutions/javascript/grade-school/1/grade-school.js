//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  rosterList = {};
  roster() {
    return Object.entries(this.rosterList).reduce((obj, curr) => {
      return Object.assign(obj, {
        [curr[0]]: [...curr[1].sort()]
      })
    }, {});

  }

  add(student, grade) {
    if (Object.keys(this.rosterList).includes(grade.toString())) {
      this.rosterList[grade].push(student);
    } else {
      Object.assign(this.rosterList, {
        [grade]: [student]
      })
    }
  }

  grade(num) {
    return [...this.rosterList[num]?.sort() || []];
  }
}
