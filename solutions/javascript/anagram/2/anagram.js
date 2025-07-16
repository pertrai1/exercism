//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, arr) => {
  const sortedWord = word.toLowerCase().split('').sort().join('');
  return arr.filter((item) => {
    const sortedItem = item.toLowerCase().split('').sort().join('');
    return sortedWord === sortedItem && word.toLowerCase() !== item.toLowerCase();
  });
};
