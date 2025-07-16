//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const LETTER_GROUPING = {
  'AEIOULNRST': 1,
  'DG': 2,
  'BCMP': 3,
  'FHVWY': 4,
  'K': 5,
  'JX': 8,
  'QZ': 10
};
export const score = (str) => {
  return [...str].reduce((total, curr) => {
    const grouping = Object.keys(LETTER_GROUPING).filter(group => group.includes(curr.toUpperCase()));
    return total + LETTER_GROUPING[grouping];
  }, 0);
};
