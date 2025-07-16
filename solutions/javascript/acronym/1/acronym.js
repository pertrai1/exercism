//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (phrase) => {
  const phrases = phrase.replace("_", "").split(/[ -]+/);
  let myPhrases = [];
  phrases.forEach(p => myPhrases.push(p.slice(0, 1)));
  return myPhrases.join('').toUpperCase();
};
