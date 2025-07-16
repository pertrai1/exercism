//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isValid = (isbn) => {
  const withoutSlashes = [...isbn].filter(n => n !== '-');
  const hasInvalidCharacter = withoutSlashes.slice(0, -2).map(c => Number.isNaN(Number(c))).filter(Boolean).length === 0;
  return hasInvalidCharacter && (withoutSlashes.at(-1) === '8' || withoutSlashes.at(-1) === 'X');
};
