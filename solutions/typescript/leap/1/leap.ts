const isLeapYear = (year: number): boolean => {
  const everyYear = year % 4 === 0;
  const year100 = year % 100 === 0;
  const year400 = year % 400 === 0;
  if (year100 && !year400) {
    return false;
  }
  if (everyYear && year400) {
    return true;
  }
  if (everyYear) {
    return true;
  }
  return false;
};

export default isLeapYear;
