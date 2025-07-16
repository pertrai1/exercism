//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, arr) => {
  return arr.filter((item) => {
    return item.toLowerCase().split('').sort().join('') === word.toLowerCase().split('').sort().join('');
  }).filter(w => w.toLowerCase() !== word.toLowerCase());
};
