const DNA = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};
export const toRna = (input) => {
  return input
    .split("")
    .map((nucleotide) => DNA[nucleotide])
    .join("");
};
