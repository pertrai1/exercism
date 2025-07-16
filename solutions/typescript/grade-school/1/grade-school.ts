type StudentRoster<T> = Map<T, string[]>;
export default class GradeSchool {
  public roster: StudentRoster<number> = new Map();

  public studentRoster = (): StudentRoster<string> => {
    const result: StudentRoster<string> = new Map();
    const grades = this.roster.keys();
    for (const grade of grades) {
      result.set(grade.toString(), this.studentsInGrade(grade));
    }
    return result;
  };

  public addStudent = (student: string, grade: number): void => {
    const studentsInGrade = [...(this.roster.get(grade) || []), student];
    this.roster.set(grade, studentsInGrade);
  };

  public studentsInGrade = (grade: number): string[] => {
    const studentsInGrade = this.roster.get(grade) || [];
    return studentsInGrade.sort().slice();
  };
}
