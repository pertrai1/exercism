//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (word) => {
  const acceptedStrings = word.toLowerCase().split('').filter(str => str >= 'a' && str <= 'z');
  return new Set(acceptedStrings).size === word.replace(/[-\s]/g, '').length;
};
