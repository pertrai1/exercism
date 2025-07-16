//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const compute = (x, y) => {
  const xToArr = x.split('');
  const yToArr = y.split('');
  if (xToArr.length === 0 && yToArr.length === 0) {
    return 0;
  }
  if (xToArr.length === 0) {
    throw new Error('left strand must not be empty');
  }
  if (yToArr.length === 0) {
    throw new Error('right strand must not be empty');
  }
  if (xToArr.length !== yToArr.length) {
    throw new Error('left and right strands must be of equal length')
  }
  return xToArr.filter((x,i) => {
    return x !== yToArr[i];
  }).length;
}