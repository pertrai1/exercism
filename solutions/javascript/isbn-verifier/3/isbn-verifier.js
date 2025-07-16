//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isValid = (isbn) => {
  const withoutSlashes = [...isbn].filter(n => n !== '-');

  if (withoutSlashes.length !== 10) return false;
  if (withoutSlashes.slice(0, -2).some(c => Number.isNaN(Number(c)))) return false;
  if (withoutSlashes.at(-1) === 'X') withoutSlashes[9] = '10';

  return withoutSlashes.reduce((acc, curr, i) => {
    return acc + parseInt(curr) * (10 - i);
  }, 0) % 11 === 0;
};
