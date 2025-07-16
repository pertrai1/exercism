//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function countNucleotides(strand) {
  const MAP = {
    'A': 0,
    'C': 0,
    'G': 0,
    'T': 0
  };
  const validStrands = [...strand].every(s => /[ACGT]/.test(s));

  if (validStrands) {
    [...strand].map(s => MAP[s]++)
    return Object.values(MAP).join(' ');
  } else {
    throw new Error('Invalid nucleotide in strand');
  }
}
