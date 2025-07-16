//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const PAIR_MATCH = {
  '{': '}',
  '[': ']',
  '(': ')'
};

export const isPaired = (input) => {
  const stackOfPairs = [];
  const strMatch = input.match(/[([{}\])]/g) || [];
  
  return strMatch.every(char => {
    return !!PAIR_MATCH[char] ? stackOfPairs.push(char) : PAIR_MATCH[stackOfPairs.pop()] === char
  }) && stackOfPairs.length === 0;
};
