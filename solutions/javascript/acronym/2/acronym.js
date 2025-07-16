//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (phrase) => {
  return phrase.replace(/[-_]/gi, ' ')
          .toUpperCase()
          .split(' ')
          .map(word => word[0])
          .join('')
};
