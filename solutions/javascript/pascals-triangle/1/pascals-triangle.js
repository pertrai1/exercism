//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function nextRow(row) {
  let nextRow = [];
  nextRow.push(1);
  for (let i = 1; i < row.length; i++) {
    nextRow.push(row[i - 1] + row[i]);
  }
  nextRow.push(1);
  return nextRow;
}

export const rows = (numberOfRows) => {
  let triangle = [];
  let row = [1];
  for (let i = 1; i <= numberOfRows; i++) {
    triangle.push(row);
    row = nextRow(row);
  }
  return triangle;
}